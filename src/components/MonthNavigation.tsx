

const MonthNavigation = () => {
const buttons = Array.from({length: 12}, (_, i) => i + 1)

    return (
    <div className="flex flex-row bg-white p-4 rounded-lg shadow-md items-center justify-center gap-4 md:gap-6 bor">
        {buttons.map((month) => (
        <button key={month}>{month}월</button>
        ))}
    </div>
  )
}

export default MonthNavigation