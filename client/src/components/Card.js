import React from "react";
import "./Card.css";


// By extending the React.Component class, Counter inherits functionality from it
class Card extends React.Component {
  // Setting the initial state of the Counter component
  // state = {
  //   friends: ["Chi Chi", "Francine", "Neville"]
  // };

  // handleIncrement increments this.state.count by 1
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count + 1 });
  // };

  // The render method returns the JSX that should be rendered
  render() {
    return (
    <div>
      <div className='card'>
      <div className="card-body">
      <h5 className="card-title">Notes to myself.</h5>
    <h6 className="card-subtitle mb-2 text-muted">Whatever I like.</h6>
    <p className="card-text" message="" >{this.props.message}</p>
  </div>
         
  </div>

   </div>
    )}}



export default Card;
