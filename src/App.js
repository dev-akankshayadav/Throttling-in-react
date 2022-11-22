import "./App.css";
import React, {useState, useEffect} from "react";
// import throttle from "lodash.throttle";   ........... checking the edge cases with this package

function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const myThrottle = (fn, d) => {
    let bool = false;
    return () => {
      if (bool) {
        return;
      }
      bool = true;
      setTimeout(() => {
        fn();
        bool = false;
      }, d);
    };
  };

  const onScroll = myThrottle(() => {
    setCountTwo((prevState) => prevState + 1);
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCountOne((prevState) => prevState + 1);
      onScroll();
    });
     return () => {
      window.removeEventListener("scroll", () => {
        onScroll();
      });
    }; // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Scroll to view counts on throttle</h1>
      <div className="para-container">
        <div className="para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="para1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="para1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div  className="scroll-counts">
        <h2>Scroll event without throttle: <span style={{color:"green"}}>{countOne}</span></h2>
        <h2>Scroll event with throttle: <span style={{color:"green"}}>{countTwo}</span></h2>
      </div>
    </div>
  );
}

export default App;
