const CustomToolTip: React.FC = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p>{payload[0].value + 'kg'}</p>
        <p>{payload[1].value + 'Kcal'}</p>
      </div>
    )
  }
  return null
}

export default CustomToolTip
