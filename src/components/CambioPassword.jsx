import { useState } from 'react'

export default function CambioPassword() {
  const [passwordAttualeRegistrata, setPasswordAttualeRegistrata] = useState('segreto123') // Password attuale salvata
  const [passwordAttuale, setPasswordAttuale] = useState('') // Input per la password attuale da verificare
  const [password, setPassword] = useState('')
  const [copiaPassword, setCopiaPassword] = useState('')
  const [messaggio, setMessaggio] = useState('')

  const verificaPassword = () => {
    if (passwordAttuale !== passwordAttualeRegistrata) {
      setMessaggio('La password attuale non è corretta!')
    } else if (password === '' || copiaPassword === '') {
      setMessaggio('Compila tutti i campi della nuova password!')
    } else if (password !== copiaPassword) {
      setMessaggio('Le nuove password non coincidono!')
    } else {
      setPasswordAttualeRegistrata(password)
      setMessaggio('Password cambiata con successo!')
    }

    // In ogni caso svuotiamo gli input
    setPasswordAttuale('')
    setPassword('')
    setCopiaPassword('')
  }

  return (
    <div className="password-changer">
      <h3>🔑 Cambio Password</h3>
      <p>
        <small>
          (Password attuale salvata per prova: <strong>{passwordAttualeRegistrata}</strong>)
        </small>
      </p>
      <div>
        <input
          type="password"
          value={passwordAttuale}
          onChange={(e) => setPasswordAttuale(e.target.value)}
          placeholder="Password attuale"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nuova password"
        />
      </div>
      <div>
        <input
          type="password"
          value={copiaPassword}
          onChange={(e) => setCopiaPassword(e.target.value)}
          placeholder="Ripeti nuova password"
        />
      </div>
      <p>Lunghezza nuova password: {password.length}</p>
      <button onClick={verificaPassword}>Invio</button>
      {messaggio && <p>{messaggio}</p>}
    </div>
  )
}
