import React from "react";

async function getSchool(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/schools/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load');
  return res.json() as Promise<{ school: any }>;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { school } = await getSchool(params.id);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-medium mb-6">Edit School</h1>
      <form action={async (formData) => {
        const res = await fetch(`/api/schools/${params.id}`, { method: 'PUT', body: new FormData(formData as any) })
        if (!res.ok) alert('Failed to save')
        else window.location.href = '/admin/schools'
      }} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="schoolName" defaultValue={school.schoolName} placeholder="School Name*" required className="border rounded px-3 py-2" />
          <input name="email" type="email" defaultValue={school.email || ''} placeholder="Email" className="border rounded px-3 py-2" />
          <input name="phone" defaultValue={school.phone || ''} placeholder="Phone" className="border rounded px-3 py-2" />
          <input name="city" defaultValue={school.city || ''} placeholder="City" className="border rounded px-3 py-2" />
          <input name="country" defaultValue={school.country || ''} placeholder="Country" className="border rounded px-3 py-2" />
          <input name="website" defaultValue={school.website || ''} placeholder="Website" className="border rounded px-3 py-2" />
          <input type="number" name="studentCount" defaultValue={school.studentCount || ''} placeholder="Student Count" className="border rounded px-3 py-2" />
        </div>
        <textarea name="description" defaultValue={school.description || ''} placeholder="Description" className="border rounded px-3 py-2 w-full min-h-24" />

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Save</button>
      </form>

      <form action={async () => {
        const res = await fetch(`/api/schools/${params.id}`, { method: 'DELETE' })
        if (!res.ok) alert('Failed to delete')
        else window.location.href = '/admin/schools'
      }} className="pt-6">
        <button type="submit" className="text-red-600 underline">Delete School</button>
      </form>
    </div>
  );
}


