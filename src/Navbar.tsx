import pdf from "./assets/EnnoAragonResume.pdf";
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h4>ennoaragon</h4>
      </div>
      <div className="navbar-content">
        <a href="https://www.linkedin.com/in/enno-aragon-321318204/">Linkedin</a>
        <a href="https://github.com/ennoaragon">Github</a>
        <a href={pdf} download="EnnoAragonResume">Resume</a>
      </div>

    </nav>
  )
} 
