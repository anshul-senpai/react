- Is `JSX` mandatory for React?
    => No, JSX is not mandatory for React. However, it is a popular choice for writing React applications because it makes the code more readable and concise. JSX is a JavaScript extension that allows you to write HTML-like code in your JavaScript files. This makes it easier to create and maintain complex user interfaces.

    If you do not want to use JSX, you can still write React applications using plain JavaScript. However, your code will be more verbose and difficult to read.
    
    Here is an example of a React component written with JSX:
    Code
    const MyComponent = () => {
    return (
        <div>
        <h1>Hello, world!</h1>
        </div>
    );
    };

    This code would be written as follows if you were not using JSX:
    JavaScript
    const MyComponent = () => {
    return React.createElement('div', null, React.createElement('h1', null, 'Hello, world!'));
    };

    As you can see, the JSX code is much more concise and readable.
    Ultimately, the decision of whether or not to use JSX is up to you. However, if you are new to React, I recommend using JSX because it will make your code easier to read and write.

- Is `ES6` mandatory for React?
    => ES6 is not mandatory for React, but it is highly recommended. React uses ES6 features extensively, and most React projects today are written in ES6. If you are new to React, it is a good idea to learn ES6 before you start learning React.

    Here are some of the ES6 features that are used in React:
    Classes:
    React components are classes.
    Arrow functions:
    Arrow functions are a concise way to write functions. They are often used in React components.
    Template literals:
    Template literals are a new way to write strings in JavaScript. They are often used in React components to render HTML.
    Modules:
    Modules are a new way to organize JavaScript code. They are used in React to import components and other modules.

    If you are not familiar with ES6, there are many resources available online to help you learn. Once you have a basic understanding of ES6, you can start learning React.

    Here are some of the benefits of using ES6 in React:
    Conciseness: ES6 makes JavaScript code more concise and easier to read.
    Expressiveness: ES6 adds new features to JavaScript that make it more expressive.
    Modernity: ES6 is the latest version of JavaScript, and it is the standard for modern JavaScript development.

- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
    => In JSX, the curly braces ({}) are used to embed a JavaScript expression or a variable or React element inside it.

    {TitleComponent}: This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value.

    {<TitleComponent/>}: This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value.

    {<TitleComponent></TitleComponent>}: <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
    
    To summarize, the difference between the three is that the first one is a variable that represents a React component, the second one is a JSX expression that represents a React component, and the third one is a JSX expression that represents a React component with child components.

- How can I write `comments` in JSX?
    => In React, you can write comments in JSX using the syntax {/* */}. The curly braces start and end the comment, followed by a forward slash and an asterisk. The comment is then written, followed by an asterisk, another forward slash, and the closing curly brace. For example, /* */ is a multi-line comment.

- What is `<React.Fragment></React.Fragment>` and `<></>`?
    => A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

    render() {
        return (
            <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
            </React.Fragment>
        );
    }

- What is `Reconciliation` in React?
    => Reconciliation is the process of comparing the current state of the UI with the desired state and making the necessary changes to update the UI. In React, reconciliation is performed by comparing the virtual DOM with the real DOM and making the necessary changes to the real DOM to match the virtual DOM.

    The virtual DOM is a lightweight representation of the real DOM. It is a tree of JavaScript objects that represent the elements in the UI. When a change is made to the state of a component, React creates a new virtual DOM. React then compares the new virtual DOM with the previous virtual DOM to determine the changes that need to be made to the real DOM.

    React uses a diffing algorithm to compare the two virtual DOMs. The diffing algorithm determines the minimum number of changes that need to be made to the real DOM to match the virtual DOM. React then updates the real DOM to match the virtual DOM.

    Reconciliation is a key part of what makes React so fast and efficient. By only updating the real DOM when necessary, React can avoid the costly operation of updating the entire DOM tree. This makes React applications more responsive and performant.

    Here are some of the benefits of reconciliation in React:
    Efficiency:
    Reconciliation is a very efficient process. React only updates the real DOM when necessary, which avoids the costly operation of updating the entire DOM tree.
    Responsiveness:
    Reconciliation makes React applications more responsive. By only updating the real DOM when necessary, React can avoid the delay that would be caused by updating the entire DOM tree.
    Minimized browser repaints:
    Reconciliation minimizes the number of browser repaints. A browser repaint is the process of updating the pixels on the screen. By only updating the real DOM when necessary, React can avoid the need to repaint the entire screen.
    Predictable updates:
    Reconciliation makes React updates more predictable. By only updating the real DOM when necessary, React can avoid the unexpected changes that could be caused by updating the entire DOM tree.

    Overall, reconciliation is a key part of what makes React so fast, efficient, and responsive.

