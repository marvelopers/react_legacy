import React from "react";
import styled from "styled-components";

const ModalPage = () => {
  return (
    <StyledPage>
      <h2>하단의 버튼을 클릭하세요, 모달창이 나타납니다</h2>
      <button>기본 모달</button>
      <button>버튼 하나 모달</button>
      <button>버튼 두개 모달</button>
      <button>기본 모달 포멧</button>
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
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    background: #494949;
  }
`;