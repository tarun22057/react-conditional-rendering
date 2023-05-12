import React from "react";
import Form from "./Form";
import Message from "./Message";

const isLoggedIn = false;

function App() {
  return <div className="container">{isLoggedIn ? <Message /> : <Form />}</div>;
}

export default App;
