import React from "react";
import i18n from "i18next";
// import "./i18n";
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
