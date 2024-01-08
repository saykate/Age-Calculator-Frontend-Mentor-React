import Input from "./Input";

export default function Form({ data, errors, handleDataChange }) {
  return (
    <form>
      <Input
        type="number"
        value={data.day}
        name="DAY"
        id="day"
        placeholder="DD"
        onChange={handleDataChange}
        error={errors.day}
      />
      <Input
        type="number"
        value={data.month}
        name="MONTH"
        id="month"
        placeholder="MM"
        onChange={handleDataChange}
        error={errors.month}
      />
      <Input
        type="number"
        value={data.year}
        name="YEAR"
        id="year"
        placeholder="YYYY"
        onChange={handleDataChange}
        error={errors.year}
      />
    </form>
  );
}
