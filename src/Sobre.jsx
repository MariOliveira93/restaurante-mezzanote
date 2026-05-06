import './App.css';
import App from './App';


function Sobre() {
  return (
    <section className="sobre-container">
      <header className="sobre-header">
        {/* Usando h1 para SEO e h2 para o estilo, ou apenas ajuste o CSS como feito acima */}
        <h2>LA STORIA</h2> 
        <p>Tradição que nasce sob o luar</p>
      </header>

      <div className="sobre-content">
        <div className="sobre-text">
          <p>
            O <strong>Ristorante Mezzanotte</strong> nasceu da paixão pela hospitalidade 
            clássica italiana e pelo fascínio da noite. Localizado no coração da cidade, 
            nosso espaço foi projetado para ser um refúgio de elegância, onde o tempo 
            parece desacelerar.
          </p>
          <p>
            Nossa cozinha é liderada por técnicas ancestrais, onde cada massa é aberta 
            à mão e cada ingrediente é selecionado de produtores artesanais que respeitam 
            o ciclo da terra. No Mezzanotte, acreditamos que a alta gastronomia não é 
            apenas sobre o paladar, mas sobre a luz suave, o toque do linho e a 
            musicalidade de uma conversa compartilhada.
          </p>
          <blockquote className="sobre-quote">
            "Cucinare è un modo di amore." — Cozinhar é uma forma de amor.
          </blockquote>
          <p>
            Seja para uma celebração memorável ou um encontro discreto, convidamos você 
            a vivenciar a essência da Itália em sua forma mais refinada.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;