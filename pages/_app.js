import '../styles/globals.css'
import CountDownTimer from './components/CountDownTimer';

function App() {

  const hoursMinSecs = {hours:0, minutes: 0, seconds: 20}
  
  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default App;
