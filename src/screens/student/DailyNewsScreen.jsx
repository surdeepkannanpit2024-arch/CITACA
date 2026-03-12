import React, { useState } from 'react'
import { ArrowLeft, Filter } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DailyNewsScreen({ onLogout }) {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')
  
  const news = [
    { id: 1, title: 'Mid-term Exam Schedule Released', date: 'Today', category: 'Academic', icon: '📝' },
    { id: 2, title: 'New Club Registration Open', date: 'Yesterday', category: 'Campus', icon: '🎭' },
    { id: 3, title: 'Scholarship Opportunity Announced', date: '2 days ago', category: 'Academic', icon: '🎓' },
    { id: 4, title: 'Library Extended Hours This Week', date: '3 days ago', category: 'Campus', icon: '📚' },
  ]

  const categories = ['All', 'Academic', 'Campus']
  const filteredNews = activeCategory === 'All' ? news : news.filter(n => n.category === activeCategory)

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
        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? 'bg-cit-yellow text-cit-dark shadow-md' 
                : 'bg-white text-gray-500 border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition cursor-pointer border border-gray-50">
              <div className="flex items-start gap-4">
                <div className="text-3xl bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-cit-dark leading-tight">{item.title}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[10px] uppercase font-bold text-cit-yellow bg-cit-yellow/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
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
