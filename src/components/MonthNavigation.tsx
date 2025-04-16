type Props = {
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
};

export const MonthNavigation: React.FC<Props> = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <div className="flex flex-wrap justify-start gap-4 p-2">
      <p>Month</p>
      {Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        return (
          <button
            key={i}
            onClick={() => setSelectedMonth(month)}
            className={selectedMonth === month ? "font-bold" : ""}
          >
            {month}
          </button>
        );
      })}
    </div>
  );
};
