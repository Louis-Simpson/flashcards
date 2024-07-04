import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: "cardsSlice",
    initialState: {
      cards: {},
    },
    reducers: {
      addCard: (state, action) => {
        state.cards[action.payload.id] = action.payload;
      },
      // other reducers for updating, deleting, etc. cards
    }
})

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
export const selectCardById = (id) => (state) => state.cards.cards[id];