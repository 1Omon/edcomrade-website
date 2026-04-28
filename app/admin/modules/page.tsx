"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminModulesPage() {
    const [modules, setModules] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditingId, setIsEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        fetchModules();
    }, []);

    const fetchModules = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/modules");
            const data = await res.json();
            if (data.success) {
                setModules(data.data);
            }
        } catch (error) {
            console.error("Failed to load modules", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreate = async () => {
        const newModule = {
            name: "New Module",
            description: "",
            type: "Optional",
            pricing: { under100: "-", tier100_299: "-", tier300_499: "-", tier500Plus: "-" },
            order: modules.length
        };
        try {
            const res = await fetch("/api/modules", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newModule)
            });
            if (res.ok) fetchModules();
        } catch (error) {
            console.error("Failed to create", error);
        }
    };

    const handleUpdate = async (id: string) => {
        try {
            const res = await fetch(`/api/modules/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setIsEditingId(null);
                fetchModules();
            }
        } catch (error) {
            console.error("Failed to update", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this module?")) return;
        try {
            const res = await fetch(`/api/modules/${id}`, { method: "DELETE" });
            if (res.ok) fetchModules();
        } catch (error) {
            console.error("Failed to delete", error);
        }
    };

    const startEditing = (mod: any) => {
        setIsEditingId(mod._id);
        setFormData(mod);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Pioneer Modules</h1>
                    <p className="text-muted-foreground font-light text-lg">Manage modules and pricing displayed on the Schools page.</p>
                </div>
                <Button onClick={handleCreate} className="gap-2">
                    <Plus className="w-4 h-4" /> Add Module
                </Button>
            </div>

            {isLoading ? (
                <div className="text-muted-foreground animate-pulse p-4">Loading modules...</div>
            ) : (
                <div className="grid gap-6">
                    {modules.map((mod) => (
                        <div key={mod._id} className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
                            {isEditingId === mod._id ? (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-muted-foreground">Module Name</label>
                                            <input className="w-full border p-2 rounded mt-1" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-muted-foreground">Type</label>
                                            <select className="w-full border p-2 rounded mt-1" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
                                                <option>Optional</option><option>Required</option><option>Free</option><option>Best Value</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="text-xs font-bold text-muted-foreground">Description</label>
                                        <textarea className="w-full border p-2 rounded mt-1 h-20" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                                    </div>

                                    <div className="grid grid-cols-4 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-muted-foreground">Under 100</label>
                                            <input className="w-full border p-2 rounded mt-1" value={formData.pricing?.under100} onChange={e => setFormData({ ...formData, pricing: { ...formData.pricing, under100: e.target.value } })} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-muted-foreground">100-299</label>
                                            <input className="w-full border p-2 rounded mt-1" value={formData.pricing?.tier100_299} onChange={e => setFormData({ ...formData, pricing: { ...formData.pricing, tier100_299: e.target.value } })} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-muted-foreground">300-499</label>
                                            <input className="w-full border p-2 rounded mt-1" value={formData.pricing?.tier300_499} onChange={e => setFormData({ ...formData, pricing: { ...formData.pricing, tier300_499: e.target.value } })} />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-muted-foreground">500+</label>
                                            <input className="w-full border p-2 rounded mt-1" value={formData.pricing?.tier500Plus} onChange={e => setFormData({ ...formData, pricing: { ...formData.pricing, tier500Plus: e.target.value } })} />
                                        </div>
                                    </div>

                                    <div className="flex gap-2 justify-end pt-4">
                                        <Button variant="outline" onClick={() => setIsEditingId(null)}><X className="w-4 h-4 mr-2" /> Cancel</Button>
                                        <Button onClick={() => handleUpdate(mod._id)}><Check className="w-4 h-4 mr-2" /> Save Changes</Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex gap-3 items-center">
                                                <h3 className="text-lg font-bold">{mod.name}</h3>
                                                <span className="text-xs px-2 py-1 bg-muted rounded font-semibold">{mod.type}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{mod.description}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" onClick={() => startEditing(mod)}><Edit2 className="w-4 h-4" /></Button>
                                            <Button variant="destructive" size="sm" onClick={() => handleDelete(mod._id)}><Trash2 className="w-4 h-4" /></Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border/50 text-sm">
                                        <div><span className="text-muted-foreground text-xs block mb-1">Under 100</span><span className="font-semibold">{mod.pricing?.under100 || '-'}</span></div>
                                        <div><span className="text-muted-foreground text-xs block mb-1">100-299</span><span className="font-semibold">{mod.pricing?.tier100_299 || '-'}</span></div>
                                        <div><span className="text-muted-foreground text-xs block mb-1">300-499</span><span className="font-semibold">{mod.pricing?.tier300_499 || '-'}</span></div>
                                        <div><span className="text-muted-foreground text-xs block mb-1">500+</span><span className="font-semibold">{mod.pricing?.tier500Plus || '-'}</span></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {modules.length === 0 && (
                        <div className="text-center py-20 text-muted-foreground">No modules created yet.</div>
                    )}
                </div>
            )}
        </div>
    );
}
