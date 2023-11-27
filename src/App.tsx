import { Provider } from 'react-redux'

import { Router } from '@/router'
import { store } from '@/services/store/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
