import { ReactNode } from 'react'
import { Bell, LogOut } from 'lucide-react'

type Screen = 'home' | 'rena' | 'upload' | 'invoice' | 'reminders' | 'summary' | 'vault'

interface OceanShellProps {
  currentScreen: Screen
  onScreenChange: (screen: Screen) => void
  children: ReactNode
}

const TABS = [
  { id: 'home', label: '🏠 Dashboard' },
  { id: 'rena', label: '📊 RENA Dashboard' },
  { id: 'upload', label: '📤 Upload Invoice' },
  { id: 'invoice', label: '📄 Invoice Detail' },
  { id: 'reminders', label: '🔔 Reminders' },
  { id: 'summary', label: '📈 Business Summary' },
  { id: 'vault', label: '🔒 Digital Vault' },
] as const

export function OceanShell({ currentScreen, onScreenChange, children }: OceanShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* TOPBAR */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-90" onClick={() => onScreenChange('home')}>
          <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
            🌊
          </div>
          <div>
            <div className="font-bold text-lg tracking-wide">ocean</div>
            <div className="text-xs text-blue-300">by BCA – CORPORATE ECOSYSTEM</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-lg transition">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-90">
            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center font-bold text-sm">AD</div>
            <div className="text-sm">
              <div className="font-bold">Andi Dharma</div>
              <div className="text-xs text-blue-300">PT Sejahtera Abadi</div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="bg-slate-800 border-b border-white/10 overflow-x-auto">
        <div className="flex">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onScreenChange(tab.id as Screen)}
              className={`px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                currentScreen === tab.id
                  ? 'text-white border-blue-400'
                  : 'text-slate-300 border-transparent hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-7 max-w-7xl w-full mx-auto">
        {children}
      </div>
    </div>
  )
}
