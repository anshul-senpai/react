import React from "react";
import ReactDOM from "react-dom";


// - Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
// const a = React.createElement(
//     "div",
//     {id:"title"},
//     [
//         React.createElement(
//             "h1",
//             {},
//             "This is H1"
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "This is H2"
//         ),
//         React.createElement(
//             "h3",
//             {},
//             "This is H3"
//         )
//     ]
// )


// - Create the `same element using JSX`
// const b = (
//     <div id="title">
//         <h1>This is H1</h1>
//         <h2>This is H2</h2>
//         <h3>This is H3</h3>
//     </div>
// )


// - Create a `functional component of the same with JSX`
// const C = () => (
//     <div id="title">
//         <h1>This is H1</h1>
//         <h2>This is H2</h2>
//         <h3>This is H3</h3>
//     </div>
// )


// - `Pass attribute` into the tag in `JSX`
// const Abc = ({id}) => (
//     <h1>fa {id}</h1>
// )


// - `Composition of Component` (Add a component inside another)
// const A = () => (
//     <h1>Hello from A</h1>
// )

// const B = () => (
//     <>
//         <A/>
//         <h1>Hello from B</h1>
//     </>
// )


// - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
// => They are same.


// - Create a `Header Component` from scratch using `Functional Component` with JSX
//   - Add a `Logo on Left`
//   - Add a `search bar in middle`
//   - Add `User icon on right`
//   - Add `CSS to make it look nice`
const Header = () => (
    <div style={{
        display:"flex",
        justifyContent:"space-between"
    }}>
        <h1>Logo</h1>
        <input type="search"></input>
        <h1>Icon</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("head"))

root.render(<Header/>)