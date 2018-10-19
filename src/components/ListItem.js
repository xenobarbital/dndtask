import React, { Component } from 'react';

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

  handleForm(e) {
    e.preventDefault();
  }

  handleBlur() {
    if (!this.props.last) {
      this.setState({edit: false});
    }
  }

  handleClick() {
    this.setState({edit: true});
  }

  renderForm() {
    const {last} = this.props;
    const {text} = this.state;
    return (
      <form onSubmit={(e) => this.handleForm(e)}>
        <input
          className={'form-control'}
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
    return (
      <li
        onClick={() => this.handleClick()}
        className={'list-group-item list-group-item-dark'}
        style={styles.numbered}
      >
        {!this.state.edit ? this.props.text : this.renderForm()}
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
