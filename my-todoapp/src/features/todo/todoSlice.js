import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
    editing: false,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload);


        },

        toggleUpdate: (state, action) => {
            state.editing = !state.editing;

        },

        updateTodo: (state, action) => {
            state.todoList.map(item => {
                if (action.payload.id === item.id) {
                    item.item = action.payload.item;


                }
            })
            state.editing = false;

        },

        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todoList = state.todoList.filter(item => item.id !== id)

        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false;
                    }
                    else {
                        item.done = true;
                    }
                }
            })
        }

    },
});


export const { saveTodo, setCheck, deleteTodo, updateTodo, toggleUpdate } = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export const editingTodo = state => state.todos.editing


export default todoSlice.reducer;