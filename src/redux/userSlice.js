import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Abu Raihan", email: "raihan@gmail.com", age: 29 },
  { id: 2, name: "Razu Ahmed", email: "razu@gmail.com", age: 35 },
  { id: 3, name: "Rawshan Zarin", email: "rawshan@gmail.com", age: 6 },
  { id: 4, name: "Jasmin Aktar", email: "jasmin@gmail.com", age: 30 },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, age } = action.payload;
      const userWillUpdate = state.find((item) => item.id == id);
      if (userWillUpdate) {
        userWillUpdate.name = name;
        userWillUpdate.email = email;
        userWillUpdate.age = age;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const agree = window.confirm("Are you sure!!!");
      if (agree) {
        const userWillDelete = state.find((item) => item.id == id);
        if (userWillDelete) {
          return state.filter((item) => item.id != id);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
