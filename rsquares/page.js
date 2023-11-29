const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


const NUM_OF_SQUARES = 6;

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
}

function App() {
  const [squaresClick, setSquaresClicked] = useState([]);
  const setSomething = (index) => {
    if (squaresClick.length === NUM_OF_SQUARES || squaresClick.includes(index))
      return;
    setSquaresClicked([...squaresClick].concat(index));
  };

  useEffect(() => {
    const removeInSequence = async (currentArray) => {
      if (currentArray.length === 0) {
        return;
      }
      const indexToRemove = currentArray.length - 1;
      const newArray = [
        ...currentArray.slice(0, indexToRemove),
        ...currentArray.slice(indexToRemove + 1)
      ];
      await delay();
      setSquaresClicked(newArray);

      removeInSequence(newArray);
    };

    if (squaresClick.length === NUM_OF_SQUARES) {
      removeInSequence(squaresClick);
    }
  }, [squaresClick]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {[...Array(NUM_OF_SQUARES)].map((_, index) => (
        <Square
          key={index}
          index={index}
          backgroundColor={squaresClick.includes(index) ? "green" : "white"}
          setSomething={setSomething}
        />
      ))}
    </div>
  );
}

function Square({ index, backgroundColor, setSomething }) {
  return (
    <div
      onClick={() => setSomething(index)}
      style={{
        backgroundColor,
        width: "50px",
        height: "50px",
        border: "1px solid black"
      }}
    />
  );
}

root.render(
  <>
    <App />
  </>
);
