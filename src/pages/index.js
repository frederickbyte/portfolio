import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pdf from "../../static/resume.pdf"
import { getClassForCategory } from "../components/utils.js"
import Emoji from "../components/emoji"

// List of coding projects
const projects = [
  {
    id: 1,
    title: "MyMentor",
    description: "Xamarin Forms frontend | .NET backend",
    page: "mymentor",
    url: "https://github.com/frederickbyte/MyMentor",
  },
]

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Andrew Stolzle`
  const posts = data.allMarkdownRemark.nodes
  // Sort posts by date.
  posts.sort((a, b) => b.date - a.date)
  // URL for GitHub
  const githubLink = `https://github.com/frederickbyte`
  // URL for LinkedIn
  const linkedinLink = `https://linkedin.com/in/frederick-stolzle`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1 style={{ fontSize: `3rem` }}>{siteTitle}</h1>
      <Bio />
      <div className={"index-links"}>
        <a href={Pdf} rel="noopener noreferrer">
          Resume
        </a>
        <a href={githubLink} rel="noopener noreferrer">
          GitHub
        </a>
        <a href={linkedinLink} rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:andrewstolzle@gmail.com`} rel="noopener noreferrer">
          Email
        </a>
      </div>
      <h1 style={{ marginTop: `2rem`, marginBottom: `0` }}>Recent Articles</h1>
      <hr></hr>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const description = post.frontmatter.description || ""
        // List of categories, split by comma
        const categories = post.frontmatter.category
          ? post.frontmatter.category.split(",")
          : []
        return (
          <div key={post.fields.slug} className="article-prev">
            <Link to={post.fields.slug} className="article-prev-info">
              <div style={{ display: `flex`, alignItems: `center` }}>
                <small>{post.frontmatter.date}</small>
                {categories.map(category => {
                  return (
                    <div
                      className={getClassForCategory(category.trim())}
                      key={category}
                    >
                      {category}
                    </div>
                  )
                })}
              </div>
              <h2 style={{ margin: `.2rem 0` }}>{title}</h2>
              <div>{description}</div>
            </Link>
          </div>
        )
      })}
      <div className="flex-column" style={{ marginTop: `2rem` }}>
        <h1 style={{ marginBottom: `0` }}>Recent Projects</h1>
        <hr></hr>
        {projects.map(p => {
          return (
            <div className="project" key={p.id}>
              <div className="flex-column">
                <div className="project-title">
                  <Emoji symbol="📱" label="mobile phone emoji" /> {p.title}
                </div>
                <div>{p.description}</div>
              </div>
              <div style={{ display: `flex` }}>
                <a href={p.url} rel="noopener noreferrer" className="code-btn">
                  Code
                </a>
                <Link to={p.page} className="code-btn">
                  Info
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM YYYY")
          title
          description
          category
        }
      }
    }
  }
`
