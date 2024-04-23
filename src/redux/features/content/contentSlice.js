import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    notes: [
        {
            id: 0,
            text: "salam",
            important: false,
        }
    ]
}

console.log(initialState);

export const contentSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addItem : (state,action) => {
             state.notes.push(action.payload);
        },
        removeItem : (state,action) => {
            const id = action.payload;
            state.notes = state.notes.filter(note=>note.id !== id)
        },
        toggleImportant: (state,action) => {
            const id = action.payload;
            const note = state.notes.find(note => note.id === id);
            if(note){
                note.important = !note.important;
            }
        }
    }
})

export const {addItem,removeItem,toggleImportant} = contentSlice.actions

export default contentSlice.reducer