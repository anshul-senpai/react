import React from "react";
import ReactDOM from "react-dom";


// React Element
const jsxHeading = (
    <h1 className="head" tabIndex={5}>
        This is JSX heading.
    </h1>
);


// React Component

const Title = () => (
    <h1>This is title component</h1>
);

const Heading = () => (
    <div id="container">
        <Title/>
        <h1>This is heading component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);