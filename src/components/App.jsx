import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeading] = React.useState("");

  function handleChange(event) {
    //console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    //console.log("Clicked");
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
