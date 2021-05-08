import { useState, useEffect } from "react";
import validation from "./validation";

function useForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    number: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);

    //backend post

    fetch(`http://localhost:8000/api/booking`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        date: values.date,
        time: values.time,
        number: values.number,
      }),
    })
      .then((response) => response.json())
      .then((response) => setText(true))
      .catch((err) => {
        console.log(err);
      });
    console.log("sent to backend");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setSubmitted(true);
    }
  }, [errors]);

  return {
    handleChange,
    handleFormSubmit,
    errors,
    values,
    submitted,
    setSubmitted,
    dataIsCorrect,
    setDataIsCorrect,
  };
}

export default useForm;
