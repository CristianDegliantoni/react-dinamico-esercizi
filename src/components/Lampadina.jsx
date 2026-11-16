import { useState } from 'react'

export default function Lampadina() {
  // true = accesa, false = spenta
  const [accesa, setAccesa] = useState(false)

  return (
    <div className="lampadina-container">
      <h3>💡 Lampadina</h3>
      <p className={accesa ? 'accesa' : ''}>
        La lampadina è {accesa ? 'accesa' : 'spenta'}
      </p>

      {/* Al click invertiamo lo stato */}
      <button onClick={() => setAccesa(!accesa)}>
        {accesa ? 'Spegni' : 'Accendi'}
      </button>
    </div>
  )
}
