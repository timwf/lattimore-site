 // Step 1: Import your component
import * as React from 'react'
import Layout from "../components/layout"
// Step 2: Define your component
const WhoWeAre = ({ data, location }) => {
  return (
    <Layout location={location}  className="container">
 
 <h1 className="header-upper-large">IWho we are</h1>   
    </Layout>
  )
}
// Step 3: Export your component
export default WhoWeAre