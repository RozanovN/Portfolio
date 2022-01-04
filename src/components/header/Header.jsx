import "./header.scss";

export default function Header({menuOpen, setMenuOpen}) {
  return (
    <div className={"header " + (menuOpen && "active") } id="header">
      <div className="wrapper">
        <div id="website-name">
          <a href="#welcome">Portfolio</a>
        </div>
        <div id="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#welcome">Experience</a>
        </div>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span id="first-line"></span>
          <span id="second-line"></span>
          <span id="third-line"></span>
        </div>
      </div>
    </div>
  )
}
