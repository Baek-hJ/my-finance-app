const MonthNavigation:React.FC = () => {
  return (
    <div className="grid grid-flow-row auto-rows-max">
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