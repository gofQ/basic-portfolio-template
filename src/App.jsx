import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Tabbar from "./components/Try/Tabbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import "./App.css"
import "./mediaQueries.css"
import Navbar from "./components/Navbar/Navbar";
import PageContainer from "./components/PageContainer";
import ProjectPage from "./pages/ProjectPage";
import TabbarResponsive from "./components/TabbarResponsive/TabbarResponsive";
import WorkPage from "./pages/WorkPage";

const App = () => {
  return (
    <Router>
      <div id="RouterContainer" className="flex flex-row w-full relative h-screen font-mono">
      
      <Tabbar /> 
      <div id="BarContainer"  >
      <Navbar />
      </div>
      <TabbarResponsive />
        <div id="Routes" className="w-full bg-slate-600 text-gray-200  overflow-y-auto">
          <PageContainer>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path='/portfolio/:id' element={<WorkPage />} />
          </Routes>
          </PageContainer>
        </div>
      </div>
    </Router>
  );
};

export default App;
