import "./offcanvas.scss";

export default function Offcanvas({menuOpen, setMenuOpen}) {
  return (
      <div className={"offcanvas-menu " + (menuOpen && "active")}>
        <div id="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#welcome">Experience</a>
        </div>
      </div>
  )
}
