import { todosRef }  from '../firebase';
import { dispatch } from 'rxjs/internal/observable/range';

const FETCH_TODOS = 'FETCH_TODOS';

export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
}