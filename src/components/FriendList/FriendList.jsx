import { FriendListItem } from '../FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export function FriendList({ array }) {
  return (
    <ul className={css['friend-list']}>
      {array.map(el => {
        return (
          <FriendListItem
            key={el.id}
            id={el.id}
            isOnline={el.isOnline}
            avatar={el.avatar}
            name={el.name}
          />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
