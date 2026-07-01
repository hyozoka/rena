export function RenaDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-bca rounded-lg flex items-center justify-center text-xl">📊</div>
        <div>
          <h1 className="text-2xl font-bold font-heading text-slate-900">RENA Dashboard</h1>
          <p className="text-xs text-slate-600">Record & Electronic Navigation Assistant</p>
        </div>
      </div>
      {/* KPI Cards - same as Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer">
          <p className="text-xs font-semibold text-slate-600 uppercase">Total Hutang</p>
          <div className="text-2xl font-bold font-heading text-slate-900 mt-2">Rp 28,4 Jt</div>
          <p className="text-xs text-slate-500 mt-1">156 invoice</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer">
          <p className="text-xs font-semibold text-slate-600 uppercase">Total Piutang</p>
          <div className="text-2xl font-bold font-heading text-slate-900 mt-2">Rp 36,8 Jt</div>
          <p className="text-xs text-slate-500 mt-1">198 invoice</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer">
          <p className="text-xs font-semibold text-slate-600 uppercase">Jatuh Tempo 7 Hari</p>
          <div className="text-2xl font-bold font-heading text-amber-600 mt-2">Rp 5,2 Jt</div>
          <p className="text-xs text-slate-500 mt-1">8 invoice</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer">
          <p className="text-xs font-semibold text-slate-600 uppercase">Tepat Waktu</p>
          <div className="text-2xl font-bold font-heading text-green-600 mt-2">94%</div>
          <p className="text-xs text-slate-500 mt-1">12 bulan terakhir</p>
        </div>
      </div>
    </div>
  )
}
