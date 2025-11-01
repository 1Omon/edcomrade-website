"use client";
import React, { useState } from "react";

export default function Page() {
  const [uploading, setUploading] = useState(false)
  const [uploadData, setUploadData] = useState<{ url?: string; publicId?: string }>({})

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const body = new FormData()
      body.append('file', file)
      const res = await fetch('/api/submissions/upload', { method: 'POST', body })
      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      setUploadData({ url: data.secure_url, publicId: data.public_id })
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-medium mb-6">Register School</h1>
      <form action={async (formData) => {
        const payload = new FormData(formData as any)
        if (uploadData.url) payload.set('logoUrl', uploadData.url)
        if (uploadData.publicId) payload.set('logoPublicId', uploadData.publicId)
        const res = await fetch('/api/schools', { method: 'POST', body: payload })
        if (!res.ok) alert('Failed to save')
        else window.location.href = '/admin/schools'
      }} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="schoolName" placeholder="School Name*" required className="border rounded px-3 py-2" />
          <input name="email" type="email" placeholder="Email" className="border rounded px-3 py-2" />
          <input name="phone" placeholder="Phone" className="border rounded px-3 py-2" />
          <input name="city" placeholder="City" className="border rounded px-3 py-2" />
          <input name="country" placeholder="Country" className="border rounded px-3 py-2" />
          <input name="website" placeholder="Website" className="border rounded px-3 py-2" />
          <input type="number" name="studentCount" placeholder="Student Count" className="border rounded px-3 py-2" />
        </div>
        <textarea name="description" placeholder="Description" className="border rounded px-3 py-2 w-full min-h-24" />

        <div className="space-y-2">
          <label className="block font-medium">Logo</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {uploading && <p className="text-sm">Uploading...</p>}
          {uploadData.url && (
            <img src={uploadData.url} alt="logo preview" className="h-16 object-contain" />
          )}
        </div>

        <input type="hidden" name="logoUrl" />
        <input type="hidden" name="logoPublicId" />

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}


