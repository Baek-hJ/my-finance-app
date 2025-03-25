import React from 'react'

const MonthNavigation = () => {
const buttons = Array.from({length: 12}, (_, i) => i + 1)

    return (
    <div>
        {buttons.map((month) => (
        <button key={month}>{month}월</button>
        ))}
    </div>
  )
}

export default MonthNavigation