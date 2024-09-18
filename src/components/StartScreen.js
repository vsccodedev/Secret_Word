import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
    return (
      <div className="start">
         <h1>Secret <span className="word">WO<span className="overlay">R</span></span></h1>
         <p>Clique no botão abaixo para começar a jogar</p>
         <button onClick={startGame}>Começar o jogo</button>
      </div>
    );
};



export default StartScreen;