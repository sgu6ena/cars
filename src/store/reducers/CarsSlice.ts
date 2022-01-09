import {iCar} from "../../models/iCar";
import {createSlice} from "@reduxjs/toolkit";
import {count} from "console";

interface CarState {
    cars: iCar[];
    isLoading: boolean;
    error: string;
}

const initialState: CarState = {
    cars: [],
    isLoading: false,
    error: "",

}

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export default carSlice.reducer;