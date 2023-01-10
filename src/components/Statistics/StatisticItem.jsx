import { getRandomHexColor } from 'components/utils/getRandomHexColor';
import PropTypes from 'prop-types';
import { StaticticsItem, StaticticsItemLabel, StaticticsItemPercentage, StaticticsList } from './Statictics.styled';

export default function StatisticItem({ stats }) {
  return <StaticticsList>
        {stats.map(({ id, label, percentage }) => {
        return <StaticticsItem key={id} bgc = {getRandomHexColor()} >
        <StaticticsItemLabel>{label}</StaticticsItemLabel>
        <StaticticsItemPercentage>{percentage}%</StaticticsItemPercentage>
        </StaticticsItem>
  })}
  </StaticticsList>
  
}

StatisticItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}