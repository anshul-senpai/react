- What is `JSX`?
    => JSX (JavaScript XML) is a syntax extension for JavaScript that allows users to write HTML-like code within their JavaScript files. It provides a concise way to define the structure and logic of user interfaces in React components. JSX was initially created by Facebook for use with React, but multiple web frameworks have since adopted it.

- Superpowers of `JSX`.
    => Here are some superpowers of JSX:
    Simplifying UI component creation:
    JSX makes it easy to create React components by allowing you to write HTML-like markup directly in your JavaScript code. This can make your code more readable and maintainable, especially for large projects.

    Passing props to components:
    JSX allows you to pass props (short for properties) to React components easily. Props are used to pass data from one component to another, and they can be used to control the behavior of a component.

    Abstracting away complex JavaScript logic:
    JSX abstracts away the complex JavaScript logic needed to create elements and components. This makes React development more intuitive and efficient, especially for developers who are new to React.

    Visual aid for working with UI:
    JSX can be used as a visual aid when working with UI inside the JavaScript code. This can make it easier to understand and debug your code, especially for complex UIs.

    Error and warning messages:
    JSX allows React to show more useful error and warning messages. This can help you to identify and fix errors in your code more quickly.

    Faster than normal JavaScript:
    JSX is faster than normal JavaScript because it performs optimizations while translating to regular JavaScript. This can make your React applications run faster, especially on mobile devices.

- Role of type `attribute` in script tag? What `options can I use` there?
    => The type attribute in the <script> tag specifies the media type of the script content. It tells the browser how to handle the content within the <script> tag. While historically the type attribute was used to specify the scripting language being used (e.g., JavaScript), in modern HTML, it's typically set to "text/javascript" or omitted altogether, as JavaScript is the default scripting language for browsers.

    Here are some options you can use with the type attribute in the <script> tag:

    text/javascript: This is the default value for the type attribute. It indicates that the content of the <script> tag is JavaScript code.
    Example:
    html
    Copy code
    <script type="text/javascript">
        // JavaScript code here
    </script>

    module: This indicates that the script is a JavaScript module. Modules enable you to use features like import and export for better organization and code reuse.
    Example:
    html
    Copy code
    <script type="module">
        import { functionName } from './module.js';
        // JavaScript module code here
    </script>

    text/ecmascript: This is an alternative way to specify JavaScript content. However, it's rarely used in modern web development.
    Example:
    html
    Copy code
    <script type="text/ecmascript">
        // JavaScript code here
    </script>

    text/html: This specifies that the content of the <script> tag is HTML code, which is somewhat unconventional and rarely used.
    Example:
    html
    Copy code
    <script type="text/html">
        <!-- HTML code here -->
    </script>

    application/javascript: This indicates that the content of the <script> tag is JavaScript code. It's similar to "text/javascript" but conforms more closely to the MIME type standards.
    Example:
    html
    Copy code
    <script type="application/javascript">
        // JavaScript code here
    </script>

    In modern web development, especially when using ECMAScript 6 (ES6) features and modules, the most commonly used type values are "text/javascript" and "module". If you're writing traditional JavaScript code without modules, you can omit the type attribute altogether, as the default behavior will interpret the content as JavaScript.

- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
    => All three syntaxes are used to render React components in JSX, with slight differences in their usage based on whether you need to include children, pass props dynamically, or simply render a component.






