import React from 'react';
import '../css/List.css';

function List(props) {

  //App.js로부터 데이터를 받아옴.
  const { contentsList, setSelectedIndex, setContentsList } = props;

  //contents call 함수
  const onClickHandler = (index) => {
    setSelectedIndex(index);
  }

  // 삭제 실행함수
  const onClickDelete = (index) => {

    const deletedContetntsList = contentsList.filter((_, i) => index != i);
    setContentsList(deletedContetntsList);
    localStorage.setItem('contentsList', JSON.stringify(deletedContetntsList));

  }
  //날짜 변환 포멧 
  const dateFormatter = (date) => {
    const newDate = new Date(date);

    var year = newDate.getFullYear();
    var month = new String(newDate.getMonth() + 1);
    var day = new String(newDate.getDate());
    var hour = new String(newDate.getHours());
    var minute = new String(newDate.getMinutes());

    // 한자리수일 경우 0을 채워준다. 
    if (month.length == 1) {
      month = "0" + month;
    }
    if (day.length == 1) {
      day = "0" + day;
    }

    return `${year}-${month}-${day} ${hour}:${minute}`;
  }


  return (
    <section id="List">
      <div>
        <table class="list__table">
          <thead class="list__head">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>수정일</th>
              <th>DEL</th>
            </tr>
          </thead>
          <tbody class="list__body">
            {contentsList && contentsList.map((m, index) => (
              <tr key={`BOARD_ROW_${index}`} onClick={() => {
                onClickHandler(index);
              }}>
                <td>{index + 1}</td>
                <td>{m.title}</td>
                <td>{m.author}</td>
                <td>{dateFormatter(m.createAt)}</td>
                <td>{m.updateAt}</td>
                <td><button onClick={() => (onClickDelete(index))}>del</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default List;