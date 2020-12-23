import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getClassForCategory } from "../components/utils.js"
import Emoji from "../components/emoji"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const categories = post.frontmatter.category
    ? post.frontmatter.category.split(",")
    : []

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Link to="/">Return Home</Link>
      <article
        className="article-body"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              flexWrap: `wrap`,
              marginBottom: `1rem`,
            }}
          >
            <div>{post.frontmatter.date}</div>
            {categories.map(category => {
              return (
                <div
                  className={getClassForCategory(category.trim())}
                  style={{ marginLeft: `1rem` }}
                  key={category}
                >
                  {category}
                </div>
              )
            })}
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `flex-end`,
            marginBottom: `1rem`,
          }}
        >
          <a className="to-top-btn" href="#gatsby-focus-wrapper">
            Top <Emoji symbol="☝️" label="point up emoji" />
          </a>
        </div>
        <hr />
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        description
        category
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
