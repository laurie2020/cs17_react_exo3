import React from 'react';
let time = new Date();
let date = time.getDate() + "/0" + time.getMonth() + "/" + time.getFullYear();
export default class App extends React.Component {
  render() {
    return (
      <h1>{date}</h1>
    )
  }
}
