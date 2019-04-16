import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

import Router from './components/routes'
import * as serviceWorker from './serviceWorker'

const Root: React.FC<{}> = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.Fragment>
)

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()
