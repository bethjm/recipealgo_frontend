import "./ListOfRecipes.css";

import RecipeCard from "./UI/Recipes/RecipeCard";

function ListOfRecipes() {
  return (
    <div className="ListOfRecipes">
      <div className="ListOfRecipes_Container">
        <h1>Recipes based on your search</h1>
        <div className="cards_container">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}

export default ListOfRecipes;
