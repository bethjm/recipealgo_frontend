// import "./RecipeIngredients.css";
import React from "react";

function RecipeIngredients({ listIngredients, children }) {
  if (listIngredients === 10) {
    return (
      <div className="RecipeIngredients">
        <div className="RecipeIngredients_Container">
          <ul>
            {React.Children.map(children, (child, index) => (
              <li key={index}>{child}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="RecipeIngredients">
        <div className="RecipeIngredients_Container">
          {React.Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeIngredients;
