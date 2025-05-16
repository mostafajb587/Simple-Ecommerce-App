import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
  FaApple,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "../store/authStore";
import * as z from "zod";

interface FormInputs {
  email: string;
  password: string;
  username?: string;
}

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const signupSchema = loginSchema.extend({
  username: z.string().min(3, "Username must be at least 3 characters"),
});

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const signUp = useAuthStore((state) => state.signUp);
  const login = useAuthStore((state) => state.login);

  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const mode = searchParams.get("mode");
    setIsLogin(mode !== "signup");
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
  });

  const onSubmit = (data: FormInputs) => {
    setLoginError("");

    if (isLogin) {
      const success = login(data.email, data.password);
      if (success) {
        alert("Login successful!");
      } else {
        setLoginError("Invalid email or password.");
      }
    } else {
      const success = signUp({
        email: data.email,
        password: data.password,
        username: data.username || "",
      });

      if (success) {
        alert("Sign up successful!");

        setIsLogin(true);
      } else {
        setLoginError("Email already exists.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-6 text-white">
          <h2 className="text-2xl font-bold text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-center text-orange-100 mt-1">
            {isLogin ? "Sign in to continue" : "Join us today"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 font-medium ${
              isLogin
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 font-medium ${
              !isLogin
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Socials */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              type="button"
              className="bg-red-50 text-red-600 rounded-lg py-2 hover:bg-red-100"
            >
              <FaGoogle />
            </button>
            <button
              type="button"
              className="bg-blue-50 text-blue-600 rounded-lg py-2 hover:bg-blue-100"
            >
              <FaFacebook />
            </button>
            <button
              type="button"
              className="bg-gray-100 text-gray-800 rounded-lg py-2 hover:bg-gray-200"
            >
              <FaApple />
            </button>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                id="email"
                type="email"
                {...register("email")}
                className="pl-10 w-full py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="pl-10 pr-20 w-full py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Username (signup only) */}
          {!isLogin && (
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  id="username"
                  type="text"
                  {...register("username")}
                  className="pl-10 w-full py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="yourname"
                />
              </div>
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
          )}

          {/* Login error message */}
          {loginError && (
            <p className="text-sm text-red-600 font-semibold">{loginError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-amber-700"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
