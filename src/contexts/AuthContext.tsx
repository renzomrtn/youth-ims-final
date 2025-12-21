import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  username: string;
  role: "SKF Secretary" | "SKF Treasurer" | "SKF Auditor" | "SKF President";
  fullName: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// User credentials database
const USERS: Record<string, { password: string; role: User["role"]; fullName: string }> = {
  skf_secretary: {
    password: "password123",
    role: "SKF Secretary",
    fullName: "SKF Secretary"
  },
  skf_treasurer: {
    password: "password123",
    role: "SKF Treasurer",
    fullName: "SKF Treasurer"
  },
  skf_auditor: {
    password: "password123",
    role: "SKF Auditor",
    fullName: "SKF Auditor"
  },
  skf_president: {
    password: "password123",
    role: "SKF President",
    fullName: "SKF President"
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("currentUser");
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const userCredentials = USERS[username];
    
    if (userCredentials && userCredentials.password === password) {
      const loggedInUser: User = {
        username,
        role: userCredentials.role,
        fullName: userCredentials.fullName
      };
      
      setUser(loggedInUser);
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
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
