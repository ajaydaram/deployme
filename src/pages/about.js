// Import react so you can use a react file
import * as React from 'react'
import { Link } from 'gatsby'

//define a component 

const AboutPage = () => {
    return(
      <main>
          <title>I am Ajay</title>
          <h1>About Me</h1>
          <Link to="/">Back to Home</Link>
          <p>This is the fucking 20th time i am trying</p>
      </main>  
    )
}

// export your component to use by other parts of the site
 
export default AboutPage