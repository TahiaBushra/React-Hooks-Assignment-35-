import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState();
  useEffect(() => {}, []);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default App;
