import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tradeService from "./tradeService";

const initialState = {
  buys: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const sellCoins = createAsyncThunk("trade/sellCoins", async (sellData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await tradeService.sellCoins(sellData, token);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);

export const buyCoins = createAsyncThunk("trade/buyCoins", async (buyData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await tradeService.buyCoins(buyData, token);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);

export const getBuys = createAsyncThunk("trade/getBuys", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await tradeService.getBuys(token);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);

const tradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sellCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sellCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.buys = state.buys.filter(
          (item) => item.coinId !== action.payload.coinId
        );
      })
      .addCase(sellCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(buyCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(buyCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(buyCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBuys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBuys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.buys = action.payload;
      })
      .addCase(getBuys.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = tradeSlice.actions;
export default tradeSlice.reducer;
