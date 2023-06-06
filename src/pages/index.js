               //: Import React

import * as React from 'react'
import { Link} from 'gatsby'
import Layout from '../components/layout'
               import SurveyForm from "../components/surveyform";

      // Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <SurveyForm />
    </Layout>
  )
}

                  // Export your component

export default IndexPage