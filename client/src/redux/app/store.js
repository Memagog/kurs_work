import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../feutures/User/UserSlice";

export default configureStore({
    reducer: {
        user: userSlice.reducer
    }
});
