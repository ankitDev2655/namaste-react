/**
 * 
 * 
 * <div id="parent">
        <div id="child">
            <h1>H1 tag hai bhai </h1>
            <h2>H2 tag hai bhai </h2>
        </div>
    </div>
 * 
 * 
 * 
 */





const parent = React.createElement(
    "h1",
    { id: "parent" },
    React.createElement(
        "child",
        { id: "child" },
        [
            React.createElement("h1", {}, "H1 tag hai bhai"),
            React.createElement("h2", {}, "H2 tag hai bhai")
        ]
    )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);