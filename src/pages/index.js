               //: Import React

import * as React from 'react'
import { Link} from 'gatsby'
import Layout from '../components/layout'

      // Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making a new website</p>
    </Layout>
  )
}

                  // Export your component

export default IndexPage