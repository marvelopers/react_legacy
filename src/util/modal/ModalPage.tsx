import React, { useState } from "react";
import styled from "styled-components";
import ModalPopup from "./ModalPopup";

const ModalPage = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <StyledPage>
      <h2>하단의 버튼을 클릭하세요, 모달창이 나타납니다</h2>
      <button onClick={() => setOpen(true)}>
        기본 모달
      </button>
      <ModalPopup isOpen={isOpen} onClose={() => setOpen(false)} >이렇게 씁니다</ModalPopup>
      <button onClick={() => setOpen(true)}>
        버튼 하나 모달
      </button>
      <ModalPopup isOpen={isOpen} onClose={() => setOpen(false)} >버튼 하나 모달</ModalPopup>

      <button onClick={() => setOpen(true)}>
        버튼 두개 모달
      </button>
      <ModalPopup isOpen={isOpen} onClose={() => setOpen(false)} >버튼 두개 모달</ModalPopup>
      <button onClick={() => setOpen(true)}>
        기본 모달 포멧
      </button>
      <ModalPopup isOpen={isOpen} onClose={() => setOpen(false)} >기본 모달 포멧</ModalPopup>
    </StyledPage>
  )
}

export default ModalPage;

const StyledPage = styled.div`
  
  h2{
    margin: 0 auto;
  }
  button{
    width: 100px;
    height: 49px;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    background: #494949;
  }
`;