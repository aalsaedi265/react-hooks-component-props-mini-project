import React from "react";

function Header({ author }) {

  return (
    <header>
      <h1>{author}</h1>
    </header>
  );
}

export default Header;