// import "./RecipeInstructions.css";

function RecipeInstructions({ children }) {
  // hook up restful routes
  return (
    <div className="RecipeInstructions">
      <div className="RecipeInstructions_Container">
        <ul>
          <li>{children}</li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeInstructions;
