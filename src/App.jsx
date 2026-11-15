import { useState } from 'react'
function App() {
  // true = accesa, false = spenta
  const [accesa, setAccesa] = useState(false)
  return (
    <>
      <p className={accesa ? 'accesa' : ''}>La lampadina è {accesa ? 'accesa' : 'spenta'}</p>

      {/* Al click invertiamo lo stato */}
      <button onClick={() => setAccesa(!accesa)}>
        {accesa ? 'Spegni' : 'Accendi'}
      </button>
    </>
  )
}
export default App