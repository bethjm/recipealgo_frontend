import "./RecipeCard.css";

import RecipeHeader from "./RecipeHeader";
import RecipeIngredients from "./RecipeIngredients";
import RecipeOther from "./RecipeOther";

function RecipeCard() {
  return (
    <div className="RecipeCard">
      <div className="RecipeCard_Container">
        <RecipeHeader>holding</RecipeHeader>
        <RecipeOther>holding</RecipeOther>
        <RecipeIngredients>holding</RecipeIngredients>
      </div>
    </div>
  );
}

export default RecipeCard;
