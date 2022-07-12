import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';
import * as Auth from '../utils/Auth';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cardsData, setCardsData] = useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [isRegisterDataValid, setIsRegisterDataValid] = useState(false);
  const [selectedCard, setSelectedCard] = 
  useState({
    title: '',
    link: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const history = useHistory();

  function handleCardDelete(id) {
    api.deleteUserCard(id)
      .then((data) => {
        setCardsData((prevCardsData) => prevCardsData.filter(card => card._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleCardLike(likes, id) {
    const isLiked = likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.deleteLikeCard(id)
        .then((newCard) => {
          setCardsData((state) => state.map((c) => c._id === id ? newCard : c));
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api.putLikeCard(id)
        .then((newCard) => {
          setCardsData((state) => state.map((c) => c._id === id ? newCard : c));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser(name, about) {
    api.setUserInfo(name, about)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAddPlace(name, link) {
    api.setNewUserCard(name, link)
      .then((newCard) => {
        setCardsData([newCard, ...cardsData]);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleUpdateAvatar(link) {
    api.setUserAvatar(link)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  function showCardClick(name, link) {
    setSelectedCard({
      title: name,
      link: link
    });
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsImagePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsTooltipPopupOpen(false);
  }

  function getUserData() {
    api.getUserInfo()
    .then(res => {
      setCurrentUser(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  function getCardsData() {
    api.getInitialCards()
    .then(res => {
      setCardsData(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  function openInfoTooltip(res) {
    res ? setIsRegisterDataValid(true) : setIsRegisterDataValid(false);
    setIsTooltipPopupOpen(true);
  }

  function handleLogin({ email, password }) {
    return Auth.authorize(email, password)
        .then((data) => {
          if (data.token) {
            localStorage.setItem('jwt', data.token);
            tokenCheck();
          }
        })
        .catch(err => {
          console.log(err);
        });
  }

  function handleRegister({ password, email }) {
    return Auth.register(password, email).then((res) => {
      if (res.ok) {
        openInfoTooltip(res.ok);
        return res.json();
      }
      
      openInfoTooltip(res.ok);
      return res.json()
          .then((data) => {
            throw new Error(data.error);
          });
    }).then((res) => {
      history.push('/sign-in');
    })
    .catch(err => {
      console.log(err);
    });
  }

  function tokenCheck() {
    if (localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      Auth.getContent(jwt).then((res) => {
        if (res){
          setLoggedIn(true);
          setUserEmail(res.data.email);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setUserEmail('');
    history.push('/sign-in');
  }

  useEffect(() => {
    getUserData();
    getCardsData();
    tokenCheck();
  }, []);

  useEffect(() => {
      if (loggedIn) {
          history.push("/");
      }
  }, [loggedIn]);

  return (
    <div className="page">
      <Switch>
        <ProtectedRoute path="/" exact loggedIn={loggedIn}>
          <Header 
            linkText={'Выйти'}
            email={userEmail}
            handleClick={signOut}
            linkTo={'/sign-in'}
          />
          <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
            <CardsContext.Provider value={{cardsData, setCardsData}}>
              <Main
                onCardDelete={handleCardDelete}
                onCardLike={handleCardLike}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={showCardClick}
              />
              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />
              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlace}
              />
              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />
              <ImagePopup
                isOpen={isImagePopupOpen}
                onClose={closeAllPopups}
                popupType={'image-popup'}
                {...selectedCard}
              />
            </CardsContext.Provider>
          </CurrentUserContext.Provider>
          <Footer />
        </ProtectedRoute>
        <Route path="/sign-in">
          <Header 
            linkText={'Регистрация'}
            email={''}
            linkTo={'/sign-up'}
          />
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/sign-up">
          <Header 
            linkText={'Войти'}
            email={''}
            linkTo={'/sign-in'}
          />
          <Register handleRegister={handleRegister} />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
        </Route>  
      </Switch>
      <InfoTooltip
        isOpen={isTooltipPopupOpen}
        onClose={closeAllPopups}
        res={isRegisterDataValid}
      />
    </div>
  );
}

export default App;
