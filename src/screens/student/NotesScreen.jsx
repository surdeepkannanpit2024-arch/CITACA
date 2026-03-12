import React, { useState } from 'react'
import { ArrowLeft, Download, FileText, CheckCircle2, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function NotesScreen({ onLogout }) {
  const navigate = useNavigate()
  const [downloadingId, setDownloadingId] = useState(null)
  const [downloadedIds, setDownloadedIds] = useState([])
  const [search, setSearch] = useState('')

  const notes = [
    { id: 1, subject: 'Data Structures', topic: 'Arrays and Linked Lists', date: 'Mar 10', pages: 12, downloads: 234 },
    { id: 2, subject: 'Web Development', topic: 'React Hooks', date: 'Mar 9', pages: 8, downloads: 456 },
    { id: 3, subject: 'Database Systems', topic: 'SQL Queries', date: 'Mar 8', pages: 15, downloads: 189 },
    { id: 4, subject: 'Algorithms', topic: 'Dynamic Programming', date: 'Mar 7', pages: 18, downloads: 312 },
  ]

  const handleDownload = (id) => {
    setDownloadingId(id)
    setTimeout(() => {
      setDownloadedIds([...downloadedIds, id])
      setDownloadingId(null)
    }, 2000)
  }

  const filteredNotes = notes.filter(n => 
    n.subject.toLowerCase().includes(search.toLowerCase()) || 
    n.topic.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Study Notes</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search notes..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-transparent focus:border-cit-yellow outline-none bg-white shadow-md font-medium"
          />
        </div>

        <div className="space-y-4">
          {filteredNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-cit-yellow/10 p-3 rounded-xl">
                  <FileText className="w-6 h-6 text-cit-yellow" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-cit-dark leading-tight">{note.subject}</h3>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">{note.topic}</p>
                  <div className="flex gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-3">
                    <span>{note.pages} pages</span>
                    <span>{note.downloads} dl</span>
                    <span>{note.date}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleDownload(note.id)}
                  disabled={downloadingId === note.id}
                  className={`p-2 rounded-xl transition ${
                    downloadedIds.includes(note.id) 
                    ? 'text-green-500 bg-green-50' 
                    : 'text-cit-yellow hover:bg-cit-yellow/10'
                  }`}
                >
                  {downloadingId === note.id ? (
                    <div className="w-5 h-5 border-2 border-cit-yellow border-t-transparent rounded-full animate-spin"></div>
                  ) : downloadedIds.includes(note.id) ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Download className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
