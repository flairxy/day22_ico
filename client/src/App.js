import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import drizzleOptions from "./drizzleOptions";
import LoadingComponent from "./loadingComponent";
import ICOInfo from "./ICOInfo";
import Investor from "./Investor";
import Admin from "./Admin";


const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => {
  return (
    <div className="container">
      <h1>ICO</h1>
      <DrizzleProvider drizzle={drizzle}>
        <LoadingComponent>
          <ICOInfo />
          <Investor />
          <Admin />
        </LoadingComponent>
      </DrizzleProvider>
    </div>
  );
};

export default App;
