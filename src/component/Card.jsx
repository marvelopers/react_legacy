import React, { useState, useEffect } from 'react';
import '../css/Card.css';

function Card(props){
  // const {contentsList, selectedIndex} = props;


  //App.js로부터 데이터를 받아옴.
  const { contentsList, setContentsList, selectedIndex} = props;

  const cardDefaultValue = {
    key: '',
    title: '',
    contents: '',
    author: ''
  }
  /////////////////////raed///////////////////////////
  const [index, setIndex] = useState(-1);
  const [card, setCard ] = useState(cardDefaultValue);
  console.log('card', card);
  useEffect(() => {
    setIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(()=> {
    if (contentsList[index]) setCard(contentsList[index]);
  }, [index]);


  /////////////////////create///////////////////////////
  //state에 따라 새로운 데이터 배열을 생성

  const create = (payload) => {

    const newCard = {
      ...payload,
      createAt: new Date(),
      updateAt: new Date(),
      key: Math.max.apply(null, contentsList.map(e => e.key)) + 1,
    }

    const newContentsList = [...contentsList, newCard];
    localStorage.setItem('contentsList', JSON.stringify(newContentsList));
    setContentsList(JSON.parse(localStorage.getItem('contentsList')));
    
  }

  //button 클릭시 submit 버튼 실행 함수
  const submit = () => {
    console.log('현재 카드', card)
    if (card.key === '') {//create
      create(card);
    } else { //update
      console.log('update_card', card);
      update(card);
    }

    //db에 전송될 데이터
    // const content = {
    //   ...payload,
    //   createAt : new Date(),
    //   updateAt : new Date()
    // }

    // //기존의 데이터와 새로운 데이터를 결합하는 방법
    // const newContentsList = [...contentsList, payload];

    // //Array를 String으로 변환해서 set
    // localStorage.setItem('contentsList', JSON.stringify(newContentsList));
    // setContentsList(newContentsList);

  }



  ///////////////////////update//////////////////////////
  //button 클릭시 update 버튼 실행 함수
  //인덱스까지 찾아서 덤빙 

  const update = (payload) => {
    const updatedKey = payload.key;
    const newContentsList = contentsList.map(e => {
      if (updatedKey === e.key) {
        return {
          ...payload,
          updateAt: new Date()
        }
      } else {
        return e;
      }
    });
    
    localStorage.setItem('contentsList', JSON.stringify(newContentsList));
    setContentsList(JSON.parse(localStorage.getItem('contentsList')));

  }
  
  ////////////////////////////////////////////////
  

  let button = <></>
  if(!card.title){
    button = <button type="button" class="card__publish" onClick={submit}>publish</button>;
  }else{
    button = <button type="button" class="card__update" onClick={update}>update</button>;
    console.log('card__'+card);
  }


  return(
    <>
    <section id="Card">
      <div class="card__detail">
        <form class ="card__form"> 
          <label>
            <input 
              class="card__title" 
              placeholder="title"
              value = {card.title}
              onChange = {(e) => {
                setCard({
                  ...card,
                  title: e.currentTarget.value
                })
              }}
              ></input>
          </label>
          <label>
            <textarea 
              class="card__textarea" 
              placeholder="tell your story"
              value = {card.contents}
              onChange = {(e) => {
                setCard({
                  ...card,
                  contents: e.currentTarget.value
                })
              }}
            ></textarea>
          </label>
          <label>
            <input 
              class="card__author" 
              placeholder="author"
              value = {card.author}
              onChange = {(e) => {
                setCard({
                  ...card,
                  author: e.currentTarget.value
                })
              }}
            ></input>
          </label>
          <button type="button" class="card__publish" onClick={submit}>
            {card.key === '' ? 'publish' : 'update'}
          </button>
          { card.key !== '' &&
            <button type="button" class="card__publish" onClick={() => {
            setCard(cardDefaultValue);
          }}>
            취소
          </button>}
        </form>
      </div>
    </section>
    </>
  );
}
export default Card;