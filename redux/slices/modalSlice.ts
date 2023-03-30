import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalType } from "../../types/modal";

const initialState: ModalType = {
  isOpen: false,
  text: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (_, action: PayloadAction<ModalType>) => {
      return action.payload;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
