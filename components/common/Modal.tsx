import Image from "next/image";
import styled from "styled-components";
import useGlobalModal from "../../hooks/useGlobalModal";

const Modal = () => {
  const { modalState, closeGlobalModal } = useGlobalModal();

  return (
    <ModalStyled>
      <div className="modalWrap">
        <div className="top">
          <p>{modalState.text}</p>
          <button type="button" onClick={closeGlobalModal}>
            <Image
              src="/svgs/modal_close.svg"
              width={24}
              height={24}
              alt="닫기"
            />
          </button>
        </div>
        <div className="bottom">
          <button type="button" onClick={closeGlobalModal}>
            OK
          </button>
        </div>
      </div>
      <div className="dimmed" onClick={closeGlobalModal}></div>
    </ModalStyled>
  );
};

export default Modal;

const ModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalWrap {
    width: 360px;
    padding: 24px;
    background: #fff;
    border: 1px solid #f2f3f7;
    box-shadow: 0px 2px 24px rgba(39, 43, 49, 0.2);
    border-radius: 20px;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 46px;

      p {
        font-weight: 700;
        font-size: 20px;
        color: #000000;
      }

      button {
        background: none;
        cursor: pointer;
      }
    }

    .bottom {
      display: flex;

      button {
        margin-left: auto;
        background: #00c3cc;
        border-radius: 10px;
        width: 69px;
        height: 42px;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 42px;
        cursor: pointer;
      }
    }
  }

  .dimmed {
    width: 100%;
    height: 100%;
    background: rgba(51, 55, 61, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
