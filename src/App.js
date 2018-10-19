import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className={'container col-sm-8 d-sm-flex flex-column bg-info AppCont'}>
        <div style={styles.header} className={'d-sm-flex'}>
          <p className={'text-light'}>Some text</p>
        </div>
        <div style={styles.content} className={'d-sm-flex'}>
          <List pros />
          <List />
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
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1
  },
  content: {
    flex: 5
  }
};

export default App;
