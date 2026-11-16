import Lampadina from './components/Lampadina'
import CambiaColore from './components/CambiaColore'
import CambioPassword from './components/CambioPassword'
import Newsletter from './components/Newsletter'
import Preventivo from './components/Preventivo'
import GestioneTavoli from './components/GestioneTavoli'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Dinamico - Esercizi</h1>

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
