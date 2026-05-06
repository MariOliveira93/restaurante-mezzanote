
import App from './App.jsx'
import './App.css';

function Menu() {
  const cardapio = [
    {
      categoria: "Antipasti",
      itens: [
        { nome: "Burrata al Tartufo", ingredientes: "Burrata fresca, raspas de trufas negras, azeite extra virgem e rúcula selvagem.", preco: "89" },
        { nome: "Carpaccio Mezzanotte", ingredientes: "Lâminas de filé mignon, molho de mostarda dijon, alcaparras e lascas de grana padano.", preco: "74" }
      ]
    },
    {
      categoria: "Primi Piatti",
      itens: [
        { nome: "Risotto ai Funghi", ingredientes: "Arroz arbóreo, seleção de cogumelos frescos e manteiga de trufa branca.", preco: "112" },
        { nome: "Tagliatelle al Ragu", ingredientes: "Massa fresca artesanal com ragu de vitela cozido por 12 horas em vinho tinto.", preco: "98" },
        { nome: "Gnocchi alla Sorrentina", ingredientes: "Gnocchi de batata artesanal, molho de tomate pomodoro e mussarela de búfala gratinada.", preco: "86" }
      ]
    },
    {
      categoria: "Secondi Piatti",
      itens: [
        { nome: "Filetto al Pepe Verde", ingredientes: "Medalhão de filé mignon com molho de pimenta verde e batatas rústicas ao alecrim.", preco: "128" },
        { nome: "Branzino al Forno", ingredientes: "Robalo assado com crosta de ervas, legumes sazonais e emulsão de limão siciliano.", preco: "115" }
      ]
    },
    {
      categoria: "Dolci",
      itens: [
        { nome: "Tiramisù Classico", ingredientes: "Mascarpone artesanal, café espresso, cacau puro e biscoito savoiardi.", preco: "42" },
        { nome: "Panna Cotta", ingredientes: "Creme de baunilha de Madagascar com calda de frutas vermelhas frescas.", preco: "38" }
      ]
    }
  ];

  return (
    <section className="menu-container">
      <header className="menu-header">
        <h2>Il Menu</h2>
        <p>A essência da Itália sob a luz do luar</p>
      </header>

      {cardapio.map((secao, idx) => (
        <div key={idx} className="menu-section">
          <h3>{secao.categoria}</h3>
          
          <div className="menu-items">
            {secao.itens.map((prato, i) => (
              <div key={i} className="menu-item">
                {/* Esta div menu-item-top é quem joga o nome para a esquerda e o preço para a direita usando Flexbox */}
                <div className="menu-item-top">
                  <h4>{prato.nome}</h4>
                  <span className="menu-price">{prato.preco}</span>
                </div>
                <p className="menu-description">{prato.ingredientes}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Adicionei um estilo inline rápido aqui só para manter o rodapé do menu discreto e centralizado */}
      <div className="menu-footer" style={{ textAlign: 'center', marginTop: '80px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          * Valores expressos em Reais. Taxas de serviço não inclusas.
        </p>
      </div>
    </section>
  );
}

export default Menu;