import { useState } from 'react'

export default function GestioneTavoli() {
  // 1. Array di oggetti nello stato (come nella ToDo List)
  const [tavoli, setTavoli] = useState([
    { id: 1, nome: 'Mario Rossi', ospiti: 4, data: '2026-11-20' },
    { id: 2, nome: 'Giulia Bianchi', ospiti: 2, data: '2026-11-21' },
  ])

  // 2. Stati controllati per i campi del form
  const [nome, setNome] = useState('')
  const [ospiti, setOspiti] = useState('')
  const [data, setData] = useState('')
  const [errore, setErrore] = useState('')

  // 3. Aggiunta di un nuovo tavolo all'array
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validazione semplice
    if (!nome.trim() || !ospiti || !data) {
      setErrore('Compila tutti i campi prima di aggiungere il tavolo!')
      return
    }

    if (Number(ospiti) <= 0) {
      setErrore('Il numero di ospiti deve essere maggiore di 0!')
      return
    }

    // Creiamo il nuovo oggetto tavolo
    const nuovoTavolo = {
      id: Date.now(), // ID univoco generato dal timestamp
      nome: nome.trim(),
      ospiti: Number(ospiti),
      data: data,
    }

    // Aggiorniamo l'array con lo spread operator [...tavoli, nuovoTavolo]
    setTavoli([...tavoli, nuovoTavolo])

    // Svuotiamo i campi del form e gli errori
    setNome('')
    setOspiti('')
    setData('')
    setErrore('')
  }

  // 4. Eliminazione di un tavolo (logica filter come nella ToDo list)
  const eliminaTavolo = (idDaRimuovere) => {
    const tavoliFiltrati = tavoli.filter((tavolo) => tavolo.id !== idDaRimuovere)
    setTavoli(tavoliFiltrati)
  }

  // Calcolo totale ospiti
  const totaleOspiti = tavoli.reduce((acc, t) => acc + t.ospiti, 0)

  return (
    <div className="tavoli-container">
      <h2>🐐 FINAL BOSS: Gestione Prenotazioni Tavoli</h2>

      {/* Form di aggiunta */}
      <form onSubmit={handleSubmit} className="tavoli-form">
        <div className="tavoli-inputs">
          <input
            type="text"
            placeholder="Nome prenotazione"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="number"
            min="1"
            placeholder="N. ospiti"
            value={ospiti}
            onChange={(e) => setOspiti(e.target.value)}
          />
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button type="submit">Aggiungi Tavolo</button>
        </div>
        {errore && <p className="error-message">{errore}</p>}
      </form>

      {/* Riepilogo conteggi */}
      <p>
        <strong>Prenotazioni attive:</strong> {tavoli.length} |{' '}
        <strong>Totale coperti:</strong> {totaleOspiti}
      </p>

      {/* Lista delle prenotazioni con map() */}
      {tavoli.length === 0 ? (
        <p className="tavoli-empty">Nessuna prenotazione presente.</p>
      ) : (
        <ul className="tavoli-list">
          {tavoli.map((tavolo) => (
            <li key={tavolo.id} className="tavolo-item">
              <div>
                <strong>{tavolo.nome}</strong> — {tavolo.ospiti} ospiti
                <br />
                <small className="tavolo-date">Data: {tavolo.data}</small>
              </div>
              <button
                onClick={() => eliminaTavolo(tavolo.id)}
                className="btn-delete"
              >
                Elimina
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
