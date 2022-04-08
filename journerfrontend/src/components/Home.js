import React, { Component } from 'react';
import '../App.css';
import NewGameScreen from './NewGameScreen';
import Startscreen from './Startscreen';

class Home extends Component {
    render() {
        return (
            <div className='container'>
              <Startscreen />
            </div>
        );
    }
}
export default Home;