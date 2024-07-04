import { createSlice } from "@reduxjs/toolkit"

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    },
    // other reducers for updating, deleting, etc. quizzes
  },
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
