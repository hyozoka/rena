export function BusinessSummary() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading text-slate-900">Business Summary</h1>
        <p className="text-sm text-slate-600 mt-1">Laporan agregat untuk analisis kredit dan lending purposes</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="font-bold font-heading text-slate-900 mb-4">📊 KMK Loan Potential</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-slate-600 uppercase font-semibold tracking-wide mb-1">Potensi Kredit</p>
            <p className="text-2xl font-bold font-heading text-slate-900">Rp 25,6 B</p>
          </div>
          <div>
            <p className="text-xs text-slate-600 uppercase font-semibold tracking-wide mb-1">Basis Data</p>
            <p className="text-lg font-bold font-heading text-slate-900">Business Summary</p>
          </div>
          <div>
            <p className="text-xs text-slate-600 uppercase font-semibold tracking-wide mb-1">Status</p>
            <p className="text-lg font-bold font-heading text-green-600">✓ Siap</p>
          </div>
          <div className="flex items-end">
            <button className="bg-bca text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">Ajukan</button>
          </div>
        </div>
      </div>
    </div>
  )
}
