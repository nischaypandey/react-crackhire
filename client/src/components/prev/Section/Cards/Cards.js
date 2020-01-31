import React from 'react';

const Card = (props) => { // { card: { header, text, imgUrl } }
    const containerStyle = "card my-2";
    const headerStyle = "card-header text-center py-2 text-capitalize bg-secondary text-light";
    const contentStyle = "card-body row";
    const textStyle = "card-text text-justify font-weight-light col-md-8";
    const imgStyle = "rounded img-fluid col-md-4";
    return (
        <div id="container" className={containerStyle}>
          <h3 id="header" className={headerStyle}> {props.card.header}</h3>
          <div id="content" className={contentStyle}>
            <p id="text" className={textStyle}>{props.card.text}</p>
            <img id="img" className={imgStyle} src={props.card.imgUrl}/>
          </div>
        </div>
    );
};

const Cards = (props) => { // { cards: [card, [card]...] }
    const cardsStyle = "col-md-8";
    return (
        <section className={cardsStyle}>
          {props.cards.map(card => <Card card={card}/>)}
        </section>
    );
};

export default Cards;
