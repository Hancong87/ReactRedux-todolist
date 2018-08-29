import React, {Component} from 'react';
import store from './store';
import {connect} from 'react-redux';

class TodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputChange}/>
                    <button>submit</button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        );
    }

    handleInputChange(e) {
        console.log(e.target.value);
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
};

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
      changeInputChange(e) {
            const action = {
                type:'change_input_value',
                value: e.target.value
            };
            dispatch(action);
      }
  }
};

//让TodoList和store做连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);