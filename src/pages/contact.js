  // Step 1: Import your component
  import * as React from 'react'
  import Layout from "../components/layout"
  // Step 2: Define your component
  const Contact = ({ data, location }) => {
    return (
      <Layout location={location}  className="container">
        <title>Terms and Cs</title>
        <h1 className="header-upper-large">Contact</h1>   
      </Layout>
    )
  }
  // Step 3: Export your component
  export default Contact