export function Reminders() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading text-slate-900">Reminders & Payment Due</h1>
        <p className="text-sm text-slate-600 mt-1">Track dan manage pembayaran yang akan jatuh tempo</p>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-xl border-l-4 border-red-500 border border-slate-200 p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-lg">⏰</div>
            <div>
              <p className="font-semibold text-slate-900">INV-2026-0546</p>
              <p className="text-sm text-slate-600">PT ABC Supplier - Rp 1.250.000.000</p>
            </div>
          </div>
          <span className="badge b-red">Jatuh Tempo</span>
        </div>
        <div className="bg-white rounded-xl border-l-4 border-amber-500 border border-slate-200 p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-lg">⚠️</div>
            <div>
              <p className="font-semibold text-slate-900">INV-2026-0547</p>
              <p className="text-sm text-slate-600">PT XYZ Company - Rp 3.780.000.000</p>
            </div>
          </div>
          <span className="badge b-amber">3 Hari Lagi</span>
        </div>
        <div className="bg-white rounded-xl border-l-4 border-green-500 border border-slate-200 p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg">✅</div>
            <div>
              <p className="font-semibold text-slate-900">INV-2026-0548</p>
              <p className="text-sm text-slate-600">PT ABC Supplier - Rp 2.450.000.000</p>
            </div>
          </div>
          <span className="badge b-green">Selesai</span>
        </div>
      </div>
    </div>
  )
}
