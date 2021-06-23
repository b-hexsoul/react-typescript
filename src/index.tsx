import ReactDOM from 'react-dom';
import GuestList from './state-mini-app/GuestList';


const App = () => {
  return (
    <div>
      <GuestList/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
