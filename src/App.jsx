import Lampadina from './components/Lampadina'
import CambiaColore from './components/CambiaColore'
import CambioPassword from './components/CambioPassword'
import Newsletter from './components/Newsletter'
import Preventivo from './components/Preventivo'
import GestioneTavoli from './components/GestioneTavoli'

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        React Dinamico - Esercizi
      </h1>

      <Lampadina />
      <hr />

      <CambiaColore />
      <hr />

      <CambioPassword />
      <hr />

      <Newsletter />
      <hr />

      <Preventivo />
      <hr />

      <GestioneTavoli />
    </div>
  )
}

export default App
