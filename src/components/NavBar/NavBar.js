import React, { Component } from "react";

import Search from "./Search";
import {ShowMap} from "./ShowMap";
import NavItems from "./NavItems";
import Profile from "./Profile";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        NavBar
        <Search />
        {ShowMap}
        <NavItems />
        <Profile />
      </div>
    );
  }
}
