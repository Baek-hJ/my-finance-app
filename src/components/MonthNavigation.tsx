

const MonthNavigation = () => {
const buttons = Array.from({length: 12}, (_, i) => i + 1)

    return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 bg-white p-4 rounded-xl shadow-md">
        {buttons.map((month) => (
        <button key={month} className="bg-slate-100 hover:bg-indigo-200 hover:border-2 border-indigo-300 hover:cursor-pointer w-full h-12 text-center rounded-lg">{month}월</button>
        ))}
    </div>
  )
}

export default MonthNavigation