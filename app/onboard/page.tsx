"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const OnboardSchema = z.object({
  schoolName: z.string().min(2, 'Enter your school name'),
  contactName: z.string().min(2, 'Enter a contact name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  studentCount: z.coerce.number().int().min(0).optional(),
  description: z.string().optional(),
})

type OnboardValues = z.infer<typeof OnboardSchema>

export default function Page() {
  const [uploading, setUploading] = useState(false)
  const [uploadData, setUploadData] = useState<{ url?: string; publicId?: string }>({})
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<OnboardValues>({ resolver: zodResolver(OnboardSchema) })

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
      <h1 className="text-2xl font-medium mb-6">School Onboarding</h1>
      <form onSubmit={handleSubmit(async (values) => {
        const payload = new FormData()
        Object.entries(values).forEach(([k, v]) => payload.set(k, String(v ?? '')))
        if (uploadData.url) payload.set('logoUrl', uploadData.url)
        if (uploadData.publicId) payload.set('logoPublicId', uploadData.publicId)
        const res = await fetch('/api/submissions/create', { method: 'POST', body: payload })
        if (!res.ok) return alert('Failed to submit')
        alert('Submitted successfully'); reset(); setUploadData({})
      })} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input {...register('schoolName')} placeholder="School Name*" className="border rounded px-3 py-2" aria-invalid={!!errors.schoolName} />
          <input {...register('contactName')} placeholder="Contact Name*" className="border rounded px-3 py-2" aria-invalid={!!errors.contactName} />
          <input type="email" {...register('email')} placeholder="Email*" className="border rounded px-3 py-2" aria-invalid={!!errors.email} />
          <input {...register('phone')} placeholder="Phone" className="border rounded px-3 py-2" />
          <input {...register('city')} placeholder="City" className="border rounded px-3 py-2" />
          <input {...register('country')} placeholder="Country" className="border rounded px-3 py-2" />
          <input {...register('website')} placeholder="Website" className="border rounded px-3 py-2" />
          <input type="number" {...register('studentCount')} placeholder="Student Count" className="border rounded px-3 py-2" />
        </div>
        <textarea {...register('description')} placeholder="Describe your needs" className="border rounded px-3 py-2 w-full min-h-24" />

        <div className="space-y-2">
          <label className="block font-medium">School Logo</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {uploading && <p className="text-sm">Uploading...</p>}
          {uploadData.url && (
            <img src={uploadData.url} alt="logo preview" className="h-16 object-contain" />
          )}
        </div>

        <input type="hidden" name="logoUrl" />
        <input type="hidden" name="logoPublicId" />

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  )
}