import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'

import { x } from '@xstyled/styled-components'
import { theme } from '../../theme'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../apollo-client'
import { DemoComponent } from '../demo-component'



function App() {

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <div className="App">
          <DemoComponent />
          <x.button px={2} py={2} color="yellow-100" backgroundColor="yellow-900" >Click me and I do nothing!</x.button>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
