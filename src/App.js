import { useState } from "react";
// import styled css
import styled from "styled-components";

// create a header logo and nav bar will be separate components
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </Header>
    </div>
  );
}

export default App;
