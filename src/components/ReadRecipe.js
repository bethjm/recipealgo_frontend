import "./ReadRecipe.css";

import RecipeHeader from "./UI/Recipes/RecipeHeader";
import RecipeOther from "./UI/Recipes/RecipeOther";
import RecipeIngredients from "./UI/Recipes/RecipeIngredients";
import RecipeInstructions from "./UI/Recipes/RecipeInstructions";

function ReadRecipe() {
  let listIngredients = 10;

  return (
    <div className="ReadRecipe">
      <h3>Back button place holder</h3>
      <div className="ReadRecipe_Container">
        <div className="recipe_card_container">
          <RecipeHeader />
          <RecipeOther />
          <RecipeIngredients listIngredients={listIngredients} />
          <RecipeInstructions />
        </div>
      </div>
    </div>
  );
}

export default ReadRecipe;
