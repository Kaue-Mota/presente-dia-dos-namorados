import './App.css'
import Cards from './components/cards/index.jsx'
import HeartBackground from './components/HeartBackground/HeartBackground.jsx'





function App() {

  return (
    <>
    
   
    <section className="app-container">
      
      <Cards
        imageUrl={'/images/foto1.jpg'}
        title={'CARTA 1'}
        description={'O início de uma surpresa especial: alguns textos escritos com amor, código e muita saudade. Um presente simples, mas cheio de sentimento.'}
        color={'rgba(112, 37, 37, 0.5)'}
        link={'./src/Pages/Page-1/index.html'}
        
      />

      <Cards
        imageUrl={'/images/foto3.jpg'}
        title={'CARTA 2'}
        description={'Escrito durante uma call, o texto transborda paixão, desejo contido e gratidão. Um momento de conexão sincera e abertura entre dois corações apaixonados.'}
        color={'rgba(94, 10, 10, 0.5)'}
        link={'./src/Pages/Page-2/index.html'}
       
      />

      <Cards
        imageUrl={'/images/foto4.jpg'}
        title={'CARTA 3'}
        description={' Um desabafo leve e apaixonado sobre como o amor dela cura qualquer dia ruim. Entre risadas e emoção, o desejo de casar e viver ao lado de quem transforma tudo.'}
        color={'rgba(189, 19, 19, 0.5)'}
        link={'./src/Pages/Page-3/index.html'}
      />

      <Cards
        imageUrl={'/images/foto5.jpg'}
        title={'CARTA 4'}
        description={'Uma reflexão sobre o passado, inseguranças superadas e a transformação trazida por um amor verdadeiro. Um agradecimento sincero à mulher que mudou tudo.'}
        color={'rgba(121, 15, 33, 0.5)'}
        link={'./src/Pages/Page-4/index.html'}
      />

      <Cards
        imageUrl={'/images/foto6.jpg'}
        title={'CARTA 5'}
        description={'Uma carta de amor leve e sincera, sobre como ela se tornou o porto seguro em meio ao caos. Um lembrete de que, com ela, tudo faz sentido.'}
        color={'rgba(119, 13, 13, 0.5)'}
        link={'./src/Pages/Page-5/index.html'}
      />

       <HeartBackground />
    </section>
     
   
    </>
  )
}

export default App
