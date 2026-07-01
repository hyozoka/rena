export function InvoiceDetail() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900">Invoice Detail & Status Pembayaran</h1>
          <p className="text-sm text-slate-600 font-mono mt-1">INV-2026-001234</p>
        </div>
        <button className="bg-bca text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
          💳 Bayar Sekarang
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold font-heading text-slate-900 mb-4">Rincian Invoice</h3>
          <div className="space-y-3">
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Supplier</span>
              <span className="font-semibold text-slate-900">PT ABC Supplier Indonesia</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Jatuh Tempo</span>
              <span className="font-semibold text-red-600">14 Juni 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Jumlah</span>
              <span className="font-semibold text-slate-900">Rp 2.500.000.000</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold font-heading text-slate-900 mb-4">Status Pembayaran</h3>
          <div className="text-center mb-4">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">MENUNGGU PEMBAYARAN</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Cocok dengan SAP/Oracle</span>
              <span className="font-semibold">✅ Ya</span>
            </div>
            <div className="flex justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-600">Audit Trail</span>
              <span className="font-semibold">Lengkap</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">AI Verification</span>
              <span className="font-semibold">✅ Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
