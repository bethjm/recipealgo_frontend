import "./RecipeHeader.css";

function RecipeHeader({ children }) {
  return (
    <div className="RecipeHeader">
      <div className="RecipeHeader_Container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default RecipeHeader;
