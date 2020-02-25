import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MyProvider from './context'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import * as serviceWorker from './serviceWorker'

import Routes from './routes'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <MyProvider>
        <Routes />
      </MyProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.register()
