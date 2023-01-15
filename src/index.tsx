import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import './index.css'
import { en, is } from './translation'
import Routes from './Routes'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'is',
  resources: {
    is: {
      translation: is,
    },
    en: {
      translation: en,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
