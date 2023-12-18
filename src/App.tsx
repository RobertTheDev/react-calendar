import { eachDayOfInterval, endOfMonth, getDate, startOfMonth } from "date-fns";
import "./App.css";

function App() {
  // Get the start date of the current month.
  const startDate = startOfMonth(new Date());

  // Get the end date of the current month.
  const endDate = endOfMonth(new Date());

  // Generate an array of dates for the entire month.
  const datesOfMonth = eachDayOfInterval({ start: startDate, end: endDate });

  // Get the day numbers for the current month.
  const dayNumbers = datesOfMonth.map((date) => getDate(date));

  return (
    <div>
      {/* Display an array of day numbers for the current month. */}
      <p>{JSON.stringify(dayNumbers)}</p>
    </div>
  );
}

export default App;
