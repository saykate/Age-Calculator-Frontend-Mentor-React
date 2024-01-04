import { useState } from "react";
import Form from "./Components/Form.jsx";
import Display from "./Components/Display.jsx";

function App() {
  const [data, setData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState({});

  const validateValues = (data) => {
    let errors = {};
    if(data.day < 0 || data.day > 31 || data.day.length > 2 || !data.day) {
        errors.day = "Not a valid Day"
    }
    if(data.month < 0 || data.month > 12 || data.month.length > 2 || !data.month) {
        errors.month = "Not a valid Month"
    }
    const currentYear = new Date().getFullYear()
    if(data.year.length !== 4 || data.year > currentYear || !data.year) {
      errors.year = "Not a valid Year"
  }
  return errors;
  }

  function handleDataChange(e) {
    const newData = { ...data, [e.target.id]: e.target.value };
    setData(newData)
  }

  function handleErrors(e) {
    e.preventDefault();
    setErrors(validateValues(data));
  }

  return (
    <>
      <div className="card">
        <div className="inputs">
          <Form data={data} errors={errors} handleDataChange={handleDataChange} handleErrors={handleErrors} />
        </div>
        <hr />
        <img className="arrow" src="./src/assets/arrow.svg" alt="" />
        <Display data={data} />
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        Coded by <a href="#">Katie Sayers</a>
      </div>
    </>
  );
}

export default App;
