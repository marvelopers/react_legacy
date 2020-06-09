import React, { useState, useEffect } from 'react';
import '../css/Card.css';

function Card(props){

  //App.js로부터 데이터를 받아옴.
  const { contentsList, setContentsList } = props;
  
  //state에 따라 새로운 데이터 배열을 생성.
  const [payload, setPayload] = useState({
    title: '',
    contents: '',
    author: ''
  });

  //button 클릭시 실행되는 함수
  const submit = () => {

    //db에 전송될 데이터
    const content = {
      ...payload,
      createAt : new Date(),
      updateAt : new Date()
    }

    //기존의 데이터와 새로운 데이터를 결합하는 방법
    const newContentsList = [...contentsList, payload];

    //Array를 String으로 변환해서 set
    localStorage.setItem('contentsList', JSON.stringify(newContentsList));
    setContentsList(newContentsList);

  }

  return(

    <section id="Card">
      <div class="card__detail">      
        <form class ="card__form"> 
          <label>
            <input 
              id="title"
              class="card__title" 
              placeholder="title"
              value={payload.title}
              onChange={(e)=> {
                setPayload({
                  ...payload,
                  title: e.currentTarget.value
                });
              }}
              ></input>
          </label>
          <label>
            <textarea 
              id="content" 
              class="card__textarea" 
              placeholder="tell your story" 
              value={payload.contents}
              onChange={(e)=> {
                setPayload({
                  ...payload,
                  contents: e.currentTarget.value
                });
              }}></textarea>
          </label>
          <label>
            <input 
              id="author" 
              class="card__author" 
              placeholder="author" 
              value={payload.author}
              onChange={(e)=> {
                setPayload({
                  ...payload,
                  author: e.currentTarget.value
                });
              }}></input>
          </label>
          <button type="button" class="card__publish" onClick={submit}>publish</button>
        </form>
      </div>
    </section>
  );
}
export default Card;