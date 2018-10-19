import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  state = {
    stuff: ['burp', 'fart', 'turd', 'blaarggag']
  }

  render() {
    return (
      <div style={styles.bordered} className={'col bg-light d-flex flex-column'} >
        <div
          style={styles.header}
          className={'d-flex align-items-center justify-content-center'}
        >
          <h3 className={'text-info'}>
            {this.props.pros ? 'Pros' : 'Cons'}
          </h3>
        </div>
        <div style={styles.body}>
          <ol className={'list-group'}>
            {[
              ...this.state.stuff.map((el, i) => (
                <ListItem
                  key={i}
                  text={el}
                  edit={false}
                />
              )),
              <ListItem
                last
                edit
                key={'last'}
                text={''}
              />
            ]}
          </ol>
        </div>
      </div>
    );
  }
}

const styles = {
  bordered: {
    borderStyle: 'dotted',
    borderColor: 'gray',
    borderWidth: '1px'
  },
  header: {
    flex: 1,
    backgroundColor: '#F0F8FF'
  },
  body: {
    flex: 6,
    paddingLeft: 10
  },
  numbered: {
    display: 'list-item'
  }
};

export default List;
