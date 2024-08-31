import {toast} from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../api";
import { setUser } from "../../slices/profileSlice"
import { setProjects } from "../../slices/projectSlice"


const {LOGIN_API, GET_DETAILS_API, ADD_DETAILS_API, DELETE_DETAILS_API} = endpoints;


export function login(data){



    return async (dispatch) => {
        
        try{
            console.log(data)
            console.log("url---", LOGIN_API);

            const response = await apiConnector("POST", LOGIN_API, data );

            console.log("LOGIN API RESPONSE...............", response);

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            
            toast.success("Login successful");
            const result = response.data;
            console.log("result---", result.data);
            localStorage.setItem("user", JSON.stringify(result.data));
            dispatch(setUser(result.data));
            return result;
            


        }
        catch(error){
            console.log('LOGIN API ERROR...........', error);
            toast.error("Login Failed");
        }

        

    }
}

export function getAllDetails(){
    return async (dispatch) => {
        
        try{
            const response = await apiConnector("GET", GET_DETAILS_API);
            console.log("GET ALL DETAILS API RESPONSE................", response);

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            const result = response.data.data;
            dispatch(setProjects(result));

            return result;
        }
        catch(error){
            console.log('GET ALL DETAILS API ERROR...........', error);
            toast.error("Could not fetch data");
        }
        
    }
}


export function addProjectDetails(data){
    return async (dispatch) => {
        try{
            const response = await apiConnector("POST", ADD_DETAILS_API, data);
            console.log("ADD PROJECT DETAILS API RESPONSE...............", response);

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("project added successfully");

            const result = response.data.data;
        }
        catch(error){
            console.log('ADD PROJECT DETAILS API ERROR...........', error);
            toast.error("Could not add data");
        }
    }
    
}


export function deleteProject(data){
    return async (dispatch) => {
        try{
            const response = await apiConnector("POST", DELETE_DETAILS_API, data);
            console.log("DELETE PROJECT API RESPONSE..............", response);

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("project deleted successfully");

        }
        catch(error){
            console.log('DELETE PROJECT API ERROR...........', error);
            toast.error("Could not delete data");
        }
    }
}

