

const MonthNavigation = () => {
const buttons = Array.from({length: 12}, (_, i) => i + 1)

    return (
    <div className="flex flex-row bg-white p-4 rounded-lg shadow-md items-center justify-center gap-4 md:gap-6 grid grid-cols-6">
        {buttons.map((month) => (
        <button key={month} className="border-2 md:border-solid w-20 ">{month}월</button>
        ))}
    </div>
  )
}

export default MonthNavigation