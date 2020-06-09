import React from 'react';
import '../css/List.css';

function List(props){

  const {contentsList, setSelectedIndex} = props;

  const onClickHandler = (index) => {
    setSelectedIndex(index);
  }
  
  
  return(
    <section id="List">
      <div>
      <table class="list__table">
        <thead class="list__head">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody class="list__body">
          {contentsList &&  contentsList.map((m, index)=>(
          <tr key={`BOARD_ROW_${index}`} onClick={() => {
            onClickHandler(index);
          }}>
            <td>{index+1}</td>
            <td>{m.title}</td>
            <td>{m.author}</td>
            <td>{m.createAt}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
     </section>
  );
}
export default List;