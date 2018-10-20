import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

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

  handleForm(e) {
    e.preventDefault();
    if (this.props.last && this.state.text) {
      this.props.addItem({
        text: this.state.text,
        id: uuidv1()
      });
      this.setState({text: ''});
    } else if (!this.props.last && this.state.text) {
      this.props.editItem({
        text: this.state.text,
        id: uuidv1()
      }, this.props.id);
      this.setState({edit: false});
    } else if (!this.props.last && !this.state.text) {
      this.props.deleteItem(this.props.id);
    }
  }

  handleBlur() {
    if (this.props.last && this.state.text) {
      this.props.addItem({
        text: this.state.text,
        id: uuidv1()
      });
      this.setState({text: ''});
    } else if (!this.props.last && this.state.text) {
      this.props.editItem({
        text: this.state.text,
        id: uuidv1()
      }, this.props.id);
      this.setState({edit: false});
    } else if (!this.props.last && !this.state.text) {
      this.props.deleteItem(this.props.id);
    }
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
        />
      </form>
    );
  }

  render() {
    if (this.props.last) console.log('Im the last', this.state.last);
    return (
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

export default ListItem;
