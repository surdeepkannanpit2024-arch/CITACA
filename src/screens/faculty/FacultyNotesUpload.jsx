import React, { useState } from 'react'
import { ArrowLeft, Upload, FileText, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function FacultyNotesUpload({ onLogout }) {
  const navigate = useNavigate()
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [subject, setSubject] = useState('')
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = (e) => {
    e.preventDefault()
    if (!selectedFile || !subject) return
    setUploading(true)
    // Simulate upload
    setTimeout(() => {
      setUploading(false)
      setSuccess(true)
      setTimeout(() => {
        navigate(-1)
      }, 1500)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-cit-yellow to-cit-gold shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-lg transition">
            <ArrowLeft className="w-6 h-6 text-cit-dark" />
          </button>
          <h1 className="text-2xl font-bold text-cit-dark">Upload Notes</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {success ? (
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center space-y-4 animate-bounce-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-cit-dark">Upload Successful!</h2>
            <p className="text-gray-500">Your notes have been shared with the students.</p>
          </div>
        ) : (
          <form onSubmit={handleUpload} className="bg-white rounded-2xl p-6 shadow-xl space-y-6">
            <div>
              <label className="block text-sm font-bold text-cit-dark mb-2">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-cit-yellow outline-none bg-gray-50 font-medium"
                required
              >
                <option value="">Select Subject</option>
                <option value="ds">Data Structures</option>
                <option value="cn">Computer Networks</option>
                <option value="os">Operating Systems</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-cit-dark mb-2">Chapter/Topic Name</label>
              <input
                type="text"
                placeholder="e.g. Unit 3 - Graphs"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-cit-yellow outline-none bg-gray-50 font-medium"
                required
              />
            </div>

            <div
              className={`border-4 border-dashed rounded-2xl p-8 text-center transition-colors ${
                dragActive ? 'border-cit-yellow bg-cit-yellow/5' : 'border-gray-100'
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFileChange({ target: e.dataTransfer }); }}
            >
              <Upload className="w-12 h-12 text-cit-yellow mx-auto mb-4" />
              <p className="text-cit-dark font-bold">
                {selectedFile ? selectedFile.name : 'Drag & Drop or Click to Upload'}
              </p>
              <p className="text-xs text-gray-400 mt-2">Support: PDF, Word, PPT (Max 20MB)</p>
              <input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-upload"
                className="mt-4 inline-block bg-cit-yellow/10 text-cit-yellow px-6 py-2 rounded-lg font-bold cursor-pointer hover:bg-cit-yellow hover:text-cit-dark transition"
              >
                Browse Files
              </label>
            </div>

            <button
              type="submit"
              disabled={uploading || !selectedFile || !subject}
              className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                uploading || !selectedFile || !subject
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cit-yellow to-cit-gold text-cit-dark hover:scale-[1.02]'
              }`}
            >
              {uploading ? (
                <div className="w-6 h-6 border-4 border-cit-dark border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  Publish to Students
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
