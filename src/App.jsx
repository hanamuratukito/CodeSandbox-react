import React, { useState } from "react";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  const contentStyle = {
    color: `blue`,
    fontSize: `18px`
  };
  return (
    <React.Fragment>
      <h1 style={{ color: `red` }}>こんには！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>カウントアップ</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

export default App;
