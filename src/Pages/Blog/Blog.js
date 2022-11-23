import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium text-primary">
        -Frequently Asked Questions-
      </h1>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content mx-10">
          <p>
            There are four main types of state you need to properly manage in
            your React apps: 1. Local state - Local state is data we manage in
            one or another component. 2. Global state - Global state is data we
            manage across multiple components. 3. Server state - Data that comes
            from an external server that must be integrated with our UI state.
            4. URL state - Data that exists on our URLs, including the pathname
            and query parameters.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content mx-10">
          <p>
            Unit Testing is a type of software testing where individual units or
            components of a software are tested. We Should write unit tests
            because They enable you to catch bugs early in the development
            process. Automated unit tests help a great deal with regression
            testing. They detect code smells in your codebase. For example, if
            you’re having a hard time writing unit tests for a piece of code, it
            might be a sign that your function is too complex.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content mx-10">
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the prototype of an object,
            we use Object. getPrototypeOf and Object. Example In the given
            example, there are two objects ‘person’ and ‘GFGuser’. The object
            ‘GFGuser’ inherits the methods and properties of the object ‘person’
            and further uses them.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content mx-10">
          <p>
            React - React is the JavaScript library of User Interfaces. It is
            build single-page applications and also allows you to create
            reusable UI components. It is a front-end JavaScript framework,
            created by Facebook in 2011. React has gained a lot of popularity in
            recent years and is considered one of the best frameworks for web
            development. There are more developers who keep React as a priority
            for creating wonderful websites. Angular - It's developed by Google,
            was released in the year 2010. It is a TypeScript-based framework
            that uses a regular DOM. Angular provides a set of tools using which
            a complex, reactive UI can be built. Angular is used by Google, Up
            work, and MS Office and since this framework was implemented before
            React, it is more popular providing a highly functional framework to
            create larger applications. Vue - Vue was developed by a former
            Google employee and was released in the year 2014. It was developed
            to make the best version of Angular and make a custom tool. Vue has
            become so popular these days and it is one of the hottest topics in
            terms of technology. Companies that use Vue as their front-end
            development framework are UpWork, Netflix, and Nintendo. It has a
            good rating on GitHub making it so popular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
