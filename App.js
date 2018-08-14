import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Nav from "./components/Nav";

const cards = [
  { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 },{ id: 5 }, { id: 6 },
  { id: 7 },{ id: 8 }, { id: 9 },
  { id: 10 }, { id: 11 },{ id: 12 },
  { id: 13 }, { id: 14 },{ id: 15 },
  { id: 16 }
      ];


const randomColor = () => Math.floor(Math.random() * 257);
// console.log(randomColor());

cards.map((card)=> card.color = [randomColor(), randomColor(), randomColor()]);

class App extends React.Component { 

  state = {
    cards : cards,
    clicked : [],
    count: 0,
    max: 0
  }

  randomizer = (cardId) => {
    let cardsArray = this.state.cards;

    let clickedArray;

    if (this.state.clicked.indexOf(cardId) === -1) {
      // console.log("not in clicked")
      clickedArray = [...this.state.clicked, cardId];

        if (clickedArray.length > this.state.max) {
          this.setState({ max: this.state.clicked.length + 1 })
        } 

    } else {
      console.log("in clicked")
      clickedArray = [];
    }

    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
      
    this.setState({ cards: cardsArray, clicked: clickedArray});
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

      this.state.cards.map((card) => 

        {
          return <Card
          randomizer={this.randomizer}
          id = {card.id}
          key = {card.id}
          color={card.color}
        />}

    )}

    </Wrapper>

    </React.Fragment>

  );
}

export default App;
