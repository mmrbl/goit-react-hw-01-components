import PropTypes from 'prop-types';
import defaultPerson from '../utils/defaultPerson.png';
import { Profile, ProfileAvatar, ProfileDescription, ProfileLocation, ProfileName, ProfileStats, ProfileStatsItem, ProfileStatsLabel, ProfileStatsQuantity, ProfileTag } from './Usercard.styled';

export default function Usercard({ username, tag, location, avatar = defaultPerson, stats }) {
  return (
    <Profile>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt={username} className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <ProfileStatsItem>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
        </ProfileStatsItem>
      </ProfileStats>
    </Profile>
  );
}


Usercard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}