const MonthNavigation:React.FC = () => {
  return (
    <div>
      {Array.from({ length : 12}, (_,i) => ( 
      <button key={i}>
        {i+1}월
      </button>
    ))}
    </div>
  )
}

export default MonthNavigation