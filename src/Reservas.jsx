import { useState } from 'react';
import './App.css';
import App from './App';

function Reservas() {
  const [agendado, setAgendado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAgendado(true);
  };

  if (agendado) {
    return (
      <div className="reserva-sucesso">
        <h2>Grazie!</h2>
        <p>Sua solicitação de reserva foi enviada. Entraremos em contato em breve para confirmar sua mesa sob a luz do luar.</p>
        <button onClick={() => setAgendado(false)}>Nova Reserva</button>
      </div>
    );
  }

  return (
    <section className="reservas-container">
      <header className="reservas-header">
        <h2>Prenotazione</h2>
        <p>Garanta sua mesa para uma experiência inesquecível</p>
      </header>

      <form className="reservas-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <label>Data</label>
            <input type="date" required />
          </div>
          <div className="input-group">
            <label>Horário</label>
            <select required>
              <option value="">Selecione</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Pessoas</label>
            <input type="number" min="1" max="10" placeholder="Quantidade" required />
          </div>
          <div className="input-group">
            <label>Ocasião</label>
            <select>
              <option value="comum">Jantar Casual</option>
              <option value="aniversario">Aniversário</option>
              <option value="romantico">Encontro Romântico</option>
              <option value="negocios">Negócios</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label>Observações Especiais</label>
          <textarea placeholder="Alergias ou pedidos especiais..."></textarea>
        </div>

        <button type="submit" className="btn-confirmar">Solicitar Mesa</button>
      </form>
    </section>
  );
}

export default Reservas;