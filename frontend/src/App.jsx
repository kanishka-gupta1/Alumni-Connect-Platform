import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpAlumni from './pages/SignUpAlumni';
import SignUpStudent from './pages/SignUpStudent';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import AlumniDashboard from './pages/AlumniDashboard';
import AlumniProfile from './pages/AlumniProfile';
import StudentProfile from './pages/StudentProfile';
import StudentQuestionPage from './pages/StudentQuestionPage';
import Connect from './pages/Connect';
import AlumniPost from './pages/AlumniPost';
import AlumniQuestions from './pages/AlumniQuestions';
import AlumniRequest from './pages/AlumniRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-alumni" element={<SignUpAlumni />} />
        <Route path="/signup-student" element={<SignUpStudent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/alumni" element={<AlumniDashboard />} />
        <Route path="/alumni/profile" element={<AlumniProfile />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/questions" element={<StudentQuestionPage />} />
        <Route path="/student/connect" element={<Connect />} />
        <Route path="/alumni/post" element={<AlumniPost/>} />
        <Route path="/alumni/questions" element={<AlumniQuestions/>} />
        <Route path="/alumni/request" element={<AlumniRequest/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
