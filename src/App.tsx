import { Provider } from 'react-redux'

import { Decks } from '@/pages/decks/decks'
import { Router } from '@/router'
import { store } from '@/services/store/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
      <Decks />
    </Provider>
  )
}
