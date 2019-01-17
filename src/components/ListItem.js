import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../actions';

class ListItem extends Component {
 
handleComplete = completeTodo => {
    const {completeTodo: removeTodo} = this.props;
    removeTodo(completeTodo);
};
render() {
    const{todoId, todo} = this.props;
    return (
    <div key="toDoName">
        <h4>
        {todo.title}
        <span onClick={() => this.handleComplete(todoId)}>
            <i> &nbsp; Done</i>
        </span>
        </h4>
    </div>
    );
}
}
export default connect(null, {completeTodo})(ListItem);