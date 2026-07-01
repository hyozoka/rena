export function DigitalVault() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading text-slate-900">🔒 Digital Vault</h1>
        <p className="text-sm text-slate-600 mt-1">Simpan semua dokumen bisnis Anda secara aman dan terenkripsi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center cursor-pointer hover:border-blue-400 hover:shadow-md transition">
          <div className="text-4xl mb-3">📄</div>
          <p className="font-bold font-heading text-slate-900">Invoice</p>
          <p className="text-sm text-slate-600 mt-1">156 files</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center cursor-pointer hover:border-blue-400 hover:shadow-md transition">
          <div className="text-4xl mb-3">🧾</div>
          <p className="font-bold font-heading text-slate-900">Faktur Pajak</p>
          <p className="text-sm text-slate-600 mt-1">198 files</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 text-center cursor-pointer hover:border-blue-400 hover:shadow-md transition">
          <div className="text-4xl mb-3">📦</div>
          <p className="font-bold font-heading text-slate-900">GRN / Dokumen Terima</p>
          <p className="text-sm text-slate-600 mt-1">284 files</p>
        </div>
      </div>
    </div>
  )
}
