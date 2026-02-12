import React from "react";
import { createRoot } from "react-dom/client";

// const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!");
//  the second argument in the createELement function is an object which will be used to give the attributes to the tags.


// const parent =  React.createElement("div",
//     {id: "parent"},
//    [ React.createElement("div" , 
//         {id: "child"},
//         [
//             React.createElement("h1", {}, "I'm an h1 tag!"),
//             React.createElement("h2", {}, "I'm an h2 tag!")
//         ]
//     ),React.createElement("div" , 
//         {id: "child2"},
//         [
//             React.createElement("h1", {}, "I'm an h1 tag!"),
//             React.createElement("h2", {}, "I'm an h2 tag!")
//         ]
//     )
//     ]
// );

// // for making the above structure clean we have #"JSX"#
const root = createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(parent);
const jsxHeading = <h1 id="heading">This is JSX </h1>; //this is not a valid Javascript
// The above JSX code is converted to React.createELement() and then to JS object before rendering onto the DOM as HTML element.
// console.log(jsxHeading);

// root.render(jsxHeading)

// REACT FUNCTIONAL COMPONENT
const Title = () => (
    <h1> This is a title component which is inside a heading component. </h1>
)
const HeadingComponent = () => (

    <div>
    <Title/>
    <h1>This is a React Component!</h1>
    </div>
)

const HeadingComponent2 = () => <h1>This is a React Component!</h1>
root.render(<HeadingComponent/>)