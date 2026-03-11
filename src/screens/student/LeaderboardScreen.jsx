import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function LeaderboardScreen({ onLogout }) {
  const navigate = useNavigate()
  const leaderboard = [
    { rank: 1, name: 'Alice Johnson', points: 2850, batch: '2023-2027' },
    { rank: 2, name: 'Bob Smith', points: 2720, batch: '2023-2027' },
    { rank: 3, name: 'Carol White', points: 2610, batch: '2023-2027' },
    { rank: 4, name: 'You', points: 2450, batch: '2023-2027', isYou: true },
    { rank: 5, name: 'Eve Davis', points: 2340, batch: '2023-2027' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Leaderboard</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-3">
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`rounded-xl p-4 shadow-lg flex items-center justify-between ${
                entry.isYou ? 'bg-cit-yellow/20 border-2 border-cit-yellow' : 'bg-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  entry.rank === 1 ? 'bg-yellow-500' : entry.rank === 2 ? 'bg-gray-400' : entry.rank === 3 ? 'bg-orange-600' : 'bg-cit-yellow'
                }`}>
                  {entry.rank}
                </div>
                <div>
                  <h3 className="font-bold text-cit-dark">{entry.name}</h3>
                  <p className="text-xs text-gray-600">{entry.batch}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-cit-yellow text-lg">{entry.points}</div>
                <div className="text-xs text-gray-600">points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
