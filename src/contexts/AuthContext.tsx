import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authAPI } from "../utils/database";

export interface User {
  username: string;
  role: "SKF Secretary" | "SKF Treasurer" | "SKF Auditor" | "SKF President";
  fullName: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  // Load session from localStorage on mount and verify it
  useEffect(() => {
    const storedToken = localStorage.getItem("sessionToken");
    if (storedToken) {
      // Verify the session token with the server
      authAPI.verifySession(storedToken)
        .then((response) => {
          setUser(response.user);
          setSessionToken(storedToken);
        })
        .catch((error) => {
          console.error("Session verification failed:", error);
          // Clear invalid session
          localStorage.removeItem("sessionToken");
          setSessionToken(null);
          setUser(null);
        });
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await authAPI.login(username, password);

      console.log('Login response:', response); // ← Add this

      
      if (response.user && response.sessionToken) {
        const loggedInUser: User = {
          username: response.user.username,
          role: response.user.role,
          fullName: response.user.fullName
        };
        
        setUser(loggedInUser);
        setSessionToken(response.sessionToken);
        localStorage.setItem("sessionToken", response.sessionToken);

        console.log('Stored session token:', response.sessionToken); // ← Add this

        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      if (sessionToken) {
        await authAPI.logout(sessionToken);
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      setSessionToken(null);
      localStorage.removeItem("sessionToken");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
