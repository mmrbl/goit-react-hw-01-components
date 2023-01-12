import PropTypes from "prop-types"
import defaultPerson from '../utils/defaultPerson.png'
import { FriendAvatar, FriendItem, FriendName, FriendStatus } from "./Friends.styled"

export default function FriendListItem({ avatar = defaultPerson, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus bgc={isOnline ? "green" : "red"} >{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}