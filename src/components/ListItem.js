import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import uuidv1 from 'uuid/v1';
import Types from '../constants/dndTypes';
import flow from 'lodash/flow';

const type = Types.ITEM;
const sourceSpec = {
  beginDrag(props) {
    let item = {
      text: props.text,
      id: props.id
    };
    console.log(item);
    return item;
  },

  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    console.log(monitor.getDropResult());
    props.deleteItem(props.id);
  },

  canDrag(props) {
    return props.last ? false : true;
  }
};

const targetSpec = {
  drop(props) {
    return {
      text: props.text,
      id: props.id
    };
  }
};

function sourceCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

function targetCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
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
      this.props.editItem(this.props.id, text);
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
          onFocus={() => null} // Delete this!
        />
      </form>
    );
  }

  render() {
    const {
      isDragging,
      isOver,
      connectDragSource,
      connectDropTarget
    } = this.props;
    let light = isOver || isDragging ? 'list-group-item-light' : 'list-group-item-dark';
    return connectDropTarget(connectDragSource(
      <li
        onClick={() => this.handleClick()}
        className={`list-group-item ${light}`}
        style={styles.numbered}
      >
        {!this.state.edit ? this.state.text : this.renderForm()}
      </li>
    ));
  }
}

const styles = {
  numbered: {
    display: 'list-item'
  }
};

export default flow(
  DragSource(type, sourceSpec, sourceCollect),
  DropTarget(type, targetSpec, targetCollect)
)(ListItem);
