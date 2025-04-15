import { useState } from "react";

const MonthNavigation: React.FC = () => {
  const [localSelectedMonth, setLocalSelectedMonth] = useState<number>(1);
  return (
    <div className="flex flex-wrap justify-start gap-4 p-2">
      <p>Month</p>
      {Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        return (
          <button
            key={i}
            onClick={() => setLocalSelectedMonth(month)}
            className={localSelectedMonth === month ? "font-bold" : ""}
          >
            {month}
          </button>
        );
      })}
    </div>
  );
};

export default MonthNavigation;
