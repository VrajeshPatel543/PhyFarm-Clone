
import './App.css';
import back2 from './assets/back2.jpg';
import favicon from './assets/favicon.png';
import feature1 from './assets/feature1.jpg';
import feature2 from './assets/feature2.jpg';
import feature3 from './assets/feature3.jpg';
import feature4 from './assets/feature4.jpg';
import login from './assets/login.png';
import logo from './assets/logo.png';
import mainBack from './assets/main-back.gif';
import s1 from './assets/s1.jpg';
import s2 from './assets/s2.jpg';
import s3 from './assets/s3.jpg';
import s4 from './assets/s4.jpg';
import HomePage from './components/HomePage';

 
function App() {

  return (
    <div className="App">
     
      <HomePage
        back2={back2}
        favicon={favicon}
        feature1 = {feature1}
        feature2={feature2}
        feature3={feature3}
        feature4={feature4}
        login={login}
        logo={logo}
        mainBack={mainBack}
        s1={s1}
        s2={s2}
        s3={s3}
        s4={s4}

      />

    </div>
  );
}

export default App;
