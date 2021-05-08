import React from "react";

function Menu({ foods }) {
  return (
    <div className="menu-container">
      <div className="menu-btn">
        <h3 id="menuTitle">
          <a id="menu">menu</a>
        </h3>
        <hr />
      </div>
      <div className="antipasti">
        <h3>
          <a href="antipasti">antipasti</a>
        </h3>
        <div className="antipasti items">
          {foods
            ? foods[0].antipasti.map((item) => (
                <div key={item.id} className="food-item">
                  <p>{item.name}</p>
                  <span>{item.description}</span>
                  <p>{item.price}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <hr />
      <div>
        <h3>
          <a href="pizze-rosse">pizze rosse</a>
        </h3>
        <div className="pizze-rosse items">
          {foods
            ? foods[0].pizzeRosse.map((item) => (
                <div key={item.id} className="food-item">
                  <p>{item.name}</p>
                  <span>{item.description}</span>
                  <p>{item.price}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <hr />
      <div>
        <h3>
          <a href="pizze-bianche"> pizze bianche</a>
        </h3>
        <div className="pizze-bianche items">
          {foods
            ? foods[0].pizzeBianche.map((item) => (
                <div key={item.id} className="food-item">
                  <p>{item.name}</p>
                  <span>{item.description}</span>
                  <p>{item.price}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <hr />
      <div>
        <h3>
          <a href="dessert">dessert</a>
        </h3>
        <div className="dessert items">
          {foods
            ? foods[0].dessert.map((item) => (
                <div key={item.id} className="food-item">
                  <p>{item.name}</p>
                  <span>{item.description}</span>
                  <p>{item.price}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}

export default Menu;
