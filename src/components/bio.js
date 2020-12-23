import React from "react"
import Emoji from "../components/emoji"
import Pdf from "../../static/resume.pdf"
import "../style.css"

function Bio() {
  // URL for GitHub
  const githubLink = `https://github.com/frederickbyte`
  // URL for LinkedIn
  const linkedinLink = `https://linkedin.com/in/frederick-stolzle`
  return (
    <div className="bio-body">
      <article>
        Hey there <Emoji symbol="👋" label="hand wave emoji" /> I'm Andrew.
        Developer with experience creating primarily web and mobile
        applications. I also enjoy writing as it helps me to organize my ideas
        and to think more clearly.
      </article>
      <nav className={"index-links"}>
        <a href={Pdf} rel="noopener noreferrer" className="button">
          Resumé
        </a>
        <a href={githubLink} rel="noopener noreferrer" className="button">
          GitHub
        </a>
        <a href={linkedinLink} rel="noopener noreferrer" className="button">
          LinkedIn
        </a>
        <a
          href={`mailto:andrewstolzle@gmail.com`}
          rel="noopener noreferrer"
          className="button"
        >
          Email
        </a>
      </nav>
    </div>
  )
}

export default Bio
