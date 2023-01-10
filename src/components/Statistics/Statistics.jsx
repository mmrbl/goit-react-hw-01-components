import PropTypes from 'prop-types'
import { StaticticsTitle, StatisticsSection } from './Statictics.styled'

export default function Statistics({ title, children }) {
  return <StatisticsSection>
    {title && <StaticticsTitle>{title}</StaticticsTitle>}
    {children}
</StatisticsSection>
}

Statistics.propTypes = {
  title: PropTypes.string,
   stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  )
}


 