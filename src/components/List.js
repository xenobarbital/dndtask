import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  state = {
    stuff: [
      {text: 'foo', id: 'kjhgkjhg'},
      {text: 'bar', id: 'gytu5rtfj'},
      {text: 'foobar', id: 'ggyufjgoooj'},
    ]
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
        <ol style={styles.body}>
          {[
            ...this.state.stuff.map(el => (
              <ListItem
                key={el.id}
                text={el.text}
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
    );
  }
}

const styles = {
  bordered: {
    borderStyle: 'dotted',
    borderColor: 'gray',
    borderWidth: '1px',
    height: '480px'
  },
  header: {
    backgroundColor: '#F0F8FF'
  },
  body: {
    height: '90%',
    overflow: 'scroll'
  },
  numbered: {
    display: 'list-item'
  },
};

export default List;
