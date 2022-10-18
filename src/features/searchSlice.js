import { createAsyncThunk, createSlice, findNonSerializableValue } from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';




export const searchSlice = createSlice({
    name: 'search',
    initialState: {

        searchInput: "",
        searchBooks: [],
        isLoaded: false,
        error: null
    },
    reducers: {

        search: (state, action) => {


        }
    


        }

})



