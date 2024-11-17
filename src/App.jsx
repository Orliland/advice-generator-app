import "./App.css";

import IconDice from "./assets/icon-dice.svg";
import DividerDesktop from "./assets/pattern-divider-desktop.svg";
import DividerMobile from "./assets/pattern-divider-mobile.svg";

function App() {
  return (
    <div className="advice">
      <div className="advice__body">
        <h1 className="advice__heading heading">ADVICE #117</h1>
        <p className="advice__quote quote">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>

        <picture>
          <source srcSet={DividerDesktop} media="(min-width: 572px)" />
          <img src={DividerMobile} alt="divider element" />
        </picture>
      </div>
      <button className="advice__button">
        <img src={IconDice} alt="Generate new advice" />
      </button>
    </div>
  );
}

export default App;
