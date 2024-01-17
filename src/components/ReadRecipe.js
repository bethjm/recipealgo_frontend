import "./ReadRecipe.css";

import RecipeHeader from "./UI/Recipes/RecipeHeader";
import RecipeOther from "./UI/Recipes/RecipeOther";
import RecipeIngredients from "./UI/Recipes/RecipeIngredients";
import RecipeInstructions from "./UI/Recipes/RecipeInstructions";
import PrimaryButton from "./UI/Buttons/PrimaryButton";

function ReadRecipe() {
  let listIngredients = 10;

  return (
    <div className="ReadRecipe">
      <div className="ReadRecipe_Container">
        <div className="recipe_card_container">
          <RecipeHeader />
          <RecipeOther />
          <RecipeIngredients listIngredients={listIngredients} />
          <RecipeInstructions />
        </div>
      </div>
      <PrimaryButton id="for_mobile" />
    </div>
  );
}

export default ReadRecipe;
