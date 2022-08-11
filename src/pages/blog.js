// Import react so you can use a react file
import * as React from 'react'
import Layout from '../components/layout'

//define a component 

const BlogPage = () => {
    return(
      <Layout pageTitle="Blog">
          <p>Here comes the blog posts</p>
      </Layout>  
    )
}

export default BlogPage