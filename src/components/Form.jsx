import React from "react";
import Input from "./Input";

function From() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default From;
