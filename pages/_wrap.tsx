import Modal from "@/components/common/Modal";
import useGlobalModal from "@/hooks/useGlobalModal";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Wrap = ({ children }: Props) => {
  const { modalState } = useGlobalModal();

  return (
    <>
      {children}
      {modalState.isOpen && <Modal />}
    </>
  );
};

export default Wrap;
