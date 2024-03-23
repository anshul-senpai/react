- What is `npm`?
    => npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.

- What is `Parcel/Webpack/Vite`? Why do we need it?
    => Parcel, Vite, and Webpack are all popular bundlers that help developers optimize and package code to make it more performant and efficient for browsers. The right bundler can affect the development workflow, project performance, and overall success. 

    Parcel is a bundler that is useful for rapid prototyping, small to medium-sized projects, and developers who prefer simplicity. It has a zero-configuration experience, a fast development server, and built-in hot module replacement (HMR). Parcel also minifies, cleans, and compacts JavaScript or Typescript code, making it easier to send a request or receive a response from the server. Parcel doesn't require any external configuration files to be specified after installation. 

    Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It is a great option for developers who are looking for a faster and more efficient way to build and develop JavaScript applications, especially for small-medium size projects. Vite is highly extensible via its Plugin API and JavaScript API with full typing support. 

    Webpack is another bundler that is used to minify, clean, and compact JavaScript or Typescript code. Webpack requires a separate configuration file that specifies plugins, output and entry loaders, transformations, and other details. Webpack also allows you to load parts for the application on demand. 

- What is `.parcel-cache`?
    => .parcel-cache is a directory created by Parcel bundler, a tool for bundling and optimizing web applications. It stores information about a project when Parcel builds it, which helps to optimize Parcel's performance. This can help to streamline the development workflow and create web projects faster and more efficiently. 

    By default, the cache is stored in the .parcel-cache folder inside a project. This folder should be added to the .gitignore so that it is not committed in the repo.

- What is `npx`?
    => The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2. 0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

- What is difference between `dependencies vs devDependencies`?
    => In a package.json file, dependencies are packages that are required for an application to run in production. DevDependencies are packages that are only needed for local development and testing.

- What is Tree Shaking?
    => It can happen that we add code to our bundle that isn’t used anywhere in our application. This piece of dead code can be eliminated in order to reduce the size of the bundle, and prevent unnecessarily loading more data! The process of eliminating dead code before adding it to our bundle, is called tree-shaking.

    Tree shaking is aimed at removing code that will never be used from a final JavaScript bundle. When done right, it can reduce the size of your JavaScript bundles and lower download, parse and (in some cases) execution time. For most modern JavaScript apps that use a module bundler (like webpack or Rollup), your bundler is what you would expect to automatically remove dead code. ⁣⁣ ⁣⁣

- What is Hot Module Replacement?
    => Hot Module Replacement (HMR) is a feature that allows users to update modules in a running application without reloading the page. This feature can improve the development process by reducing the feedback cycle and allowing users to view and test changes more quickly. HMR can also boost productivity when developing a Redux application. 

    Here's how HMR works in Webpack:
        The application asks the HMR runtime to check for updates.
        The runtime asynchronously downloads the updates and notifies the application.
        The application asks the runtime to apply the updates.
        The runtime synchronously applies the updates. 

    HMR tries to preserve browser state across updates. For example, if you have a form within a modal and fill out all the fields, traditional live reload would hard refresh the page. With HMR, you don't lose the data in the form. 

    However, using HMR can reset the state of your application. If you're using libraries like React or Vue, this means you need to redo the process to change the state or persist state to the local storage. 

    Some text editors and IDE's have a feature called safe write that prevents data loss. When using HMR this feature blocks the automatic detection of file updates.

- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
    - HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.
    - File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
    - Minification - Minification is the process of minimizing code and markup in your web pages and script files.
    - Image optimization
    - Caching while development

- What is `.gitignore`? What should we add and not add into it?
    => A .gitignore file is a plain text document that tells Git which files or folders to ignore when committing a project to a GitHub repository. The file is located in the root directory of the project, and you can also create a global .gitignore file that ignores any entries in that file. 

    The file contains patterns that are matched against file names in the repository to determine whether or not they should be ignored. Each line in a .gitignore file specifies a pattern, and the following formats are supported:
    - Blank line: Matches no files
    - Line starting with #: Serves as a comment
    - Trailing spaces: Ignored unless quoted with backslash ('' \ ``)
    - Optional prefix `` ! '': Negates the pattern

