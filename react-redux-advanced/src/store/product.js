import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      title: "Burger",
      price: 6,
      id: "item-1",
      description: "Enak",
    },
    {
      title: "Martabak Manis",
      price: 8,
      id: "item-2",
      description: "Enak Banget",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
