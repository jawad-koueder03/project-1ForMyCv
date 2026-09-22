import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import { Car, Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      dir="rtl"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-900 p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Car className="w-8 h-8" />
            </div>
          </div>

          <h1 className="text-2xl font-bold">نظام معلومات المرور</h1>
          <p className="text-sm mt-2 text-blue-100">تسجيل الدخول إلى النظام</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>

              <div className="relative">
                <Mail className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-xl py-3 pr-11 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>

              <div className="relative">
                <Lock className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-xl py-3 pr-11 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-3 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                />
                <span>تذكرني</span>
              </label>

              <button
                type="button"
                className="text-blue-600 hover:text-blue-800"
              >
                نسيت كلمة المرور؟
              </button>
            </div>

            {/* Login Button */}
            <Link to="/traficChatApp">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-900 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-lg"
              >
                تسجيل الدخول
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
