// import "./RecipeIngredients.css";

function RecipeIngredients({ listIngredients }) {
  if (listIngredients == 10) {
    return (
      <div className="RecipeIngredients">
        <div className="RecipeIngredients_Container">
          <ul>
            <li>Mushroom</li>
            <li>Chickpeas</li>
            <li>Beans</li>
            <li>Kidney beans</li>
            <li>Lima beans</li>
            <li>Edamame</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="RecipeIngredients">
        <div className="RecipeIngredients_Container">
          <h3>Mushroom, Chickpeas,Beans, Kidney beans, Lima beans, Edemame</h3>
        </div>
      </div>
    );
  }
  // add conditional rendering here
  //if card render list on one line
  //id readrecipe, render in list
}

export default RecipeIngredients;
