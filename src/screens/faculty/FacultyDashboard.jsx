import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, Menu, LogOut, User, Users, Upload, FileText, CheckCircle } from 'lucide-react'

export default function FacultyDashboard({ onLogout }) {
  const [showMenu, setShowMenu] = useState(false)

  const facultyData = {
    name: 'Dr. Rajesh Kumar',
    department: 'Computer Science',
    classes: 3,
    totalStudents: 120,
  }

  const quickLinks = [
    { id: 1, icon: Users, label: 'Attendance', path: '/attendance-manager', color: 'from-blue-400 to-blue-600' },
    { id: 2, icon: Upload, label: 'Upload Notes', path: '/notes-upload', color: 'from-green-400 to-green-600' },
    { id: 3, icon: FileText, label: 'Assignments', path: '/assignments', color: 'from-purple-400 to-purple-600' },
    { id: 4, icon: CheckCircle, label: 'Reset Plans', path: '/reset-plans', color: 'from-orange-400 to-orange-600' },
  ]

  const classes = [
    { id: 1, name: 'Data Structures (CS21001)', students: 40, section: 'A' },
    { id: 2, name: 'Web Development (CS21002)', students: 38, section: 'B' },
    { id: 3, name: 'Database Systems (CS21003)', students: 42, section: 'C' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cit-dark">Faculty Portal</h1>
            <p className="text-sm text-cit-dark/80">Welcome, {facultyData.name}</p>
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

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-cit-yellow">{facultyData.classes}</div>
            <div className="text-xs text-gray-600 mt-1">Classes</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600">{facultyData.totalStudents}</div>
            <div className="text-xs text-gray-600 mt-1">Students</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div className="text-xs text-gray-600 mt-1">Pending</div>
          </div>
        </div>

        {/* Quick Links */}
        <h2 className="text-lg font-bold text-cit-dark mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.id}
                to={link.path}
                className={`bg-gradient-to-br ${link.color} rounded-xl p-4 text-white font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">{link.label}</div>
              </Link>
            )
          })}
        </div>

        {/* Classes */}
        <h2 className="text-lg font-bold text-cit-dark mb-4">My Classes</h2>
        <div className="space-y-3">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-cit-dark">{cls.name}</h3>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>📚 Section {cls.section}</span>
                <span>👥 {cls.students} Students</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
