import React, { Component } from "react";

const socialNets = [
  {
    id: 1,
    type: "VKontakte"
  },
  {
    id: 2,
    type: "Facebook"
  },
  {
    id: 3,
    type: "Instagram"
  },
  {
    id: 4,
    type: "Youtube"
  }
];

export default class Social extends Component {
  render() {
    return <ul>{socialNets.map(net => <li key={net.id}>{net.type}</li>)}</ul>;
  }
}
