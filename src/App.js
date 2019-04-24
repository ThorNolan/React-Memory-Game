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
  
  // Render my display for the main page of the application 
  render() {
    return (
      <Wrapper>
        <Navbar
        />

        <Container>
          <h3>Click the colors, but only once! Click the same color twice and your score will reset.</h3>
        </Container>

        <Container>
          <Row>

          </Row>
        </Container>
      </Wrapper>
    );
  }
};

export default App;
