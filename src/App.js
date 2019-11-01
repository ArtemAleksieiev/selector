import React, {Component} from 'react';
import Ghost from './Ghost'
import ghost1 from './Images/ghost1.png'
import marsh from './Images/marsh.jpeg'
import casper from './Images/casper.jpeg'


class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedGhost: 'casper'
    }
  }
  selectGhost = (ghostName) => {
    this.setState({
      selectedGhost: ghostName,
    });
  };

  render () {
    return (
      <div className="container">
      <div className="navbar">
      <div>Selected: </div>
      <div>{this.state.selectedGhost}</div>
      </div>
      <div className="ghost-list">
          <Ghost ghost={ghost1} selectGhost= {this.selectGhost}/>
          <Ghost ghost={casper} selectGhost= {this.selectGhost}/>
          <Ghost ghost={marsh} selectGhost= {this.selectGhost}/>
      </div>
      </div>
    )
  }
}

export default Selector;
