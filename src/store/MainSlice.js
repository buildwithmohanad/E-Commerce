import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commerce from "../lib/commerce";
export const fetchProducts = createAsyncThunk(
  "MainSlice/fetchProducts",
  (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const Products = commerce.products.list();

      return Products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCart = createAsyncThunk(
  "MainSlice/fetchCart",
  (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const Cart = commerce.cart.retrieve();
      return Cart;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const refreshCart = createAsyncThunk(
  "MainSlice/refreshCart",
  (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const Cart = commerce.cart.refresh();
      return Cart;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
export const addToCart = createAsyncThunk(
  "MainSlice/addToCart",
  (productId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      commerce.cart.add(productId, 1);

      return commerce.cart.retrieve();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const emptyCart = createAsyncThunk(
  "MainSlice/emptyCart",
  (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      commerce.cart.empty();
      return commerce.cart.retrieve();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "MainSlice/removeFromCart",
  (itemId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      commerce.cart.remove(itemId);
      return commerce.cart.retrieve();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateCartQty = createAsyncThunk(
  "MainSlice/updateCartQty",
  (params, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      commerce.cart.update(params.id, params.quantity);
      return commerce.cart.retrieve();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const MainSlice = createSlice({
  name: "MainSlice",
  initialState: {
    productsData: [],
    cartData: {},
    Order : {},
    error: null,
    isLoading: true
  },
  reducers : {
    setOrder: (state,action) => {
      state.Order = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload.data.error.message
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsData = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCart.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(refreshCart.fulfilled, (state, action) => {
        state.cartData = action.payload;
        state.isLoading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartData = action.payload;
      })
      .addCase(emptyCart.fulfilled, (state, action) => {
        state.cartData = action.payload;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartData = action.payload;
      })
      .addCase(updateCartQty.fulfilled, (state, action) => {
        state.cartData = action.payload;
      });
  }
});
export const {setOrder , setError } = MainSlice.actions;
export default MainSlice.reducer;
