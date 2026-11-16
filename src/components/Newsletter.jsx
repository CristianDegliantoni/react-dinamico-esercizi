import { useState } from 'react'

export default function Newsletter() {
  const [acconsento, setAcconsento] = useState(false)
  const [newsletterInviata, setNewsletterInviata] = useState(false)

  return (
    <div className="newsletter-container">
      <h3>📨 Newsletter</h3>
      {!newsletterInviata ? (
        <div>
          <label className="newsletter-label">
            <input
              type="checkbox"
              checked={acconsento}
              onChange={(e) => setAcconsento(e.target.checked)}
            />{' '}
            Acconsento a proseguire
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
  )
}
