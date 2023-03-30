import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../redux/slices/modalSlice";
import { RootState } from "../redux/store";
import { ModalType } from "../types/modal";
import { useAppSelector } from "./../redux/hooks";

const useGlobalModal = () => {
  const dispatch = useDispatch();
  const modalState = useAppSelector((state: RootState) => state.modal);

  const openGlobalModal = ({ isOpen, text }: ModalType) => {
    dispatch(openModal({ isOpen, text }));
  };

  const closeGlobalModal = () => dispatch(closeModal());

  return { modalState, openGlobalModal, closeGlobalModal };
};

export default useGlobalModal;
