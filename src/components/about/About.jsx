import "./about.scss";
import {Person, Mail, GitHub, LinkedIn} from "@material-ui/icons";

export default function About() {
  return (
      <div className="about" id="about">
        <div className="info-container">
          <div className="info-line">
            <Person className="icon"/>
            <p>Nikolay Rozanov</p>
          </div>
          <div className="info-line">
            <Mail className="icon"/>
            <p>nrozanov@my.bcit.ca</p>
          </div>
          <div className="info-line">
            <GitHub className="icon"/>
            <a href="https://www.github.com/RozanovN" target="_blank">RozanovN</a>
          </div>
          <div className="info-line">
            <LinkedIn className="icon"/>
            <a href="https://linkedin.com/in/nikolay-rozanov" target="_blank">Nikolay Rozanov</a>
          </div>
        </div>
      </div>
  )
}
