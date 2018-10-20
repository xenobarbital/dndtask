import React, { Component } from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import ActionCreators from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    prosList: state.pros,
    consList: state.cons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCon: con => dispatch(ActionCreators.addCon(con)),
    addPro: pro => dispatch(ActionCreators.addPro(pro)),
    deleteCon: id => dispatch(ActionCreators.deleteCon(id)),
    deletePro: id => dispatch(ActionCreators.deletePro(id)),
    editCon: (id, con) => dispatch(ActionCreators.editCon(id, con)),
    editPro: (id, pro) => dispatch(ActionCreators.editPro(id, pro))
  };
};

class ConnectedList extends Component {
  render() {
    const {
      pros,
      prosList,
      consList,
      addCon,
      addPro,
      deleteCon,
      deletePro,
      editCon,
      editPro
    } = this.props;
    let list = pros ? prosList : consList;
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
            ...list.map(el => (
              <ListItem
                key={el.id}
                id={el.id}
                text={el.text}
                edit={false}
                deleteItem={pros ? deletePro : deleteCon}
                editItem={pros ? editPro : editCon}
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
