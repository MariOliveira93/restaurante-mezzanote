import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importa os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// IMPORTAR AS IMAGENS DA PASTA ASSETS
import imagemAdega from './assets/adega.png';
import imagemMassa from './assets/massa.png';
import imagemSalao from './assets/salao.png';

function Carrossel() {
  // Criar o array com as imagens importadas
  const slideImagens = [
    { url: imagemAdega, alt: 'Nossa seleta adega de vinhos italianos' },
    { url: imagemMassa, alt: 'Clássica massa italiana Mezzanotte' },
    { url: imagemSalao, alt: 'O ambiente sofisticado do Ristorante Mezzanotte' }
  ];

  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0} // Sem espaço entre os slides para um visual mais limpo
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }} // 4 segundos de delay
        loop={true}
        className="mySwiper"
      >
        {slideImagens.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.url} alt={slide.alt} className="img-carrossel" />
              {/* Uma legenda sutil opcional no estilo Fasano */}
              <div className="slide-caption">{slide.alt}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;