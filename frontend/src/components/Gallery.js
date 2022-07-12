import Card from './Card';
import { useContext } from 'react';
import { CardsContext } from '../contexts/CardsContext';

function Gallery(props) {
  const {cardsData} = useContext(CardsContext);
  if (cardsData !== null) {
    return (
      <section className="gallery">
        <ul className="gallery__list">
          {
            cardsData.map((card) => {
              return (
                <Card
                  key={card._id}
                  {...card}
                  onCardClick={props.onCardClick}
                  onCardDelete={props.onCardDelete}
                  onCardLike={props.onCardLike}
                />)
            })
          }
        </ul>
      </section>
    );
  }
  else {
    return (
      <section className="gallery">
        <ul className="gallery__list"></ul>
      </section>
    );
  }
}

export default Gallery;