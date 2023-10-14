import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    page:"About me",
    tabbarResponsiveShow:false
};

const homeSlice = createSlice({
    name:"home",
    initialState,
    reducers:{
        setPage:(state,action)=>{
            state.page=action.payload;
        },
        toggleTabbarResponsiveShow:(state)=>{
            state.tabbarResponsiveShow=!state.tabbarResponsiveShow;
        }
    }

});


export const {setPage, toggleTabbarResponsiveShow} = homeSlice.actions;
export default homeSlice.reducer;