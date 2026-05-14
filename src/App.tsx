import { PortfolioPreferencesProvider } from './context/PortfolioPreferences.tsx'
import Home from '../pages/home.tsx'

function App() {
  return (
    <PortfolioPreferencesProvider>
      <Home />
    </PortfolioPreferencesProvider>
  )
}

export default App
