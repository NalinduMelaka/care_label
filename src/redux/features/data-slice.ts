import { createSlice, PayloadAction} from  '@reduxjs/toolkit'

type InitialState = {
  value: DataState;
}

type DataState = {
  isShowdata: boolean;
  strokeNumber: string;
}
const initialState = {
   value: {
    isShowdata: false,
    strokeNumber: ""
   }
}

export const data = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    complete: () =>{
      return initialState;
    },
  },
})

export const { complete } = data.actions;
export default data.reducer;