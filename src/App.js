import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
      </Greet>
      <Greet name="Stark" heroName="Iron Man"/>
      <Greet name="Diana" heroName="Wonder Women"/>
      <Welcome name="Bruce Weine" heroName="BatMan">
        <p>I'm Super man</p>
      </Welcome>
      <Welcome name="Stark" heroName="IronMan">
        <p>I'm Iron Man</p>
      </Welcome>
    </div>
  );
}

export default App;
