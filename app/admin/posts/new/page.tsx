"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import RichTextEditor from "@/components/rich-text-editor";

export default function NewPostPage() {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        type: "blog",
        author: "Admin",
        content: "",
        isPublished: false
    });

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
            const res = await fetch("/api/posts", {
                method: "POST",
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

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/50 pb-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/posts"><ArrowLeft className="w-5 h-5" /></Link>
                    </Button>
                    <h1 className="text-3xl font-bold tracking-tight">Write New Post</h1>
                </div>
                <div className="flex gap-3">
                    <Button type="button" variant="outline" onClick={(e) => {
                        setFormData(prev => ({ ...prev, isPublished: false }));
                        handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                    }}>
                        Save as Draft
                    </Button>
                    <Button type="submit" onClick={() => setFormData({ ...formData, isPublished: true })} disabled={isSaving} className="gap-2">
                        <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Publish Post"}
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">Post Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={handleTitleChange}
                            placeholder="Enter a captivating title..."
                            className="w-full text-2xl font-bold bg-transparent border-b border-border/50 pb-2 outline-none focus:border-primary transition-colors placeholder:text-muted"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">Content</label>
                        <RichTextEditor content={formData.content} onChange={(val) => setFormData({ ...formData, content: val })} />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-muted/20 p-6 rounded-2xl border border-border/50 space-y-4">
                        <h3 className="font-bold border-b border-border/50 pb-2 mb-4">Post Settings</h3>
                        
                        <div>
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">Type</label>
                            <select
                                value={formData.type}
                                onChange={e => setFormData({ ...formData, type: e.target.value })}
                                className="w-full bg-background border border-border/50 rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                            >
                                <option value="blog">Blog Post</option>
                                <option value="case-study">Case Study</option>
                                <option value="success-story">Success Story</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">URL Slug</label>
                            <input
                                type="text"
                                value={formData.slug}
                                onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full bg-background border border-border/50 rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">Author Name</label>
                            <input
                                type="text"
                                value={formData.author}
                                onChange={e => setFormData({ ...formData, author: e.target.value })}
                                className="w-full bg-background border border-border/50 rounded-lg p-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
