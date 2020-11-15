import React from "react"
import Emoji from "../components/emoji"
import "../style.css"

function Bio() {
  return (
    <div style={{ display: `flex`, flexDirection: `column` }}>
      <p className={"bio-body"}>
        Hey there <Emoji symbol="👋" label="hand wave emoji" /> I'm Andrew.
        Developer with experience creating primarily web and mobile
        applications. I also enjoy writing as it helps me to organize my ideas
        and to think more clearly.
      </p>
    </div>
  )
}

export default Bio
