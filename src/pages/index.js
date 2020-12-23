import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getClassForCategory } from '../components/utils.js';
import Emoji from '../components/emoji';

// List of coding projects
const projects = [
  {
    id: 1,
    title: 'MyMentor',
    description: 'Xamarin Forms frontend | .NET backend',
    emoji: '📱',
    page: 'mymentor',
    url: 'https://github.com/frederickbyte/MyMentor',
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'React frontend | Netlify host',
    emoji: '📝',
    url: 'https://github.com/frederickbyte/portfolio',
  },
];

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Andrew Stolzle`;
  const allPosts = data.allMarkdownRemark.nodes;
  // Sort posts by date.
  allPosts.sort((a, b) => b.date - a.date);
  // Empty search query.
  const emptyQuery = '';
  // Search query state.
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });
  // User types into search bar
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    const filteredData = allPosts.filter((post) => {
      const { title, description } = post.frontmatter;
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      );
    });
    setState({
      query,
      filteredData,
    });
  };
  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="wrapper">
        <div className="intro">
          <div className="intro-header radius frame">
            <h1 className="intro-heading">
              Notes and projects from
              <span className="intro-title-lg">Andrew Stolzle.</span>
            </h1>
          </div>
          <div className="intro-media radius dot-shadow">
            <img
              className="intro-image radius"
              src={require('../../content/assets/intro-code.png')}
              alt="javascript code snippet"
            ></img>
          </div>
        </div>
        <Bio />
      </div>
      <div className="wrapper">
        <div className="posts-header">
          <h1 style={{ marginTop: `2rem`, marginBottom: `0` }}>Recent Articles</h1>
          <input
            id="search"
            type="search"
            aria-label="Search"
            placeholder="Search for articles"
            onChange={handleSearchInputChange}
          />
        </div>
        <hr />
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;
          const description = post.frontmatter.description || '';
          // List of categories, split by comma
          const categories = post.frontmatter.category ? post.frontmatter.category.split(',') : [];
          return (
            <div key={post.fields.slug} className="article-prev">
              <div className="article-prev-info">
                <div style={{ display: `flex`, alignItems: `center` }}>
                  <div>{post.frontmatter.date}</div>
                  {categories.map((category) => {
                    return (
                      <div className={getClassForCategory(category.trim())} key={category}>
                        {category}
                      </div>
                    );
                  })}
                </div>
                <Link to={post.fields.slug} className="article-prev-title">
                  {title}
                </Link>
                <div>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="wrapper">
        <div className="flex-column" style={{ marginTop: `2rem` }}>
          <h1 style={{ marginBottom: `0` }}>Recent Projects</h1>
          <hr></hr>
          {projects.map((p) => {
            return (
              <div className="project" key={p.id}>
                <div className="flex-column">
                  <div className="project-title">
                    <Emoji symbol={p.emoji} label="emoji" /> {p.title}
                  </div>
                  <div>{p.description}</div>
                </div>
                <div style={{ display: `flex`, flexWrap: `wrap` }}>
                  {p.page && (
                    <Link to={p.page} className="button">
                      Info
                    </Link>
                  )}
                  <a href={p.url} rel="noopener noreferrer" className="button secondary">
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default BlogIndex;

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
`;
