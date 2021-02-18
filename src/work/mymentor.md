---
title: 'MyMentor'
summary: 'Mobile application built with Xamarin Forms, Material Design, and MVVM pattern.'
displayOrder: 1
featured: true
hero:
  image: '/images/work/home.png'
  imageAlt: 'Screens from the app, composed together as a group.'
highlights:
  - primary: '📱'
    secondary: 'Android and iOS compatible'
  - primary: '📦'
    secondary: 'Entity Framework + SQL backend'
  - primary: 'MVVM'
    secondary: 'Separation of concerns'
gallery:
  - title: 'Login'
    summary: 'Simple theme colors and Material design components allow for a clean and consistent app style.'
    image: '/images/work/login.png'
  - title: 'Guide users'
    summary: 'Ease users into the app when they first login.'
    image: '/images/work/home.png'
  - title: 'Community events'
    summary: 'Post and view community events from your friends and peers.'
    image: '/images/work/events.png'
tags: ['Xamarin', 'Android', '.NET', 'SQL']
---

MyMentor aims to provide a platform that teachers can use to help mentor students in both their inter- and extra-curricular needs, and to foster professional, yet personal relationships between students and teachers. These relationships will help students throughout their college journey and beyond by allowing them to easily meet and communicate with peers and professors so that they have access to all of the support they need to succeed at their University.

Ideally, some of these relationships will blossom into life-long friendships or professional relationships. But why is this app even necessary? Don't we have email, forums, and dozens of other apps to communicate already?

Honeslty, **there aren't any great mobile apps for mentorships** than can be used nationwide. Each school typically implements their own communication system or offers some "hotline" for students to call if in need of support. These systems are often hacky, janky, and confusing to use. Colleges are notorious for providing their students with software that delivers awful user experiences. That should not be the case in 2021.

<div class="callout__info">
  <h4>✋ Ok, so what exactly are we trying to do here?</h4>
  <br/>
  <p>There are many communication hurdles in college. Meeting professors and counselors can be intimidating especially for international students. Some of the hurdles are:</p>
  <ol>
    <li>Lack of information regarding campus resourses</li>
    <li>Websites have poor design and are difficult to navigate</li>
    <li>Few resources to stay in contact outside of standard email</li>
  </ol>
</div>

A mobile app like MyMentor solves these problems in way that both students and professors will enjoy. Smartphones are universal, especially on college campuses. Nearly everyone has one and is an expert as using it - why not build an app designed to work on one?

<div class="callout__info">
  <h4>Planning It Out</h4>
  <br/>
  <p>So what does our app need? At minimum, MyMentor needs to:</p>
  <ul>
    <li>Be compatible with Android and iOS devices</li>
    <li>Let users view professors, counselors, and other students at their university with similar academic interests</li>
    <li>Have a messaging system so users can interact with each other</li>
    <li>Let users add information about their academic and non-academic interests</li>
  </ul>
</div>

First and foremost, MyMentor must work on both Android and iOS devices. Microsoft has a great framework for this use-case called <span class="color-quinary-shade"><b>Xamarin</b></span>. With Xamarin, we create our layouts and logic with C# and XAML. Once we're ready to distribute, we can build both _.apk_ and _.ipa_ files which can run on Android and iOS devices, respectively.

Selecting Xamarin is arguably the most important decision as it allows our app to be cross-compatibile without requiring us to create two separate projects (one in XCode and another in Android Studio). But we still need to design and structure the application.

# Design

Two components will guide the design of this product: an intuitive layout and consistent style across the application. MyMentor should have simple colors, bottom navigation, familiar buttons and icons. These elements are common elements because they provide a good user experience.

_We do not want to force users to learn or adapt to new ways of doing things._

Developers can be tempted into making their app as beautiful as possible. This is dangerous as it can lead to increasing complexity and a worse user experience.

The model-view-viewmodel (MVVM) pattern is powerful because it separates the view from the logic that updates the view. Our code will be more robust and easier to read using this pattern - it is also easy to implement with Xamarin!

Oh and Google created a wonderful component library called <a href="https://material.io/design">Material Design</a>. It includes styled buttons, lists, dropdowns, and other common elements for any mobile or web app we are creating! It's popular for good reason: Material Design components look clean and consistent.

Enough talk, here is a screenshot:

<figure>
  <img src="/images/work/login.png" alt="MyMentor login screen" />
  <figcaption>Login</figcaption>
</figure>

# Features

MyMentor revolves around matching students and professors primarily by their shared academic interests (i.e. matching users by subjects they both like). Upon initial log-in, users are asked to select their favorite subject, which MyMentor then uses to find the best matches for that person.

<figure>
  <img src="/images/work/home.png" alt="MyMentor home screen" />
  <figcaption>Home</figcaption>
</figure>

After seting up their account and accepting matches, users can communicate with each other with an instant message feature. MyMentor employs polling to get messages. Every 10 seconds, the application polls a SQL database to check for any new messages for the logged-in user.

Push notifications are a better choice here because **new messages would be delivered only when a new message is sent to the user.** This prevents unecessary polling and database calls that the current method of polling relies on, which increases efficiency and decreases strain on the user's device (a small strain but with mobile devices every bit counts).

<figure>
  <img src="/images/work/events.png" alt="MyMentor events screen" />
  <figcaption>Community events</figcaption>
</figure>

Users can customize their profile by selecting which subjects they're interested in and by updating their display name. Profiles are visible to other users so that they can see what you are interested in and can then determine if you would be a good match for a mentorship. Users can also add new subjects to their profile after creating an account.

<figure>
  <img src="/images/work/chat.png" alt="MyMentor chat screen" />
  <figcaption>Chat</figcaption>
</figure>

User profiles contain information about a student's university and classifcation as well as list their primary academic interests. This allows other students and professors to see who would be a good mentor match.

<figure>
  <img src="/images/work/profile.png" alt="MyMentor profile screen" />
  <figcaption>Profile</figcaption>
</figure>

MyMentor was a joy to build and a great opportunity to learn more about design patterns and about optimizing user experiences on mobile devices. I plan to apply the principles learned in this project to future professional and personal endeavors. I hope you enjoyed taking a look at MyMentor!

<div class="callout__info">
  <h4>📚 A few things we discussed:</h4>
  <ol>
    <li>Model-View-ViewModel pattern (separating concerns)</li>
    <li>Material Design for Android (component library built by Google)</li>
    <li>Repository Pattern (useful in back-end development with Entity Framework)</li>
    <li>Entity Framework</li>
  </ol>
</div>
