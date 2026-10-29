import{createSlice , nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos: [ {id: '1', text: 'Learn Redux Toolkit'} ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state , action )=>{
            const todo={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, // state is the current state of the slice and action is the payload that we pass to the reducer  allways present in the reducer function
        removeTodo: (state , action )=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

    }
})
export const {addTodo, removeTodo}= todoSlice.actions
 export default todoSlice.reducer