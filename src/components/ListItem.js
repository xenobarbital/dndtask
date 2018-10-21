import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import uuidv1 from 'uuid/v1';
import Types from '../constants/dndTypes';

const type = Types.ITEM;
const spec = {
  beginDrag(props) {
    const item = {
      text: props.text,
      id: props.id
    };
    return item;
  },

  canDrag(props) {
    if (props.last) {
      return false;
    }
    return true;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      edit: props.edit
    };
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleClick() {
    this.setState({edit: true});
  }

  handleItem(last, text, id) {
    if (last && text) {
      this.props.addItem({text, id});
      this.setState({text: ''});
    } else if (!last && text) {
      this.props.editItem({text, id}, this.props.id);
      this.setState({edit: false});
    } else if (!last && !text) {
      this.props.deleteItem(this.props.id);
    }
  }

  handleForm(e) {
    e.preventDefault();
    this.handleItem(this.props.last, this.state.text, uuidv1());
  }

  handleBlur() {
    console.log('OLOLO BLURRED!');
    this.handleItem(this.props.last, this.state.text, uuidv1());
  }

  renderForm() {
    const {last} = this.props;
    const {text} = this.state;
    return (
      <form onSubmit={(e) => this.handleForm(e)}>
        <input
          className={'form-control form-control-sm'}
          type={'text'}
          value={text}
          onChange={(e) => this.handleChange(e)}
          onBlur={() => this.handleBlur()}
          autoFocus={last ? false : true}
          onFocus={() => console.log('OLOLO FOCUSED!')} // Delete this!
        />
      </form>
    );
  }

  render() {
    const {isDragging, connectDragSource} = this.props;
    return connectDragSource(
      <li
        onClick={() => this.handleClick()}
        className={'list-group-item list-group-item-dark'}
        style={styles.numbered}
      >
        {!this.state.edit ? this.state.text : this.renderForm()}
      </li>
    );
  }
}

const styles = {
  numbered: {
    display: 'list-item'
  }
};

export default DragSource(type, spec, collect)(ListItem);
