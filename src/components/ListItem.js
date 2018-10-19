import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li
        className={'list-group-item list-group-item-dark'}
        style={styles.numbered}
      >
        {this.props.text}
      </li>
    );
  }
}

const styles = {
  numbered: {
    display: 'list-item'
  }
};

export default ListItem;
