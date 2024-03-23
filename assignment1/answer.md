- What is `Emmet`?
    => Emmet is a set of plug-ins for text editors that helps web developers write HTML, CSS, and JSX code faster. Emmet is like shorthand that translates into multiple lines of HTML or a CSS attribute. (ex : "!" will give html5 boiler plate)

- What is `CDN`? Why do we `use` it?
    => A content delivery network (CDN) is a network of servers that work together to speed up the delivery of web content by storing copies of files on servers that are closer to the user. This allows for the quick transfer of assets needed for loading content, such as HTML pages, JavaScript files, stylesheets, images, and videos.

- Why is `React known as React`?
    => React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React makes it easy to create interactive UIs by using a component-based approach.

    The name "React" comes from the fact that the library makes it easy to react to changes in data. When data changes, React updates the UI automatically. This makes it easy to create UIs that are fast and responsive.

    Here are some of the reasons why React is called React:
        It "reacts" quickly to changes without reloading the whole page.
        It uses the virtual DOM to efficiently update parts of a webpage.
        It's built around components that "react" and update.

    React is a popular choice for building user interfaces because it is easy to use, efficient, and flexible. It is also well-supported by a large community of developers.

    Here are some of the benefits of using React:
        Speed: React is very fast, thanks to its use of the virtual DOM.
        Efficiency: React is very efficient, thanks to its use of one-way data flow and immutable data structures.
        Flexibility: React is very flexible, thanks to its component-based architecture.
        Supportability: React is well-supported by a large community of developers.

- What is `crossorigin in script tag`?
    => The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not.

    CORS: It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information. 

    Values: This attribute contains two values which are given below –
        anonymous: It has a default value. It defines a CORS request which will be sent without passing the credential information.
        use-credentials: A cross-origin request will be sent with credentials, cookies, and certificate.

- What is difference between `React and ReactDOM`?
    => React and ReactDOM are two important libraries in the React ecosystem. They both play different roles in building user interfaces.

    React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

    ReactDOM is a package that provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the various methods to manipulate DOM.

    In simple terms, React is like the architect who designs how things should look, and ReactDOM is the construction worker who puts those designs into action on a website. If you're building web pages with React, you use both React and ReactDOM.
    
- What is difference between `react.development.js` and `react.production.js` files via CDN?
    => The main difference between react.development.js and react.production.js files is that the development file is used for debugging purposes, while the production file is used for deployment.
    
    The development file includes detailed error messages and warnings, which can be helpful for developers when they are trying to track down bugs. However, these messages and warnings can also make the file larger and slower, which is why it is not recommended to use the development file in production.
    
    The production file, on the other hand, is minified and optimized for performance. It does not include any error messages or warnings, which makes it smaller and faster than the development file. This is why it is recommended to use the production file in production environments.

