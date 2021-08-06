// Step 1: Import your component
import * as React from 'react'
import Layout from "../components/layout"
// Step 2: Define your component
const WhatWeveDone = ({ data, location }) => {
  return (
    <Layout location={location}  className="container">
      <title>About Me</title>
      <h1 className="header-upper-large">What Weve Done</h1>

    </Layout>
  )
}
// Step 3: Export your component
export default WhatWeveDone