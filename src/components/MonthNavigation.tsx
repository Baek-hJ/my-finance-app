const MonthNavigation:React.FC = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4 p-2">
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