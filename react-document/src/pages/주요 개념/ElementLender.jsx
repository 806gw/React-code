import ReactDOM from "react-dom";

const ElementLender = () => {
  {
    /*  example 1
    const element = <p>Hello, world</p>;

    const root = ReactDOM.createRoot(
     document.getElementById("root")
     );
     const rootElement = <p>This is rendering root.</p>;
     root.render(rootElement);

     return (
        <div id="root"></div>
     ); 

     // This is rendering root.
*/
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));

  function tick() {
    // example 2
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);
  }
  setInterval(tick, 1000);

  return (
    <>
      <div className="example">{tick()}</div>
    </>
  );
};
export default ElementLender;
