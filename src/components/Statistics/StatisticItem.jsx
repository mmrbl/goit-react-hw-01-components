import PropTypes from 'prop-types'

export default function StatisticItem({ stats }) {
  return <ul>
        {stats.map(({ id, label, percentage }) => {
        return <li key={id}>
        <span>{label}</span>
        <span>{percentage}%</span>
        </li>
  })}
  </ul>
  
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