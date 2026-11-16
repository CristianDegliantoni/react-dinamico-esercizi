import { useState } from 'react'

export default function CambiaColore() {
  // 1. Lo stato che memorizza quale opzione è selezionata nel menu
  const [scelta, setScelta] = useState('black')

  // 2. Lo stato che definisce il colore effettivo del div
  const [colore, setColore] = useState('black')

  return (
    <div className="select-container">
      <h3>🎨 Selettore Colore</h3>
      {/* Il div prende come classe il valore di "colore" */}
      <div className={colore}> Contenuto</div>

      {/* Al cambio del select salviamo l'opzione scelta */}
      <select value={scelta} onChange={(e) => setScelta(e.target.value)}>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
      <button onClick={() => setColore(scelta)}>cambia colore</button>
    </div>
  )
}
