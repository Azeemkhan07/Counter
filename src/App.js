import { React, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%"
      }}
    >
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh"
        }}
      >
        {count}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "10px",
            backgroundColor: "green",
            borderRadius: "2%",
            color: "white"
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "10px",
            backgroundColor: "red",
            borderRadius: "2%",
            color: "white"
          }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
