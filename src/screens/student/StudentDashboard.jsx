import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, Menu, LogOut, User, BookOpen, Clock, BarChart3, Users, Zap } from 'lucide-react'
import Lottie from 'lottie-react'
import botAnimation from '../../assets/bot-animation.json'

export default function StudentDashboard({ onLogout }) {
  const [showMenu, setShowMenu] = useState(false)

  const studentData = {
    name: 'John Doe',
    roll: 'CS21001',
    attendance: 92,
    gpa: 3.8,
    pendingTasks: 3,
  }

  const quickLinks = [
    { id: 1, icon: Clock, label: 'Attendance', path: '/attendance', color: 'from-blue-400 to-blue-600' },
    { id: 2, icon: BarChart3, label: 'Marks', path: '/marks', color: 'from-green-400 to-green-600' },
    { id: 3, icon: BookOpen, label: 'Notes', path: '/notes', color: 'from-purple-400 to-purple-600' },
    { id: 4, icon: Users, label: 'Leaderboard', path: '/leaderboard', color: 'from-orange-400 to-orange-600' },
    { id: 5, icon: Zap, label: 'Competitions', path: '/competitions', color: 'from-red-400 to-red-600' },
    { id: 6, icon: BookOpen, label: 'Syllabus', path: '/syllabus', color: 'from-indigo-400 to-indigo-600' },
  ]

  const announcements = [
    { id: 1, title: 'Mid-term Exams', date: 'Mar 15 - Mar 25', icon: '📝' },
    { id: 2, title: 'Club Registration', date: 'Open Now', icon: '👥' },
    { id: 3, title: 'Hackathon 2024', date: 'Mar 30 - Apr 1', icon: '💻' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-32 relative">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cit-dark">CIT Dashboard</h1>
            <p className="text-sm text-cit-dark/80">Welcome, {studentData.name}</p>
          </div>
          <button className="p-2 hover:bg-white/20 rounded-lg transition mr-2">
            <Bell className="w-6 h-6 text-cit-dark" />
          </button>
          <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)} className="p-2 hover:bg-white/20 rounded-lg transition">
              <Menu className="w-6 h-6 text-cit-dark" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden w-48">
                <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-cit-dark">
                  <User className="w-5 h-5" />
                  Profile
                </Link>
                <button
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-red-600 text-left"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-cit-yellow">{studentData.attendance}%</div>
            <div className="text-xs text-gray-600 mt-1">Attendance</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600">{studentData.gpa}</div>
            <div className="text-xs text-gray-600 mt-1">Current GPA</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-red-600">{studentData.pendingTasks}</div>
            <div className="text-xs text-gray-600 mt-1">Pending Tasks</div>
          </div>
        </div>

        {/* Quick Access Grid Removed and transformed into Bottom Dock */}

        {/* Announcements */}
        <h2 className="text-lg font-bold text-cit-dark mb-4">Latest Announcements</h2>
        <div className="space-y-3 mb-8">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-xl p-4 shadow-lg flex items-start gap-4">
              <span className="text-2xl">{announcement.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-cit-dark">{announcement.title}</h3>
                <p className="text-sm text-gray-600">{announcement.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Chatbot CTA */}
        <Link
          to="/chatbot"
          className="flex items-center gap-4 bg-white border-2 border-cit-yellow relative overflow-hidden text-cit-dark font-bold p-4 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1 mb-6 mt-4"
        >
          {/* Animated Background Blob */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-cit-yellow/20 rounded-full blur-2xl"></div>
          
          <div className="w-16 h-16 bg-gradient-to-br from-cit-yellow to-cit-gold rounded-full shadow-inner flex items-center justify-center relative z-10 p-1">
            <Lottie animationData={botAnimation} loop={true} className="w-14 h-14" />
          </div>
          <div className="relative z-10 flex-1">
            <h3 className="text-lg font-extrabold pb-0.5">Ask the CIT AI</h3>
            <p className="text-sm font-medium text-gray-500">I can help with syllabus, dates, and info!</p>
          </div>
        </Link>

        {/* Wellness Card */}
        <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl p-6 text-center text-cit-dark font-semibold">
          🌟 Take care of your mental health. Click to access wellness resources.
        </div>
      </div>

      {/* Floating Bottom Navigation Dock */}
      <div className="fixed bottom-6 left-4 right-4 max-w-md mx-auto z-50 animate-slide-up">
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-3 border border-white flex justify-around items-center">
          {/* Quick Access items in the dock */}
          {quickLinks.slice(0, 5).map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                to={link.path}
                className="flex flex-col items-center p-2 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center shadow-md mb-1 transform hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-bold text-gray-600">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}
