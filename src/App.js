import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import QuizPage from "./components/QuizPage";
import ListOfRecipes from "./components/ListOfRecipes";
import ReadRecipe from "./components/ReadRecipe";
import LandingPage from "./components/LandingPage";
import Dummy_Data from "./components/Dummy_Data";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api")
      // [Error: Network response was not ok] means successfully talked to the database and the database is saying no
      // [TypeError: Network request failed] means it did not successfully talk to the database.
      .then((response) => {
        if (!response.ok) {
          throw new Error("The Network response is not ok and neither am I");
        }
        return response.json();
      })
      .then((recipes) => {
        console.log("Ye recipes been fetched:", recipes);
        setRecipes(recipes);
      })
      .catch((error) => {
        console.error("There be an Error fetching data: ", error);
      });
  }, []);

  console.log("recipes from APP", recipes);

  // if (recipes.length <= 0) {
  //   console.log("loading");
  //   return (
  //     <div>
  //       <h1>loading</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="App" id="App">
      <Router>
        <nav>
          {/* // have this only render if not on quiz page */}
          {/* if on quiz page do not show nav bar to quiz page */}
          <Link to="/">Quiz</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage recipes={recipes} />} />
          <Route path="/recipes" element={<ListOfRecipes />} />
          <Route path="/readrecipe/" element={<ReadRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
