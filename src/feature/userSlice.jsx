import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice ({
    
    name: "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: "tech",
        blogData: null,
    },
    reducers: {
        setSignendIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setInput: (state, action) => {
            state.searchInput = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        }
    }
});

export const {setSignendIn,setUserData,setInput,setBlogData} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInpit = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;