- What is the difference between `package.json` and `package-lock.json` files?
    => package.json and package-lock.json are both files used in Node.js projects to manage dependencies, but they serve different purposes:

    package.json:
    This file is the heart of a Node.js project. It typically includes metadata about the project and lists the dependencies required by the project.
    It contains information such as the project name, version, description, entry point, scripts, and dependencies.
    Developers manually edit this file to add, update, or remove dependencies. When a developer runs npm install or yarn install, the dependencies listed in package.json are installed in the project's node_modules directory.

    package-lock.json:
    Introduced in npm 5, package-lock.json is automatically generated for any operations where npm modifies node_modules or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
    It ensures that the dependencies installed on different machines or by different users are consistent.
    It locks down the versions of dependencies to specific versions, including the sub-dependencies (dependencies of dependencies), thus ensuring reproducibility of installations.
    It is not meant to be manually edited. Instead, it is automatically generated and updated by npm.

    In summary, package.json is where you define your project and its dependencies, while package-lock.json is automatically generated to lock down the specific versions of dependencies installed in your project, ensuring consistency and reproducibility across different environments.    

- Why should I not modify `package-lock.json`?
    => Modifying package-lock.json directly is not recommended for several reasons:

    Risk of inconsistency: Editing package-lock.json manually can introduce inconsistencies between the listed dependencies and the actual dependencies installed in your project. This can lead to unexpected behavior or errors when installing dependencies or running your project.

    Loss of reproducibility: The purpose of package-lock.json is to lock down the specific versions of dependencies and their dependencies, ensuring that installations are reproducible across different environments. By manually editing package-lock.json, you may unintentionally alter these versions, compromising the reproducibility of your project's dependencies.

    Potential conflicts: Manually modifying package-lock.json can lead to conflicts when collaborating with other developers or when deploying your project to different environments. If multiple developers are working on the project or if the project is deployed to different servers, inconsistencies in package-lock.json can cause issues with dependency installations.

    Overwriting changes: Any changes made to package-lock.json manually may be overwritten the next time dependencies are installed or updated using npm or yarn. This can result in loss of changes or unintentional modifications to the file.

    Instead of modifying package-lock.json directly, it's recommended to manage dependencies through the package.json file and use npm or yarn commands to install, update, or remove dependencies. This ensures consistency, reproducibility, and compatibility across different environments and collaborators.

- What is `node_modules`? Is it a good idea to push that on git?
    => The node_modules folder is a directory that contains all of the packages that your Node.js project depends on. It is created when you run the npm install command. This folder can be quite large, as it contains all of the code and assets for all of your dependencies.

    Should you push node_modules to git?
    No, you should not push the node_modules folder to git. There are a few reasons for this:
    The node_modules folder can be very large, which can make your git repository slow and expensive to clone and pull.
    The node_modules folder is automatically generated by npm, so there is no need to track it in git.
    The node_modules folder can contain sensitive information, such as API keys and passwords.

    Instead of pushing the node_modules folder to git, you should add it to your .gitignore file. This will tell git to ignore the folder and all of its contents.

- What is the `dist` folder?
    => The dist folder in React is a production-ready build of the application. It contains all of the compiled JavaScript, CSS, and image files that are needed to run the application in a web browser.

    The dist folder is typically generated using the npm run build command. This command will compile the application's code using Babel and Webpack, and then copy the compiled files to the dist folder.

    Once the dist folder has been generated, it can be deployed to a web server to make the application available to users.

    The dist folder is typically ignored by version control systems such as Git. This is because the dist folder is generated from the application's source code, and it is not necessary to track the generated files in version control.

    Here are some of the contents of the dist folder:
    The compiled JavaScript files for the application.
    The compiled CSS files for the application.
    The compiled image files for the application.
    An index.html file that serves as the entry point for the application.
    A favicon.ico file that is used as the browser tab icon.

    The dist folder is an important part of the React development process. It allows developers to generate a production-ready build of their application that can be deployed to a web server.

- What is `browserlists`? and Read about different bundlers: vite, webpack, parcel
    => Browserslist is a configuration file that defines which browsers a project should support. It's a popular dependency for front-end libraries, and is used by tools like Autoprefixer, Babel, and ESLint. Browserslist is useful because browsers don't support new JavaScript features at the same pace. For example, not all browsers support ES6 (aka ES2015). Browserslist allows bundlers and transpilers to group browsers into different categories and generate separate bundles.

- Read about: `^-caret` and `~-tilde`
    => The caret (^) and tilde (~) are two special characters that are used in version ranges in package.json files. They allow you to specify which versions of a package are acceptable for your project.

    The caret (^) symbol means that you are willing to accept any minor or patch updates to the package, but you do not want to update to a new major version. This is the default behavior of npm install.

    The tilde (~) symbol means that you are only willing to accept patch updates to the package. You do not want to update to a new minor or major version.

- React about Script types in html(MDN Docs)
    => https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script