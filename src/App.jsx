import './App.css'
import Cards from './components/cards/index.jsx'
import HeartBackground from './components/HeartBackground/HeartBackground.jsx'





function App() {

  return (
    <>
    
    <HeartBackground />
    <section className="app-container">
      
      <Cards
        imageUrl={'/images/dia-1-image.png'}
        title={'DIA 1'}
        description={'O início de uma surpresa especial: 14 textos em 14 dias, um gesto feito com amor, código e muita saudade. Um presente simples, mas cheio de sentimento.'}
        color={'#FF5733'}
        link={'./src/Pages/Page-1/index.html'}
        
      />

      <Cards
        imageUrl={'/images/dia-1-image.png'}
        title={'DIA 2'}
        description={'Escrito durante uma call, o texto transborda paixão, desejo contido e gratidão. Um momento de conexão sincera e abertura entre dois corações apaixonados.'}
       
      />

      <Cards
        imageUrl={'/images/dia-1-image.png'}
        title={'DIA 3'}
        description={'Entre saudades e planos, nasce o desejo de uma vida a dois cheia de amor, estabilidade e sonhos realizados. Um futuro de rainha para ela, e de pai dedicado para ele.'}
      />

      <Cards
        imageUrl={'/images/dia-1-image.png'}
        title={'DIA 4'}
        description={''}
      />

      <Cards
        imageUrl={'/images/dia-1-image.png'}
        title={'DIA 5'}
        description={'O início de uma surpresa especial: 14 textos em 14 dias, um gesto feito com amor, código e muita saudade. Um presente simples, mas cheio de sentimento.'}
      />

      
    </section>
     
   
    </>
  )
}

export default App
