import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, GraduationCap, BookOpen, Briefcase, Users, Settings } from 'lucide-react'

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState('student')

  const roles = [
    { id: 'student', name: 'Student', icon: <GraduationCap className="w-7 h-7 mb-1 mx-auto" /> },
    { id: 'faculty', name: 'Faculty', icon: <BookOpen className="w-7 h-7 mb-1 mx-auto" /> },
    { id: 'hod', name: 'HOD', icon: <Briefcase className="w-7 h-7 mb-1 mx-auto" /> },
    { id: 'parent', name: 'Parent', icon: <Users className="w-7 h-7 mb-1 mx-auto" /> },
    { id: 'admin', name: 'Admin', icon: <Settings className="w-7 h-7 mb-1 mx-auto" /> },
  ]

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Auto-detect role based on keywords in email
    const lowerEmail = value.toLowerCase();

    if (lowerEmail.includes('student')) {
      setSelectedRole('student');
    } else if (lowerEmail.includes('faculty') || lowerEmail.includes('teacher')) {
      setSelectedRole('faculty');
    } else if (lowerEmail.includes('hod')) {
      setSelectedRole('hod');
    } else if (lowerEmail.includes('parent')) {
      setSelectedRole('parent');
    } else if (lowerEmail.includes('admin')) {
      setSelectedRole('admin');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      onLogin(selectedRole)
    }
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-cit-yellow via-cit-yellow/40 to-white flex items-center justify-center p-4">

      {/* Top Aerial Background Image Fragment */}
      <div className="absolute top-0 left-0 right-0 z-0">
        <img
          src="/campus-banner.jpg"
          alt="Campus Banner"
          className="w-full h-auto block rounded-b-3xl shadow-lg"
        />
        {/* Dark/gradient overlay so text remains readable */}
        <div className="absolute inset-0 bg-black/40 rounded-b-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10 mt-32">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in relative z-10">
          <div className="inline-flex items-center justify-center bg-white rounded-full shadow-xl mb-4 w-44 h-44 p-2 overflow-hidden">
            <img 
              src="/cit-logo.jpg" 
              alt="CIT Logo" 
              className="w-full h-full object-contain transform scale-125"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">Welcome Back</h1>
        </div>

        {/* Role Selection */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg">
          <label className="block text-sm font-semibold text-cit-dark mb-4">Select Your Role</label>
          {/* First row: Student, Faculty, HOD */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {roles.slice(0, 3).map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-3 rounded-xl font-medium text-xs transition-all ${selectedRole === role.id
                    ? 'bg-cit-yellow text-cit-dark shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {role.icon}
                <div>{role.name}</div>
              </button>
            ))}
          </div>
          {/* Second row: Parent, Admin — centered */}
          <div className="grid grid-cols-2 gap-3 px-8">
            {roles.slice(3).map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-3 rounded-xl font-medium text-xs transition-all ${selectedRole === role.id
                    ? 'bg-cit-yellow text-cit-dark shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {role.icon}
                <div>{role.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 shadow-xl">
          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-cit-dark mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-cit-yellow" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cit-yellow focus:outline-none transition"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-cit-dark mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 w-5 h-5 text-cit-yellow" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-cit-yellow focus:outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 accent-cit-yellow rounded" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-cit-yellow hover:text-cit-gold font-medium">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cit-yellow to-cit-gold text-cit-dark font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all mb-4"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-cit-yellow font-semibold hover:text-cit-gold">
              Sign Up
            </a>
          </p>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>© 2026 CIT Chennai. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
