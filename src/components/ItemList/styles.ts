import styled from "@emotion/styled";

export const Wrapper =styled.div``;

export const ItemList = styled.ul`
  padding-left: 20px;
  margin: auto -20px;
  display: flex;
  overflow: auto;
  box-sizing: border-box;
  overflow: auto;
  flex-wrap: nowrap;
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0px;
  margin: 0px;
`;

export const Name = styled.div`
  width: 129px;
  margin-bottom: 2px;
  height: 38px;
  line-height: 18px;
  font-size: 14px;    
  color: #292929;
`;

export const Img =styled.img`
  box-sizing: border-box;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 130px;
  height: 130px;
  border-radius: 10px;
  /* background: url({(pr_ops) => p_rops.imgSrc}); */
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; */
`;