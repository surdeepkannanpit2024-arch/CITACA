import React, { useState } from 'react'
import { ArrowLeft, Download, FileText, BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function NotesScreen({ onLogout }) {
  const navigate = useNavigate()

  const notes = [
    { id: 1, subject: 'Data Structures', topic: 'Arrays and Linked Lists', date: 'Mar 10', pages: 12, downloads: 234 },
    { id: 2, subject: 'Web Development', topic: 'React Hooks', date: 'Mar 9', pages: 8, downloads: 456 },
    { id: 3, subject: 'Database Systems', topic: 'SQL Queries', date: 'Mar 8', pages: 15, downloads: 189 },
    { id: 4, subject: 'Algorithms', topic: 'Dynamic Programming', date: 'Mar 7', pages: 18, downloads: 312 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Study Notes</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <div className="bg-cit-yellow p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-cit-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-cit-dark">{note.subject}</h3>
                  <p className="text-sm text-gray-600">{note.topic}</p>
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <span>📄 {note.pages} pages</span>
                    <span>⬇️ {note.downloads} downloads</span>
                    <span>📅 {note.date}</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-yellow-100 rounded-lg transition">
                  <Download className="w-5 h-5 text-cit-yellow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
