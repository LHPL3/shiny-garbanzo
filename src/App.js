import './App.css';
import firebase from './firebase';

function App() {
  const handleClick = () => {
    const itemsRef = firebase.database().ref('group1');
    const items = {
      username: 'steve',
      position: 2
    };
    itemsRef.push(items);
  };
  return (
    <div className="App">
      <button onClick={() => handleClick()}></button>
    </div>
  );
}

export default App;
