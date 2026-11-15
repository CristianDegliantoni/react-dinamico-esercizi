import { useState } from 'react'

function App() {
  // true = accesa, false = spenta
  const [accesa, setAccesa] = useState(false)


  // 1. Lo stato che memorizza quale opzione è selezionata nel menu
  const [scelta, setScelta] = useState('black')

  // 2. Lo stato che definisce il colore effettivo del div
  const [colore, setColore] = useState('black')


  const [password, setPassword] = useState("")
  const [copiaPassword, setCopiaPassword] = useState("")
  const [messaggio, setMessaggio] = useState("")

  const verificaPassword = () => {
    if (password === copiaPassword && password !== "") {
      setMessaggio("Password cambiata")
    } else {
      setMessaggio("Le password non coincidono")
    }

    // In entrambi i casi svuotiamo le input
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



      {/*********************************   esercizio due input con bottone  **********************************************************/}


      <div className="password-changer">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Inserisci password"
        />
        <input
          type="password"
          value={copiaPassword}
          onChange={(e) => setCopiaPassword(e.target.value)}
          placeholder="Ripeti password"
        />
        <button onClick={verificaPassword}>invio</button>
        {messaggio && <p>{messaggio}</p>}
      </div>
    </>
  )
}
export default App