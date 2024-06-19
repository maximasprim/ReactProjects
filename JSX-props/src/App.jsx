import "./App.css";
import Personal from "./components/Personal";
import Placeholder from "./components/Placeholder";

function App() {
  const name = "maximas";
  const moreDetails = {
    age: 21,
    country: "India",
    height: "5.7",
  };
  let islogged = false;
  let langs = ["TypeScript", "Javascript", "C#", "Python"];
  function getTodaysDate() {
    return new Date().toLocaleDateString();
  }
  return (
    <>
      to day is : {getTodaysDate()}
      
      <Placeholder w={600} h={400} />
      {/* <Placeholder w={400} h={200} />
      <Placeholder w={200} h={100} /> */}
      <Personal
        name={name}
        moreDetails={moreDetails}
        islogged={islogged}
        langs={langs}
      />
    </>
  );
}

export default App;
