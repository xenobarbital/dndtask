import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className={'container col-8 d-flex flex-column bg-info AppCont'}>
        <div style={styles.header} className={'d-flex flex-column'}>
          <h1 className={'text-light'} style={styles.headOne}>Pros and Cons</h1>
          <h2 className={'text-light'} style={styles.headTwo}>of jogging</h2>
        </div>
        <div style={styles.content} className={'container'}>
          <div style={styles.fullHeight} className={'row'}>
            <List pros />
            <List />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 5
  },
  fullHeight: {
    height: '97%'
  },
  headOne: {
    fontSize: '1.5rem'
  },
  headTwo: {
    fontSize: '1.3rem'
  }
};

export default App;
