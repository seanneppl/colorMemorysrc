import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
constructor(props){
  super(props);

  this.state = {
    count: 0
  };
}

  render() {

    return (
        <div>
          <p>Score: {this.props.count} | Max Score: {this.props.max}</p>
        </div>
    );
  }

}

export default Counter;
