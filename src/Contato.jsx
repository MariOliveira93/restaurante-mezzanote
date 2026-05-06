import './App.css';
import App from './App';

function Contato() {
  return (
    <section className="contato-container">
      <h2>Contato</h2>
      <p className="contato-desc">Para eventos privados ou dúvidas, entre em contato.</p>
      
      <form className="contato-form">
        <div className="input-group">
          <label>Nome</label>
          <input type="text" placeholder="Seu nome completo" />
        </div>
        
        <div className="input-group">
          <label>E-mail</label>
          <input type="email" placeholder="email@exemplo.com" />
        </div>
        
        <div className="input-group">
          <label>Mensagem</label>
          <textarea rows="5" placeholder="Como podemos ajudar?"></textarea>
        </div>
        
        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default Contato;