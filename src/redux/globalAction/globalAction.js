import { createAsyncThunk } from "@reduxjs/toolkit";

 export const resetErrAction = createAsyncThunk("resetErr-action",() => {
    return {};
 })


 export const resetSuccessAction = createAsyncThunk("resetSuccess-action",() => {
   return {};
 });