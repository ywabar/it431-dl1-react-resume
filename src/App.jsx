import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Employment from "./pages/Employment";
import Education from "./pages/Education";
import resumeData from "./data/resumeData";
import Skills from "./pages/Skills";
import "./App.css";
import References from "./pages/References";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Contact data={resumeData} />} />
          <Route
            path="/employment"
            element={<Employment data={resumeData} />}
          />
          <Route
            path="/education"
            element={<Education educationData={resumeData.education} />}
          />
          <Route
            path="/skills"
            element={<Skills skillsData={resumeData.skills} />}
          />
          <Route
            path="/references"
            element={<References referenceData={resumeData.references} />}
          />
          {/* TODO: Add skills and references here */} //done
        </Routes>
      </div>
    </Router>
  );
}

export default App;
