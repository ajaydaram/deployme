// Import react so you can use a react file
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

//define a component 

const AboutPage = () => {
    return(
      <Layout pageTitle="About Me">
          <p>This is the  20th time i am trying</p>
      </Layout>  
    )
}

export default AboutPage