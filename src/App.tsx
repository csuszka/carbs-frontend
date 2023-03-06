import React from "react";
import "./App.css";
import IngredientSubmitter from "./screens/IngredientSubmitter";
import RecipeCreator from "./screens/RecipeCreator";

function App() {
  return (
    <div className="App">
      {/* <RecipeCreator /> */}
      <IngredientSubmitter />
    </div>
  );
}

export default App;
