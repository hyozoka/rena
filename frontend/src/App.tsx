import { useState } from 'react'
import { OceanShell } from './components/OceanShell'
import { Dashboard } from './pages/Dashboard'
import { RenaDashboard } from './pages/RenaDashboard'
import { UploadInvoice } from './pages/UploadInvoice'
import { InvoiceDetail } from './pages/InvoiceDetail'
import { Reminders } from './pages/Reminders'
import { BusinessSummary } from './pages/BusinessSummary'
import { DigitalVault } from './pages/DigitalVault'

type Screen = 'home' | 'rena' | 'upload' | 'invoice' | 'reminders' | 'summary' | 'vault'

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Dashboard />
      case 'rena':
        return <RenaDashboard />
      case 'upload':
        return <UploadInvoice />
      case 'invoice':
        return <InvoiceDetail />
      case 'reminders':
        return <Reminders />
      case 'summary':
        return <BusinessSummary />
      case 'vault':
        return <DigitalVault />
      default:
        return <Dashboard />
    }
  }

  return (
    <OceanShell currentScreen={currentScreen} onScreenChange={setCurrentScreen}>
      {renderScreen()}
    </OceanShell>
  )
}

export default App
