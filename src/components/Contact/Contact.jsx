import css from './Contact.module.css'
import icons from '../icons/icons.svg'
const Contact = ({ contact, onDeleteContact }) => {
    
    const handleDeleteClick = () => {
    onDeleteContact(contact.id)
}
  return (
      <div className={css.contactWrapper}>
          <div>
              <svg className={css.icon} width={30} height={30}>
      <use href={`${icons}#iconUser`}></use>
    </svg>
    <svg className={css.icon} width={30} height={30}> 
      <use href={`${icons}#iconPhone`}></use>
    </svg>
          </div>
          <div>
             
              <p>{contact.name}</p>
              <p>{contact.number}</p>
          </div>
          <button className={css.deleteBtn}type="button" onClick ={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default Contact
