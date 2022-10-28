import PropTypes from 'prop-types';
import { ContactNeme, DeleteButton, Item } from './ContactElem.styled';

export const ContactElem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      <ContactNeme>
        {name}: {number}
      </ContactNeme>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
