import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Components from './components/Component';

class App extends React.Component {
  render() {
    return (
      <div>
        <p className="title">TrybeTunes</p>
        <BrowserRouter>
          <Components />
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default App;
