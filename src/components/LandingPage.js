import "./LandingPage.css";

import PrimaryButton from "./UI/Buttons/PrimaryButton";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPage_Container">
        <h1>Welcome to ingredient IQ</h1>
        <h3>Press continue button to find recipes</h3>
        <PrimaryButton />
      </div>
    </div>
  );
}

export default LandingPage;
