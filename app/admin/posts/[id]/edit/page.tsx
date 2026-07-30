"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import RichTextEditor from "@/components/rich-text-editor";

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const resolvedParams = use(params);
    const id = resolvedParams.id;
    
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        type: "blog",
        author: "Admin",
        content: "",
        isPublished: false
    });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts/${id}`);
                const data = await res.json();
                if (data.success) {
                    setFormData(data.data);
                }
            } catch (error) {
                console.error("Failed to load post", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData(prev => ({
            ...prev,
            title,
            slug: prev.slug === generateSlug(prev.title) || prev.slug === '' ? generateSlug(title) : prev.slug
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const res = await fetch(`/api/posts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                router.push("/admin/posts");
                router.refresh();
            } else {
                const err = await res.json();
                alert(`Failed to save: ${err.error}`);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div className="p-8 text-center animate-pulse text-[var(--ink-mid)] font-semibold">Loading article content...</div>;

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[var(--rule)] pb-6">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild type="button" className="border-[var(--rule)]">
                        <Link href="/admin/posts"><ArrowLeft className="w-4 h-4 text-[var(--navy)]" /></Link>
                    </Button>
                    <div>
                        <span className="badge badge-blue mb-1">Content Management</span>
                        <h1 className="text-3xl font-bold tracking-tight text-[var(--navy)]">Edit Story</h1>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button type="button" variant="outline" className="border-[var(--rule)]" onClick={() => {
                        setFormData(prev => ({ ...prev, isPublished: false }));
                        handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                    }}>
                        Save as Draft
                    </Button>
                    <Button type="submit" onClick={() => setFormData({ ...formData, isPublished: true })} disabled={isSaving} className="btn-primary text-xs gap-2">
                        <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Update Post"}
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div className="card p-6 bg-white">
                        <label className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider mb-2 block">Article Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={handleTitleChange}
                            placeholder="Enter article title..."
                            className="w-full text-2xl font-bold text-[var(--navy)] bg-transparent border-b border-[var(--rule)] pb-3 outline-none focus:border-[var(--cyan)] transition-colors placeholder:text-[var(--ink-mid)]"
                            required
                        />
                    </div>
                    <div className="card p-6 bg-white">
                        <label className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider mb-2 block">Body Content</label>
                        <RichTextEditor content={formData.content} onChange={(val) => setFormData({ ...formData, content: val })} />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="card p-6 bg-white space-y-4">
                        <h3 className="font-bold text-[var(--navy)] border-b border-[var(--rule)] pb-3">Publication Details</h3>
                        
                        <div>
                            <label className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider mb-2 block">Category Type</label>
                            <select
                                value={formData.type}
                                onChange={e => setFormData({ ...formData, type: e.target.value })}
                                className="w-full bg-[var(--paper-tint)] border border-[var(--rule)] rounded-xl p-2.5 text-sm outline-none text-[var(--navy)] font-medium"
                            >
                                <option value="blog">Blog Post</option>
                                <option value="case-study">Case Study</option>
                                <option value="success-story">Success Story</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider mb-2 block">URL Slug</label>
                            <input
                                type="text"
                                value={formData.slug}
                                onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full bg-[var(--paper-tint)] border border-[var(--rule)] rounded-xl p-2.5 text-sm outline-none text-[var(--navy)] font-medium"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-[var(--navy)] uppercase tracking-wider mb-2 block">Author Name</label>
                            <input
                                type="text"
                                value={formData.author}
                                onChange={e => setFormData({ ...formData, author: e.target.value })}
                                className="w-full bg-[var(--paper-tint)] border border-[var(--rule)] rounded-xl p-2.5 text-sm outline-none text-[var(--navy)] font-medium"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
