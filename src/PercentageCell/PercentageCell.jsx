function PercentageCell({ value, className }) {
  // Function to determine background color based on the value
  const getBackgroundColor = (val) => {
    if (val === 100) return '#4CAF50' // Green for 100
    if (val > 0) return '#f4d47c' // Default color for values > 0
    return '#FF4136' // Red for 0
  }

  // Ensure value is a number
  const numericValue = typeof value === 'number' ? value : Number(value)

  // Inline CSS styles
  const style = {
    backgroundColor: getBackgroundColor(numericValue),
    display: 'flex',
    alignItems: 'center', // Vertically center content
    justifyContent: 'center', // Horizontally center content
    height: '80%',
    width: '100%',
    fontWeight: 'bold',
    borderRadius: '4px',
    textAlign: 'center',
  }

  return (
    <div className={className} style={style}>
      {typeof numericValue === 'number' ? `${numericValue}%` : 'N/A'}
    </div>
  )
}

export default PercentageCell
