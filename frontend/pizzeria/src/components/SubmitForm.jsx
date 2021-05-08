import React from "react";
import useForm from "./useForm";
import SubmitFormSuccess from "./SubmitFormSuccess";

function SubmitForm({ shownSub, setShownSub }) {
  const {
    handleChange,
    handleFormSubmit,
    submitted,
    values,
    errors,
  } = useForm();

  return (
    <div>
      {shownSub && !submitted ? (
        <div className="success Sub">
          <div className="container">
            <h1>Reservation</h1>
            <form action="" className="formSub">
              <div>
                <p>Name</p>
                <input
                  id="name"
                  placeholder="Name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div>
                <p>Email address</p>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && (
                  <span error className="error">
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <p>Date</p>
                <input
                  id="date"
                  type="date"
                  name="date"
                  onChange={handleChange}
                  value={values.date}
                />
                {errors.date && (
                  <span error className="error">
                    {errors.date}
                  </span>
                )}
              </div>
              <div>
                <p>Time</p>
                <input
                  id="time"
                  type="time"
                  name="time"
                  min="10:00"
                  max="22:00"
                  onChange={handleChange}
                  value={values.time}
                />
                {errors.time && <span className="error">{errors.time}</span>}
              </div>
              <div>
                <p>Guest number</p>
                <input
                  id="number"
                  type="number"
                  name="number"
                  min="0"
                  placeholder="Scroll a number"
                  required
                  onChange={handleChange}
                  value={values.number}
                />
                {errors.number && (
                  <span error className="error">
                    {errors.number}
                  </span>
                )}
              </div>
            </form>
            <div className="btn btnSub">
              <button type="reset" onClick={() => setShownSub(!shownSub)}>
                cancel
              </button>
              <button
                type="submit"
                disabled={submitted}
                onClick={handleFormSubmit}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SubmitFormSuccess values={values} />
      )}
    </div>
  );
}

export default SubmitForm;
