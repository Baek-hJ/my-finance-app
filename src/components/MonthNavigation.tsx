type Props = {
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
};

export const MonthNavigation: React.FC<Props> = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <div>
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
