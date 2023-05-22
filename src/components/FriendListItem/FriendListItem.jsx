import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';
export function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className={css.item}>
      <span className={clsx(css.geometry, isOnline ? css.red : css.green)}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
