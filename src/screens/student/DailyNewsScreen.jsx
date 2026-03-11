import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DailyNewsScreen({ onLogout }) {
  const navigate = useNavigate()
  const news = [
    { id: 1, title: 'Mid-term Exam Schedule Released', date: 'Today', category: 'Academic', icon: '📝' },
    { id: 2, title: 'New Club Registration Open', date: 'Yesterday', category: 'Campus', icon: '🎭' },
    { id: 3, title: 'Scholarship Opportunity Announced', date: '2 days ago', category: 'Announcement', icon: '🎓' },
    { id: 4, title: 'Library Extended Hours This Week', date: '3 days ago', category: 'Update', icon: '📚' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">College News</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-cit-dark">{item.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs bg-cit-yellow/20 text-cit-dark px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
