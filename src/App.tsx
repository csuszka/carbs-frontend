import React from "react";
import i18n from "i18next";
// import "./i18n";
import "./App.css";
import IngredientSubmitter from "./screens/IngredientSubmitter";
import RecipeCreator from "./screens/RecipeCreator";
import { useTranslation } from "react-i18next";
import UserRegistration from "./screens/UserRegistration";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      {/* <RecipeCreator /> */}
      {/* {t("learn")} */}
      {/* <IngredientSubmitter /> */}
      <UserRegistration />
    </div>
  );
}

export default App;
