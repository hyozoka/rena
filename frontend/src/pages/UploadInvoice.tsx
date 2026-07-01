export function UploadInvoice() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading text-slate-900">Upload Invoice</h1>
        <p className="text-sm text-slate-600 mt-1">Pilih metode upload sesuai paket Anda</p>
      </div>

      <div className="bg-white rounded-xl p-5 border border-slate-200">
        <h3 className="font-bold font-heading text-slate-900 mb-2">📄 Paket FREE – Upload Satu Per Satu</h3>
        <p className="text-sm text-slate-600">Foto atau unggah dokumen invoice per transaksi dengan OCR otomatis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
          <div className="text-4xl mb-3">📸</div>
          <h4 className="font-bold font-heading text-slate-900 mb-1">Foto Invoice (Kamera)</h4>
          <p className="text-sm text-slate-600">Jepret langsung dari dokumen fisik. OCR membaca otomatis.</p>
        </div>
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition">
          <div className="text-4xl mb-3">📁</div>
          <h4 className="font-bold font-heading text-slate-900 mb-1">Upload Dokumen</h4>
          <p className="text-sm text-slate-600">Pilih PDF atau JPG dari perangkat Anda</p>
        </div>
      </div>
    </div>
  )
}
