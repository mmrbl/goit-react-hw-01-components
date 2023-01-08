import PropTypes from 'prop-types'

export default function Statistics({ title, children }) {
  return <section>
    {title && <h2>{title}</h2>}
    {children}
</section>
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


 