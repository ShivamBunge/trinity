import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className="persons_box">
      <figure className="persons_card_img_box">
        <img src={props.imgurl} className="persons_card_img" />
        <figcaption className="h2 persons_card_img_caption">{props.name}</figcaption>
      </figure>
      <ul>
        <li className="person_card_about">{props.c1}</li>
        <li className="person_card_about">{props.c2}</li>
        <li className="person_card_about">{props.c3}</li>
      </ul>
    </div>
  )
}

export default Card;
