import { useState } from 'react'

function App() {
  // true = accesa, false = spenta
  const [accesa, setAccesa] = useState(false)


  // 1. Lo stato che memorizza quale opzione è selezionata nel menu
  const [scelta, setScelta] = useState('black')

  // 2. Lo stato che definisce il colore effettivo del div
  const [colore, setColore] = useState('black')


  // Esercizio Password
  const [passwordAttualeRegistrata, setPasswordAttualeRegistrata] = useState("segreto123") // Password attuale salvata
  const [passwordAttuale, setPasswordAttuale] = useState("") // Input per la password attuale da verificare
  const [password, setPassword] = useState("")
  const [copiaPassword, setCopiaPassword] = useState("")
  const [messaggio, setMessaggio] = useState("")

  // Esercizio Newsletter
  const [acconsento, setAcconsento] = useState(false)
  const [newsletterInviata, setNewsletterInviata] = useState(false)

  // Esercizio Preventivo
  const [tariffaOraria, setTariffaOraria] = useState("")
  const [oreLavorate, setOreLavorate] = useState("")

  // Calcoli preventivo (valori derivati)
  const ore = Number(oreLavorate) || 0
  const tariffa = Number(tariffaOraria) || 0
  const extraBonus = ore > 10 ? 50 : 0
  const totalePreventivo = (ore * tariffa) + extraBonus

  const verificaPassword = () => {
    if (passwordAttuale !== passwordAttualeRegistrata) {
      setMessaggio("La password attuale non è corretta!")
    } else if (password === "" || copiaPassword === "") {
      setMessaggio("Compila tutti i campi della nuova password!")
    } else if (password !== copiaPassword) {
      setMessaggio("Le nuove password non coincidono!")
    } else {
      setPasswordAttualeRegistrata(password)
      setMessaggio("Password cambiata con successo!")
    }

    // In ogni caso svuotiamo gli input
    setPasswordAttuale("")
    setPassword("")
    setCopiaPassword("")
  }


  return (
    <>
      <div className='lampadina-container'>
        <p className={accesa ? 'accesa' : ''}>La lampadina è {accesa ? 'accesa' : 'spenta'}</p>

        {/* Al click invertiamo lo stato */}
        <button onClick={() => setAccesa(!accesa)}>
          {accesa ? 'Spegni' : 'Accendi'}
        </button>
      </div>


      {/**********************************   codice del select e bottone   *************************************************************/}


      {/* Il div prende come classe il valore di "colore" */}
      <div className="select-container">
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



      {/*********************************   esercizio tre input con bottone (password)  **********************************************************/}


      <div className="password-changer">
        <h3>Cambio Password</h3>
        <p><small>(Password attuale registrata per prova: <strong>{passwordAttualeRegistrata}</strong>)</small></p>
        <input
          type="password"
          value={passwordAttuale}
          onChange={(e) => setPasswordAttuale(e.target.value)}
          placeholder="Password attuale"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nuova password"
        />
        <input
          type="password"
          value={copiaPassword}
          onChange={(e) => setCopiaPassword(e.target.value)}
          placeholder="Ripeti nuova password"
        />
        <p>Lunghezza nuova password: {password.length}</p>
        <button onClick={verificaPassword}>Invio</button>
        {messaggio && <p>{messaggio}</p>}
      </div>

      {/*********************************   esercizio newsletter  **********************************************************/}

      <div className="newsletter-container" style={{ margin: '3rem' }}>
        <h3>Newsletter</h3>
        {!newsletterInviata ? (
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input
                type="checkbox"
                checked={acconsento}
                onChange={(e) => setAcconsento(e.target.checked)}
              />
              {' '}Acconsento a proseguire
            </label>
            <button
              disabled={!acconsento}
              onClick={() => setNewsletterInviata(true)}
            >
              Continua
            </button>
          </div>
        ) : (
          <p>Grazie per esserti iscritto alla nostra newsletter!</p>
        )}
      </div>

      {/*********************************   esercizio preventivo  **********************************************************/}

      <div className="preventivo-container" style={{ margin: '3rem' }}>
        <h3>Preventivo</h3>
        <div style={{ marginBottom: '0.5rem' }}>
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
        <div style={{ marginBottom: '0.5rem' }}>
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
          {/* MINIBONUS + BONUS TOSTO */}
          <p>
            Riepilogo: {ore} ore x {tariffa}€
            {extraBonus > 0 ? ` + ${extraBonus}€ extra (superate 10 ore)` : ''} = {totalePreventivo}€
          </p>
        </div>
      </div>
    </>
  )
}
export default App