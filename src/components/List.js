import React, { Component } from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import ActionCreators from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCon: con => dispatch(ActionCreators.addCon(con)),
    addPro: pro => dispatch(ActionCreators.addPro(pro)),
    deleteCon: id => dispatch(ActionCreators.deleteCon(id)),
    deletePro: id => dispatch(ActionCreators.deletePro(id)),
    editCon: (id, text) => dispatch(ActionCreators.editCon(id, text)),
    editPro: (id, text) => dispatch(ActionCreators.editPro(id, text))
  };
};

class ConnectedList extends Component {
  render() {
    const {
      pros,
      state,
      addCon,
      addPro,
      deleteCon,
      deletePro,
      editCon,
      editPro
    } = this.props;
    console.log('State', state);
    let list = pros ? state.pros : state.cons;
    return (
      <div style={styles.bordered} className={'col bg-light d-flex flex-column'}>
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
            ...list.map(el => (
              <ListItem
                key={el.id}
                id={el.id}
                text={el.text}
                edit={false}
                deleteItem={pros ? deletePro : deleteCon}
                editItem={pros ? editPro : editCon}
                state={state}
              />
            )),
            <ListItem
              last
              edit
              key={'last'}
              text={''}
              addItem={pros ? addPro : addCon}
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

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
