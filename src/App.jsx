import { useQuery } from "react-query";
import "./App.css";

import IconDice from "./assets/icon-dice.svg";
import DividerDesktop from "./assets/pattern-divider-desktop.svg";
import DividerMobile from "./assets/pattern-divider-mobile.svg";

function App() {
  const { data, isLoading, refetch } = useQuery("advice", async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    return res.json();
  });

  if (isLoading) {
    return (
      <div className="spin">
        <img src={IconDice} alt="loading new advice" />
      </div>
    );
  }

  return (
    <div className="advice">
      <div className="advice__body">
        <h1 className="advice__heading heading">ADVICE #{data.slip.id}</h1>
        <p className="advice__quote quote">{data.slip.advice}</p>

        <picture>
          <source srcSet={DividerDesktop} media="(min-width: 572px)" />
          <img src={DividerMobile} alt="divider element" />
        </picture>
      </div>
      <button className="advice__button" onClick={() => refetch()}>
        <img src={IconDice} alt="Generate new advice" />
      </button>
    </div>
  );
}

export default App;
