import { useState } from 'react'

export default function Preventivo() {
  const [tariffaOraria, setTariffaOraria] = useState('')
  const [oreLavorate, setOreLavorate] = useState('')

  // Calcoli derivati
  const ore = Number(oreLavorate) || 0
  const tariffa = Number(tariffaOraria) || 0
  const extraBonus = ore > 10 ? 50 : 0
  const totalePreventivo = ore * tariffa + extraBonus

  return (
    <div className="preventivo-container">
      <h3>💰 Preventivo</h3>
      <div className="preventivo-row">
        <label>
          Tariffa oraria (€):{' '}
          <input
            type="number"
            min="0"
            value={tariffaOraria}
            onChange={(e) => setTariffaOraria(e.target.value)}
            placeholder="Inserisci tariffa"
          />
        </label>
      </div>
      <div className="preventivo-row">
        <label>
          Ore lavorate:{' '}
          <input
            type="number"
            min="0"
            value={oreLavorate}
            onChange={(e) => setOreLavorate(e.target.value)}
            placeholder="Inserisci ore"
          />
        </label>
      </div>

      <div>
        <p><strong>Totale:</strong> {totalePreventivo}€</p>
        <p>
          Riepilogo: {ore} ore x {tariffa}€
          {extraBonus > 0 ? ` + ${extraBonus}€ extra (superate 10 ore)` : ''} = {totalePreventivo}€
        </p>
      </div>
    </div>
  )
}
