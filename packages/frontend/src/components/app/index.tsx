import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import styled from '@xstyled/styled-components'
import { x } from '@xstyled/styled-components'
import { theme } from '../../theme'
import logo from './logo.svg'

//only way auto complete works with styled
const Demotext = styled.div`
  background-color: ${theme.colors['yellow-500']};
  max-width: fit-content;
`

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <div className="App">
        <Demotext>Some text with background</Demotext>
        <x.button px={2} py={2} color="yellow-100" backgroundColor="yellow-900" >Click me and I do nothing!</x.button>
      </div>
    </ThemeProvider>
  )
}

export default App
