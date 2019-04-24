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

class App extends Component {

  // Set the initial state of the app component 
  state = {
    colors,
    currentScore: 0,
    highScore: 0,
    clicked: [],
  };

  // Event handler for clicks on color tiles
  handleClick = id => {

  };

  // For mixing of the color tiles
  handleColormix = () => {

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
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

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
