import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <h1>Articles</h1>
    <p>Work in progress on a searchable list of articles.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArticlesPage