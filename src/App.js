import './App.css';
import pic from './images/skull.jpg';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <img src={pic} alt={logo} />
      <h1>Anthony Arinze</h1>
      <h2>Frontend Developer</h2>
      <h3>anthonyarinze.website</h3>
      <span>
        <i class="fa fa-envelope">Email</i>
        <i class="fa fa-linkedin">LinkedIn</i>
      </span>
      <p>About</p>
      <span className="about">I am a frontend engineer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</span>
      <p>Interests</p>
      <span className="about">Food expert. Music scholar. Reader. Internet fanatic. Travel geek. Pop culture ninja. Coffee fanatic.</span>
      <footer>
        <span> <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-github"></a></span>
      </footer>
    </div>
  );
}

export default App;
