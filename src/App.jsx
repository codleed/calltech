import React from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { store } from './store/store'
import Home from './pages/Home'

// Ant Design theme configuration
const theme = {
  token: {
    colorPrimary: '#1e40af', // hvac-blue
    borderRadius: 8,
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
}

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </ConfigProvider>
    </Provider>
  )
}

export default App
