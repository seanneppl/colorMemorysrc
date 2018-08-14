import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Nav from "./components/Nav";

const friends = [
  { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 },{ id: 5 }, { id: 6 },
  { id: 7 },{ id: 8 }, { id: 9 },
  { id: 10 }, { id: 11 },{ id: 12 },
  { id: 13 }, { id: 14 },{ id: 15 },
  { id: 16 }
      ];


const randomColor = () => Math.floor(Math.random() * 257);
// console.log(randomColor());

friends.map((friend)=> friend.color = [randomColor(), randomColor(), randomColor()]);

class App extends React.Component { 

  state = {
    friends : friends,
    clicked : [],
    count: 0,
    max: 0
  }

  randomizer = (friendId) => {
    let friendsArray = this.state.friends;

    let clickedArray;

    if (this.state.clicked.indexOf(friendId) === -1) {
      // console.log("not in clicked")
      clickedArray = [...this.state.clicked, friendId];

        if (clickedArray.length > this.state.max) {
          this.setState({ max: this.state.clicked.length + 1 })
        } 

    } else {
      console.log("in clicked")
      clickedArray = [];
    }

    for (let i = friendsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friendsArray[i], friendsArray[j]] = [friendsArray[j], friendsArray[i]];
    }
      
    this.setState({ friends: friendsArray, clicked: clickedArray});
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  };

  render = () => (

    <React.Fragment>

      <Nav > 

        <a href="https://seanneppl.github.io/colorMemory/">New Palette</a>

        <h1 className="title">Color Memory</h1>

        <Counter
        onHandleIncrement={this.handleIncrement}
        count={this.state.clicked.length}
        max={this.state.max}/> 
      
      </Nav>

    <Wrapper>

    {

      this.state.friends.map((friend) => 

        {
          return <FriendCard
          randomizer={this.randomizer}
          id = {friend.id}
          key = {friend.id}
          color={friend.color}
        />}

    )}

    </Wrapper>

    </React.Fragment>

  );
}

export default App;
