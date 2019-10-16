<<<<<<< HEAD
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <h1>Future Landing Page</h1>
      <List>
        <ListItem>
          <Link to="/admin-signin">Admin Sign In</Link>
        </ListItem>
        <ListItem>
          <Link to="/admin-register">Admin Register</Link>
        </ListItem>
      </List>
    </>
  );
};
=======
import React from "react"

const Landing = () => {
  return (
    <h1>Landing</h1>
  )
}
>>>>>>> 4778a3e62552313c81743793bffabd587a73cabf

export default Landing
