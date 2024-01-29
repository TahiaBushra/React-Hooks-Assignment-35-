// purposeful updating phase
import { useState } from "react";
const App = () => {
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState(false);
  const handleFullName = () => {
    setFullName("Mimi");
  };
  const handleError = () => {
    setError(true);
  };
  if (!error) {
    return (
      <div>
        <p>Assalamualaikum, {fullName}.</p>
        <button onClick={handleFullName}>Popup Name</button>
        <button onClick={handleError}>Create Error</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>An Error Occured, Please Refresh The Page.</p>
      </div>
    );
  }
};

export default App;
