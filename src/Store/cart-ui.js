import { createSlice } from "@reduxjs/toolkit";
//Cart toggle Reducer
const initialCartState = { isCartVisible: false, notification: null }
const cartSlice = createSlice({
    name: 'ui',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export default cartSlice.reducer;
export const uiActions = cartSlice.actions;