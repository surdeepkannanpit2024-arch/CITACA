import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'

// Import screens
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen'
import StudentDashboard from './screens/student/StudentDashboard'
import SyllabusTracker from './screens/student/SyllabusTracker'
import AttendanceScreen from './screens/student/AttendanceScreen'
import MarksScreen from './screens/student/MarksScreen'
import NotesScreen from './screens/student/NotesScreen'
import StudentPlannerScreen from './screens/student/StudentPlannerScreen'
import LeaderboardScreen from './screens/student/LeaderboardScreen'
import CompetitionDashboardScreen from './screens/student/CompetitionDashboardScreen'
import DailyNewsScreen from './screens/student/DailyNewsScreen'
import AIChatbotScreen from './screens/student/AIChatbotScreen'
import FacultyDashboard from './screens/faculty/FacultyDashboard'
import FacultyAttendanceManager from './screens/faculty/FacultyAttendanceManager'
import FacultyNotesUpload from './screens/faculty/FacultyNotesUpload'
import AssignmentsScreen from './screens/faculty/AssignmentsScreen'
import HodDashboard from './screens/hod/HodDashboard'
import ParentDashboard from './screens/parent/ParentDashboard'
import AdminDashboard from './screens/admin/AdminDashboard'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    // Simulate splash screen delay
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Check if user is already logged in
      const storedAuth = localStorage.getItem('isAuthenticated')
      const storedRole = localStorage.getItem('userRole')
      if (storedAuth === 'true') {
        setIsAuthenticated(true)
        setUserRole(storedRole)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleLogin = (role) => {
    setIsAuthenticated(true)
    setUserRole(role)
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userRole', role)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserRole(null)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userRole')
  }

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            {/* Student Routes */}
            {userRole === 'student' && (
              <>
                <Route path="/" element={<StudentDashboard onLogout={handleLogout} />} />
                <Route path="/dashboard" element={<StudentDashboard onLogout={handleLogout} />} />
                <Route path="/syllabus" element={<SyllabusTracker onLogout={handleLogout} />} />
                <Route path="/attendance" element={<AttendanceScreen onLogout={handleLogout} />} />
                <Route path="/marks" element={<MarksScreen onLogout={handleLogout} />} />
                <Route path="/notes" element={<NotesScreen onLogout={handleLogout} />} />
                <Route path="/planner" element={<StudentPlannerScreen onLogout={handleLogout} />} />
                <Route path="/leaderboard" element={<LeaderboardScreen onLogout={handleLogout} />} />
                <Route path="/competitions" element={<CompetitionDashboardScreen onLogout={handleLogout} />} />
                <Route path="/news" element={<DailyNewsScreen onLogout={handleLogout} />} />
                <Route path="/chatbot" element={<AIChatbotScreen onLogout={handleLogout} />} />
                <Route path="/profile" element={<ProfileScreen role="student" onLogout={handleLogout} />} />
              </>
            )}

            {/* Faculty Routes */}
            {userRole === 'faculty' && (
              <>
                <Route path="/" element={<FacultyDashboard onLogout={handleLogout} />} />
                <Route path="/dashboard" element={<FacultyDashboard onLogout={handleLogout} />} />
                <Route path="/attendance-manager" element={<FacultyAttendanceManager onLogout={handleLogout} />} />
                <Route path="/notes-upload" element={<FacultyNotesUpload onLogout={handleLogout} />} />
                <Route path="/assignments" element={<AssignmentsScreen onLogout={handleLogout} />} />
                <Route path="/profile" element={<ProfileScreen role="faculty" onLogout={handleLogout} />} />
              </>
            )}

            {/* HOD Routes */}
            {userRole === 'hod' && (
              <>
                <Route path="/" element={<HodDashboard onLogout={handleLogout} />} />
                <Route path="/dashboard" element={<HodDashboard onLogout={handleLogout} />} />
                <Route path="/profile" element={<ProfileScreen role="hod" onLogout={handleLogout} />} />
              </>
            )}

            {/* Parent Routes */}
            {userRole === 'parent' && (
              <>
                <Route path="/" element={<ParentDashboard onLogout={handleLogout} />} />
                <Route path="/dashboard" element={<ParentDashboard onLogout={handleLogout} />} />
                <Route path="/profile" element={<ProfileScreen role="parent" onLogout={handleLogout} />} />
              </>
            )}

            {/* Admin Routes */}
            {userRole === 'admin' && (
              <>
                <Route path="/" element={<AdminDashboard onLogout={handleLogout} />} />
                <Route path="/dashboard" element={<AdminDashboard onLogout={handleLogout} />} />
                <Route path="/profile" element={<ProfileScreen role="admin" onLogout={handleLogout} />} />
              </>
            )}

            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
