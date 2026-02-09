const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!");
//  the second argument in the createELement function is an object which will be used to give the attributes to the tags.


const parent =  React.createElement("div",
    {id: "parent"},
   [ React.createElement("div" , 
        {id: "child"},
        [
            React.createElement("h1", {}, "I'm an h1 tag!"),
            React.createElement("h2", {}, "I'm an h2 tag!")
        ]
    ),React.createElement("div" , 
        {id: "child2"},
        [
            React.createElement("h1", {}, "I'm an h1 tag!"),
            React.createElement("h2", {}, "I'm an h2 tag!")
        ]
    )
    ]
);

// for making the above structure clean we have #"JSX"#
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);