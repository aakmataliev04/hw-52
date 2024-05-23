import './App.css';
import Card from "./components/Card/Card.tsx";

const App = () => {
  return (
      <>
          <div className="playingCards faceImages">
              <Card rank={'k'} suit={'diams'}/>
              <Card rank={'k'} suit={'hearts'}/>
              <Card rank={'k'} suit={'clubs'}/>
              <Card rank={'k'} suit={'spades'}/>
          </div>
      </>

  );
};


export default App;
