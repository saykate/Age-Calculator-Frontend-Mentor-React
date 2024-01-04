import Outputs from "./Outputs";

export default function Display({ data }) {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let birthDay = data.day;
  let birthMonth = data.month;
  let birthYear = data.year;

  let ageDay, ageMonth, ageYear;

  if ((birthDay, birthMonth, birthYear)) {
    if (month > birthMonth || (month === birthMonth && day >= birthDay)) {
      ageYear = year - birthYear;
      ageMonth = month - birthMonth;

      if (day < birthDay) {
        ageMonth -= 1;
        const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
        ageDay = daysInPreviousMonth - (birthDay - day);
      } else {
        ageDay = day - birthDay;
      }
    } else {
      ageYear = year - birthYear - 1;
      ageMonth = 12 + month - birthMonth;

      if (day < birthDay) {
        const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
        ageDay = daysInPreviousMonth - (birthDay - day);
      } else {
        ageDay = day - birthDay;
      }
    }

    console.log(ageDay, ageMonth, ageYear);
  }

  return (
    <div className="display">
      <Outputs text="years" outputs={ageYear} />
      <Outputs text="months" outputs={ageMonth} />
      <Outputs text="days" outputs={ageDay} />
    </div>
  );
}
