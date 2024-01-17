// import "./RecipeOther.css";

function RecipeOther({ children }) {
  // hook up restful routes
  return (
    <div className="RecipeOther">
      <div className="RecipeOther_Container">
        <h3>{children}</h3>
      </div>
    </div>
  );
}

export default RecipeOther;
