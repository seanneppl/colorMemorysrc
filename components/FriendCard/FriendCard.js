import React from "react";
import "./FriendCard.css";


const FriendCard = props => {

  this.componentToHex = function(c) {
    let color = parseInt(c,10);
    var hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  this.rgbToHex = function(colors) {
    let r, g, b;
    const colorsArray = colors.split(",");
    [r,g,b] = [...colorsArray];
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  var colors = props.color.toString(); 
 
return (
  <div
    className="card"
    style={{ backgroundColor: "rgb("+ props.color +")" }}
    onClick={() => props.randomizer(props.id)}
    >
    <div id="colorBox">
      <p id="rgb">rbg({colors})</p>
      <p id="hex">hex: {this.rgbToHex(colors)}</p>
    </div>
  </div>
);}


export default FriendCard;
