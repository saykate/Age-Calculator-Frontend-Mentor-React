import { useEffect, useState } from "react";
import Form from "./Components/Form.jsx";
import Display from "./Components/Display.jsx";

let formEdited = false;

function App() {
  const [data, setData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState({
    day: null, 
    month: null, 
    year: null
  });

  const validateDay = (day, errors) => {
      if (!day) {
        errors.day = "This field is required"
      } else if(day < 1 || day > 31 || day.length > 2) {
        errors.day = "Must be a valid Day"
    } else {
      errors.day = null
    }
  }
  const validateMonth = (month, errors) => {
    if (!month) {
      errors.month = "This field is required"
    } else if(month < 1 || month > 12 || month.length > 2) {
      errors.month = "Must be a valid Month"
    } else {
      errors.month = null
    }
  }
  const validateYear = (year, errors) => {
    const currentYear = new Date().getFullYear();
    if (!year) {
      errors.year = "This field is required"
    } else if(year.length !== 4) {
      errors.year = "Must be a valid Year"
    } else if(year > currentYear) {
      errors.year = "Must be in the past"
    } else {
      errors.year = null
    }
    }

  useEffect(() => {
    if(!formEdited) {
      return
    }
    const validateValues = (data) => {
      let errors = {};
      validateDay(data.day, errors);
      validateMonth(data.month, errors);
      validateYear(data.year, errors);
      return errors;
    }
    setErrors(validateValues(data));
  }, [data])

  function handleDataChange(e) {
    const newData = { ...data, [e.target.id]: e.target.value };
    setData(newData)
    formEdited = true
  }

  return (
    <>
      <div className="card">
        <div className="inputs">
          <Form data={data} errors={errors} handleDataChange={handleDataChange} />
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
