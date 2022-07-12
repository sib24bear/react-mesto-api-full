import Profile from './Profile';
import Gallery from './Gallery';

function Main(props) {
  
  return (
    <main className="content">
      <Profile
        onEditProfile={props.onEditProfile}
        onAddPlace={props.onAddPlace}
        onEditAvatar={props.onEditAvatar} 
      />
      <Gallery
        cardsData={props.cardsData}
        onCardClick={props.onCardClick}
        onCardDelete={props.onCardDelete}
        onCardLike={props.onCardLike}
      />
    </main>
  );
}

export default Main;