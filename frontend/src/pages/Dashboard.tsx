export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 mb-1">Selamat Datang di OCEAN by BCA</h1>
          <p className="text-sm text-slate-600">Platform digital untuk mengelola invoice dan pembayaran bisnis Anda</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition kpi">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Total Hutang</p>
          <div className="text-2xl font-bold font-heading text-slate-900 mt-2 mb-1">Rp 28,4 Jt</div>
          <p className="text-xs text-slate-500">156 invoice</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition kpi">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Total Piutang</p>
          <div className="text-2xl font-bold font-heading text-slate-900 mt-2 mb-1">Rp 36,8 Jt</div>
          <p className="text-xs text-slate-500">198 invoice</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition kpi">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Jatuh Tempo 7 Hari</p>
          <div className="text-2xl font-bold font-heading text-amber-600 mt-2 mb-1">Rp 5,2 Jt</div>
          <p className="text-xs text-slate-500">8 invoice</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition kpi">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Tepat Waktu</p>
          <div className="text-2xl font-bold font-heading text-green-600 mt-2 mb-1">94%</div>
          <p className="text-xs text-slate-500">12 bulan terakhir</p>
        </div>
      </div>

      {/* Features Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-200">
          <h3 className="font-bold font-heading text-slate-900">Fitur Utama RENA</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Fitur</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Deskripsi</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 hover:bg-slate-50 cursor-pointer transition">
              <td className="px-5 py-3"><strong>📤 Upload Invoice</strong></td>
              <td className="px-5 py-3 text-slate-600">Unggah invoice dari berbagai sumber dengan OCR otomatis</td>
              <td className="px-5 py-3"><span className="badge b-green">Aktif</span></td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 cursor-pointer transition">
              <td className="px-5 py-3"><strong>🔔 Reminder Pembayaran</strong></td>
              <td className="px-5 py-3 text-slate-600">Notifikasi otomatis untuk pembayaran yang akan jatuh tempo</td>
              <td className="px-5 py-3"><span className="badge b-green">Aktif</span></td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 cursor-pointer transition">
              <td className="px-5 py-3"><strong>🔒 Digital Vault</strong></td>
              <td className="px-5 py-3 text-slate-600">Simpan semua dokumen bisnis Anda secara aman dan terenkripsi</td>
              <td className="px-5 py-3"><span className="badge b-green">Aktif</span></td>
            </tr>
            <tr className="hover:bg-slate-50 cursor-pointer transition">
              <td className="px-5 py-3"><strong>📈 Business Summary</strong></td>
              <td className="px-5 py-3 text-slate-600">Laporan agregat untuk keperluan analisis kredit dan lending</td>
              <td className="px-5 py-3"><span className="badge b-amber">Premium</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
