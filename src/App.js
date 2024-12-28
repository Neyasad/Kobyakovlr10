import './App.css';
import Wish from './components/Wish/Wish';
import img1 from './images/f3.png'
import img2 from './images/f4.png'
import img3 from './images/f5.png'

function App() {
  return (
    <div className="wish">
      <h2 className="mid11">Что Вам необходимо?</h2>
      <div className="mid12">
        <Wish title="Первый блок" img={img1} sign="."/>
        <Wish title="Второй блок" img={img2} sign="?"/>
        <Wish title="Третий блок" img={img3} sign="!"/>
      </div>
      
    </div>
  );
}

export default App;
