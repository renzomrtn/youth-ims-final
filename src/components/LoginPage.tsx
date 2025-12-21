import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import svgPaths from "../imports/svg-i3svc1uwy4";
import imgLogo from "../assets/70b6037ca8811c299a242748a14f3ede2d943af5.png";
import imgBackground from "../assets/356d1ff0764e3020ee664685fd91944232027d8b.png";

interface LoginPageProps {
  darkMode: boolean;
}

export function LoginPage({ darkMode }: LoginPageProps) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const success = login(username, password);
    
    if (!success) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center size-full min-h-screen relative">
      {/* Background Image */}
      <img 
        src={imgBackground} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        {/* Branding Section */}
        <div className="w-full flex items-center gap-[18px] p-10">
          <img src={imgLogo} alt="Logo" className="w-32 h-32 object-cover" />
          <div className="flex flex-col items-start justify-center">
            <p className="text-black text-nowrap whitespace-pre text-[48px] font-bold">YOUTH</p>
            <p className="text-black text-nowrap whitespace-pre text-[18px] font-bold">Youth Officials' Unified Transparency Hub</p>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="bg-[#ebebeb] rounded-[24px] p-[49px] w-[448px] border border-[rgba(255,255,255,0.3)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_25px_100px_0px_rgba(0,0,0,0.25)]">
            {/* Welcome Header */}
            <div className="text-center mb-9">
              <h1 className="text-black mb-1">Welcome Back</h1>
              <p className="text-[rgba(5,5,5,0.5)]">Please sign in to your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              {/* Username Field */}
              <div className="bg-[rgba(255,255,255,0.2)] border border-[#174499] rounded-[16px] h-[60px] flex items-center gap-[19px] px-[10px]">
                <div className="w-[14px] h-[16px] flex items-center justify-center">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 14 16">
                    <g clipPath="url(#clip0_user)">
                      <path d={svgPaths.p2def7700} fill="black" fillOpacity="0.6" />
                    </g>
                    <defs>
                      <clipPath id="clip0_user">
                        <path d="M0 0H14V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-black placeholder:text-black/50"
                />
              </div>

              {/* Password Field */}
              <div className="bg-[rgba(255,255,255,0.2)] border border-[#174499] rounded-[16px] h-[60px] flex items-center gap-[19px] px-[10px]">
                <div className="w-[14px] h-[16px] flex items-center justify-center">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 14 16">
                    <g clipPath="url(#clip0_lock)">
                      <path d={svgPaths.pcd0dd00} fill="black" fillOpacity="0.6" />
                    </g>
                    <defs>
                      <clipPath id="clip0_lock">
                        <path d="M0 0H14V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-black placeholder:text-black/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-[14px] h-[14px] flex items-center justify-center"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-[13px] h-[13px] bg-[#969696] border-[0.5px] border-white rounded-[1px]"
                />
                <label htmlFor="remember" className="text-[rgba(0,0,0,0.8)]">
                  Remember me
                </label>
              </div>

              {/* Spacing */}
              <div className="h-[11px]" />

              {/* Forgot Password */}
              <div className="text-center">
                <button type="button" className="text-[rgba(249,5,5,0.8)]">
                  Forgot Password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="bg-[#86b0ff] border border-white rounded-[16px] px-[142px] py-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] text-black text-center hover:bg-[#6fa0ff] transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}