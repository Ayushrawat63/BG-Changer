import { useEffect, useState } from "react";
import styled from "styled-components";
import ColorData from "./ColorData";
import ColorCard from "./ColorCard";

const App = () => {
  const [color, setColor] = useState("red");
  useEffect(() => {
    document.body.style.backgroundColor = color;
    console.log(color);
  }, [color]);
  return (
    <>
      <ColorSection>
        {ColorData.map((data, index) => {
          return <ColorCard Key={index} Color={data} pass={setColor} />;
        })}
      </ColorSection>
    </>
  );
};

const ColorSection = styled.div`
  width: 90px;
  height: 600px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
  background-color: white;
  margin: 4% 0 0 5%;
`;

export default App;
