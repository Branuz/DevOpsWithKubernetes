import React from "react";

console.log("Server started in port " + window.location.port)
const App = () => (
  <div>
    <p>Hello world {window.location.port} </p>
  </div>
);

export default App;