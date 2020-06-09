import React, { useState, useEffect } from 'react';
import '../css/Card.css';

function Card(props){

  const {contentsList, selectedIndex} = props;

  const [index, setIndex] = useState(-1);
  const [card, setCard ] = useState(contentsList[selectedIndex]);

  useEffect(() => {
    setIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(()=> {
    setCard(contentsList[index]);
  }, [index]);

  return(
    <>
    {card &&
    <section id="Card">
      <div class="card__detail">
        {card ? JSON.stringify(card) : 'undefined'}        
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
            <textarea class="card__textarea" placeholder="tell your story"></textarea>
          </label>
          <label>
            <input class="card__author" placeholder="author"></input>
          </label>
          <button type="submit" class="card__publish">publish</button>
        </form>
      </div>
    </section>
    }
    </>
  );
}
export default Card;