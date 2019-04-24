import React, { Component } from 'react';
import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import ColorTile from './components/ColorTile';
import Logo from './components/Logo'
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
      this.handleIncrement();
      this.setState({ isClicked: this.state.isClicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // For mixing of the color tiles
  handleColormix = () => {
    let mixedColors = colorMix(colors);
    this.setState({ colors: mixedColors });
  };

  // For incrementing the score as users click on tiles
  handleIncrement = () => {

  };

  // For resetting the score (but not the high score!)
  handleReset = () => {

  };
  
  // Render my display for the main page of the application 
  render() {
    return (
      <Wrapper>
        <Navbar
          title="Memory Color"
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        >
          <Logo/>
        </Navbar>

        <Container>
          <h3>Click the colors, but only once! Click the same color twice and your score will reset.</h3>
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
                  style={color.color}
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
