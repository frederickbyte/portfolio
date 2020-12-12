import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const MyMentor = () => {
  return (
    <Layout id="index_layout" location="mymentor">
      <SEO title="MyMentor" />
      <div className="flex-column">
        <Link to="/" className="home-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            stroke="#1b1d25"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span style={{ marginLeft: `5px` }}>Home</span>
        </Link>
        <article className="flex-column">
          <h1>MyMentor</h1>
          <div className="flex-row-wrap">
            <div>Last Updated: 2020</div>
            <div className="tag tech">Xamarin</div>
            <div className="tag hobby">Android</div>
            <div className="tag culture">C#</div>
            <div className="tag philosophy">SQL</div>
            <div className="tag politics">.NET</div>
          </div>
          <p>
            This was a project originally designed for my university computer
            science course. The goal of MyMentor is to provide a platform that
            teachers can use to help mentor students in both their inter- and
            extra-curricular needs. MyMentor aims to foster professional, yet
            personal relationships between students and teachers. These
            relationships will help students throughout their college journey
            and beyond by allowing them to easily communicate with peers and
            professors so that they have access to all of the support they need
            to succeed at their University.
          </p>
          <figure className="project-image">
            <img
              src={require("../../content/assets/login.png")}
              alt="login screen"
            />
            <figcaption>Login</figcaption>
          </figure>
          <hr></hr>
          <h3>Design and Structure</h3>
          <p>
            Two essential components guided the design of this product: an
            intuitive layout and consistent style across the application.
            MyMentor needed to have simple colors, bottom navigation, familiar
            buttons and icons.{" "}
            <em>
              I did not want to force the user to learn or adapt to new buttons,
              shapes, or actions.
            </em>
            <br />
            In order to create simpler and more robust interfaces, I utilized
            the model-view-viewmodel (MVVM) pattern, a practice that is easy to
            implement with Xamarin. Here are two of the main screens users
            interact with:
          </p>
          <div className="flex-row-wrap space-evenly">
            <figure className="project-image">
              <img
                src={require("../../content/assets/home.png")}
                alt="home screen"
              />
              <figcaption>Home</figcaption>
            </figure>
            <figure className="project-image">
              <img
                src={require("../../content/assets/events.png")}
                alt="events page"
              />
              <figcaption>Community events and posts</figcaption>
            </figure>
          </div>
          <hr></hr>
          <h3>Main Features</h3>
          <p>
            MyMentor revolves around matching students and professors primarily
            by their shared academic interests (i.e. matching users by subjects
            they both like). Upon initial log-in, users are asked to select
            their favorite subject, which MyMentor then uses to find the best
            matches for that person.
          </p>
          <figure className="project-image">
            <img
              src={require("../../content/assets/subject.png")}
              alt="favorite subject dialog"
            />
            <figcaption>Selecting your favorite subject</figcaption>
          </figure>
          <p>
            MyMentor allows users to communicate with each other with an instant
            message feature, which is accomplished via polling. Every 10
            seconds, MyMentor polls a SQL database to check for any new messages
            for the logged-in user. Implementing push notifications would be an
            upgrade because with this method, as new messages would be delivered
            only when a new message is sent to the user. This prevents
            unecessary polling and database calls that the current method of
            polling relies on.
          </p>
          <figure className="project-image">
            <img
              src={require("../../content/assets/chat.png")}
              alt="chat page"
            />
            <figcaption>Chat</figcaption>
          </figure>
          <p>
            Users can customize their profile by selecting which subjects
            they're interested in and by updating their display name. Profiles
            are visible to other users so that they can see what you are
            interested in and can then determine if you would be a good match
            for a mentorship. Users can also add new subjects to their profile
            after creating an account.
          </p>
          <div className="flex-row-wrap space-evenly">
            <figure className="project-image">
              <img
                src={require("../../content/assets/profile.png")}
                alt="profile screen"
              />
              <figcaption>User profile</figcaption>
            </figure>
            <figure className="project-image">
              <img
                src={require("../../content/assets/subjects.png")}
                alt="updating favorite subjects"
              />
              <figcaption>Updating your favorite subjects</figcaption>
            </figure>
          </div>
          <p>After completing this project, I become more familiar with</p>
          <ol>
            <li>Model-View-ViewModel (separating concerns)</li>
            <li>Materia Design for Android</li>
            <li>Repository Pattern</li>
            <li>Entity Framework</li>
          </ol>
        </article>
      </div>
    </Layout>
  )
}

export default MyMentor
