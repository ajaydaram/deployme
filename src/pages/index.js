               //: Import React

import * as React from 'react'
import { Link } from 'gatsby'

      // Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to My Website!</h1>
      <Link to="/about">About</Link>
      <p>This is 20th time i am trying!</p>
    </main>
  )
}

                  // Export your component

export default IndexPage