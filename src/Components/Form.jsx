import Inputs from "./Inputs";

export default function Form({ data, errors, handleDataChange, handleErrors }) {
  return (
    <form onChange={handleErrors}>
      <Inputs
        type="number"
        value={data.day}
        name="DAY"
        id="day"
        placeholder="DD"
        onChange={handleDataChange}
        errorText="Day should be from 1 - 31"
      />
      <Inputs
        type="number"
        value={data.month}
        name="MONTH"
        id="month"
        placeholder="MM"
        onChange={handleDataChange}
        errorText="Month should be between 1 - 12"
      />
      <Inputs
        type="number"
        value={data.year}
        name="YEAR"
        id="year"
        placeholder="YYYY"
        onChange={handleDataChange}
        errorText="Year should be in the past and 4 digits"
      />
    </form>
  );
}