- What is `React Fiber`?
    => React Fiber is a new reconciliation algorithm introduced in React 16. It's designed to make React applications faster and smoother, especially on mobile devices.

    The main feature of React Fiber is incremental rendering. This means that React can now split rendering work into chunks and spread it out over multiple frames. This allows React to keep the UI responsive even when there's a lot of work to be done.

    React Fiber also introduces a new data structure called a fiber. A fiber represents a unit of work, such as rendering a component or updating the DOM. React uses fibers to keep track of the work that needs to be done and to schedule it efficiently.

    Overall, React Fiber is a significant improvement over the previous reconciliation algorithm. It makes React applications faster, smoother, and more responsive.

    Here are some of the benefits of using React Fiber:
    Improved performance:
    React Fiber can significantly improve the performance of React applications, especially on mobile devices.
    Smoother animations:
    React Fiber can make animations in React applications smoother and more responsive.
    Better responsiveness:
    React Fiber can make React applications more responsive to user input, even when there's a lot of work to be done.
    More efficient use of resources:
    React Fiber uses resources more efficiently, which can lead to longer battery life on mobile devices.

    If you're using React 16 or later, you're already using React Fiber. There's no need to do anything special to enable it. However, if you're using an older version of React, you may want to consider upgrading to take advantage of the benefits of React Fiber.

- Why do we need `keys` in React?
    => Keys help React identify which items in a list have changed, added, or removed. This helps React to optimize the rendering process by recycling existing DOM elements.

    When React sees a list of elements, it creates a corresponding list of DOM elements. If the list of elements changes, React needs to update the DOM to match. Without keys, React would have to re-render the entire list, even if only a few items have changed. This can be inefficient, especially for large lists.

    Keys help React to identify which DOM elements need to be updated. When an element's key changes, React will create a new DOM element for that item. This ensures that the DOM is always up-to-date with the latest list of elements.

    Keys should be unique for each item in a list. This helps React to identify the items correctly. If two items have the same key, React will not be able to tell them apart, and it may update the wrong item.

    Here are some tips for using keys in React:
    Use a unique identifier for each item in the list, such as the item's ID or index.
    Avoid using the index as the key if the list can be reordered.
    If the list is sorted, you can use the item's position in the sorted list as the key.
    If the list is filtered, you can use the item's original position in the unfiltered list as the key.

    By following these tips, you can help React to optimize the rendering process and improve the performance of your application.

- Can we use `index as keys` in React?
    => Yes, we can use index as keys in React. However, it is generally not recommended because it can lead to performance issues and incorrect rendering when the list items change.

    When React renders a list, it uses the key prop to identify each item in the list. If the key prop is not unique, React may not be able to correctly identify the items in the list, which can lead to incorrect rendering.

    For example, if we have a list of items and we use the index as the key prop, and then we add a new item to the list, the index of all of the items in the list will change. This means that React will not be able to correctly identify the items in the list, and it may render the list incorrectly.

    To avoid these problems, it is generally recommended to use a unique identifier for each item in the list as the key prop. This can be done by using a property of the item, such as the item's ID, or by using a function to generate a unique identifier for each item.

- What is `props in React`? Ways to.
    => Props in React stands for "properties". It is an immutable object that allows parent components to pass data to their child components. Props can be used to pass any type of data, including strings, numbers, objects, and arrays.
    
    There are two ways to pass props to a child component:
    Using HTML attributes: Props can be passed to a child component using HTML attributes. For example, the following code passes the name prop to the ChildComponent:
    JavaScript
    <ChildComponent name="John Doe" />

    Using the spread operator: The spread operator can be used to pass props to a child component from an object. For example, the following code passes all of the props from the parent component to the ChildComponent:
    JavaScript
    const props = {
    name: "John Doe",
    age: 30,
    };

    <ChildComponent {...props} />

    Props are read-only, which means that child components cannot modify them. This helps to ensure that the data passed to a child component remains consistent.

    Here are some examples of how props can be used:
    To pass data from a parent component to a child component that renders a list of items.
    To pass data from a parent component to a child component that renders a form.
    To pass data from a parent component to a child component that renders a chart.

    Props are a powerful tool that allows React components to be reusable and maintainable. By using props, you can easily pass data between components without having to worry about how the data is being used.

- What is `Config Driven UI`?
    => Configuration-driven UI (CDUI) is a way to control the front end of an application by defining the layout, styles, and other properties of UI elements in a configuration file or database. This allows users and businesses to tailor the UI experience to their preferences. CDUI is static, adaptable, and user-centric. It can help to streamline development, improve maintainability, and provide a more flexible and customizable user experience. 

    CDUI uses a configuration file to define the layout and content of the UI components. This configuration file or database may also define: Data sources, Data to be displayed in the UI, and Interactions and behavior of the UI components. 

    Some popular tools and frameworks that support building CDUI include:
    React: A component-based architecture that can be easily configured using props and state
    JSON Forms: A UI library for rendering JSON schemas in React, Angular, and Vue 
    
    CDUI excels in situations where flexibility and adaptability are key, while Server-driven UI (SDUI) thrives in scenarios demanding real-time control and personalization.