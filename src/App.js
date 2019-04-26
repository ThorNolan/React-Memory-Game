import React, { Component } from 'react';
import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import ColorTile from './components/ColorTile';
import Scorebox from './components/Scorebox'
import colors from './colors.json'
import './App.css';

// Function for mixing up all the color tiles in the display
function colorMix(arr) {
  for (let i = arr.length -1; i > 0; i--) {
    // Randomized placement of array components effectively mixes them all up each time this function is called
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

class App extends Component {

  // Set the initial state of the app component 
  state = {
    colors,
    currentScore: 0,
    highScore: 0,
    isClicked: [],
  };

  // Event handler for clicks on color tiles
  handleClick = id => {
    if (this.state.isClicked.indexOf(id) === -1) {
      // Increment score, update click state, and mix up the colors
      this.handleIncrement();
      this.setState({ isClicked: this.state.isClicked.concat(id) });
      this.handleColorMix();
    } else {
      // Reset score and mix up colors
      this.handleReset();
    }
  };

  // Handle mixing of the color tiles
  handleColorMix = () => {
    let mixedColors = colorMix(colors);
    this.setState({ colors: mixedColors });
  };

  //  Handle incrementing the score by 1 as user clicks on correct tiles
  handleIncrement = () => {
    const incrementScore = this.state.currentScore + 1;
    this.setState({ currentScore: incrementScore});
    // Set the high score to the incremented score if user gets to a higher number
    if (incrementScore >= this.state.highScore) {
      this.setState({ highScore: incrementScore})
    }
    else if (incrementScore === 12) {
      alert("👏  WE HAVE A WINNER!  👏")
    }
  };

  // Handle resetting the score (but not the high score!)
  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      isClicked: []
    });
    // Mix up colors again after resetting current score and click status
    this.handleColorMix();
  };
  
  // Render my display for the main page of the application 
  render() {
    return (
      <Wrapper>
        <Navbar
          title="MEMORY COLOR CLICKER"
        />

        <Container>
          <Scorebox
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
          />
        </Container>

        <Container>
          <Row>
            {this.state.colors.map(color => (
              <Col size="md-3 sm-3">
                <ColorTile
                  key={color.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  id={color.id}
                  bg={color.color}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
};

export default App;
