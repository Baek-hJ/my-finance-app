const MonthNavigation:React.FC = () => {
  return (
    <div>
      <p>Month</p>
      {Array.from({ length : 12}, (_,i) => ( 
      <button key={i}>
        {i+1}
      </button>
    ))}
    </div>
  )
}

export default MonthNavigation