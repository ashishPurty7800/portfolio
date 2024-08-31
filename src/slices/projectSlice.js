import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: null,
    loading: false,
};

const projectSlice =  createSlice({
    name: "project",
    initialState: initialState,
    reducers: {
        setProjects(state, value){
            state.projects = value.payload;
        },
        setLoading(state, value){
            state.loading = value.payload;
        }
    }
});

export const {setProjects, setLoading} = projectSlice.actions;
export default projectSlice.reducer;