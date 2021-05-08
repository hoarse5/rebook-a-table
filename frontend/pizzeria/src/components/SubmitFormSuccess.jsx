import React, { useState } from "react";

function SubmitFormSuccess({ values }) {
  const [shown, setShown] = useState(true);
  return (
    <div className="success-container">
      {shown ? (
        <div className="success">
          <h1>Confirmation</h1>
          <p>You booked a table with the following data:</p>
          <hr />
          <p>
            Name: <span>{values.name}</span>
          </p>
          <p>
            Email: <span>{values.email}</span>
          </p>
          <p>
            Date: <span>{values.date}</span>{" "}
          </p>
          <p>
            Time: <span>{values.time}</span>
          </p>
          <p>
            Guest number: <span>{values.number}</span>
          </p>
          <hr />
          <p id="goodbye">
            Thank you, <span>{values.name.toUpperCase()} </span>and see you on{" "}
            {values.date}!
          </p>
          <div className="btn">
            <button type="submit" id="btnSub" onClick={() => setShown(false)}>
              close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SubmitFormSuccess;
