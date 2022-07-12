function DeleteButton({id, onCardDelete}) {
  function handleDeleteClick() {
    onCardDelete(id);
  }

  return(
    <button onClick={handleDeleteClick} className="button button_type_delete" type="button" aria-label="Удалить карточку"></button>
  )
}

export default DeleteButton;