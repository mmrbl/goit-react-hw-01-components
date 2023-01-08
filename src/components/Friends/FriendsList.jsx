import PropTypes from 'prop-types'
import FriendListItem from "./FriendsListItem"

export default function FriendList({ friends }) {
  return ( <ul>
    {friends.map(item => 
      (
   <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        key={item.id}
        />
     ))}
  </ul>)
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
  PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
)
}
