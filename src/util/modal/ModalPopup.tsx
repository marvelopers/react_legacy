import React from "react";
import Modal from "react-modal";
import close from './close_icon.svg';
import styled from "styled-components";

interface ModalPopupProps {
  isOpen: boolean;
  onClose: Function;
  children: any;
}

// 모달 기본 포멧
const ModalPopup = ({ isOpen, onClose, children }: ModalPopupProps) => {
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      id="custom_modal"
      style={{
        overlay: {
          backgroundColor: "rgba(153, 153, 153, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "initial",
          bottom: "initial",
          transform: "translate(-50%, -50%)",
          border: "none",
          borderRadius: "4px",
          padding: "0",
          boxShadow: "0px 4px 20px rgba(153, 153, 153, 0.5)",
        },
      }}
    >
      <StyledButton onClick={() => onClose()}>
        <img src={close} alt="close_icon" />
      </StyledButton>
      {children}
    </Modal >
  )
}

export default ModalPopup;

// 모달을 react-modal을사용하는 방법 



// ModalDialog 

const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px;
`;