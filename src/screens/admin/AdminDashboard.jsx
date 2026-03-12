import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, Menu, LogOut, User, Users, Shield, Settings, FileBarChart, Megaphone, Activity } from 'lucide-react'

export default function AdminDashboard({ onLogout }) {
  const [showMenu, setShowMenu] = useState(false)

  const stats = [
    { label: 'Students', value: '2,400', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Faculty', value: '85', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'System Health', value: '98%', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Admins', value: '45', icon: Shield, color: 'text-orange-600', bg: 'bg-orange-50' },
  ]

  const tools = [
    { title: 'User Management', desc: 'Manage access levels', icon: Users },
    { title: 'System Settings', desc: 'API keys & configurations', icon: Settings },
    { title: 'Academic Reports', desc: 'Generate exportable PDFs', icon: FileBarChart },
    { title: 'Global Broadcast', desc: 'Send push notifications', icon: Megaphone },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-cit-dark">Admin Console</h1>
            <p className="text-sm text-cit-dark/80">CIT Infrastructure</p>
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
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-cit-dark">{stat.value}</div>
              <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Admin Tools */}
        <h2 className="text-lg font-bold text-cit-dark mb-4 px-1">Infrastructure Tools</h2>
        <div className="grid grid-cols-1 gap-4">
          {tools.map((tool, i) => (
            <button key={i} className="bg-white p-4 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition text-left group border border-gray-100">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-cit-yellow group-hover:text-cit-dark transition">
                <tool.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-cit-dark">{tool.title}</h3>
                <p className="text-xs text-gray-500">{tool.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Log */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-cit-dark mb-4 px-1">Recent Activity</h2>
          <div className="bg-white rounded-2xl shadow-md divide-y divide-gray-50 overflow-hidden border border-gray-100">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-cit-yellow"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-cit-dark">User CS21004 password reset</div>
                  <div className="text-[10px] text-gray-400">2 minutes ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
