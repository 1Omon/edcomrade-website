"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Trash2, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminPostsPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/posts");
            const data = await res.json();
            if (data.success) {
                setPosts(data.data);
            }
        } catch (error) {
            console.error("Failed to load posts", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;
        try {
            const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
            if (res.ok) fetchPosts();
        } catch (error) {
            console.error("Failed to delete post", error);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-6 border-b border-[var(--rule)]">
                <div>
                    <span className="badge badge-gold mb-2">Content Management</span>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--navy)]">Blog &amp; Stories</h1>
                    <p className="text-[var(--ink-mid)] font-normal text-base mt-1">Create and publish platform updates, case studies, and news.</p>
                </div>
                <Button asChild className="btn-primary text-xs">
                    <Link href="/admin/posts/new">
                        <Plus className="w-4 h-4 mr-1" /> Write New Post
                    </Link>
                </Button>
            </div>

            {isLoading ? (
                <div className="text-[var(--ink-mid)] animate-pulse p-4">Loading content library...</div>
            ) : (
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <div key={post._id} className="card p-6 bg-white flex flex-col md:flex-row justify-between gap-6 md:items-center">
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-xl font-bold tracking-tight text-[var(--navy)]">{post.title}</h3>
                                    <span className="badge badge-blue text-xs uppercase">
                                        {post.type?.replace('-', ' ')}
                                    </span>
                                </div>
                                <div className="flex gap-4 text-sm text-[var(--ink-mid)]">
                                    <span>By {post.author}</span>
                                    <span>•</span>
                                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        {post.isPublished ? (
                                            <><Globe className="w-3.5 h-3.5 text-[var(--green-mid)]" /> <span className="text-[var(--green-mid)] font-semibold">Published</span></>
                                        ) : (
                                            <><FileText className="w-3.5 h-3.5" /> Draft</>
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <Button variant="outline" size="sm" asChild className="border-[var(--rule)]">
                                    <Link href={`/admin/posts/${post._id}/edit`}><Edit2 className="w-4 h-4 mr-1" /> Edit</Link>
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete(post._id)}>
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    {posts.length === 0 && (
                        <div className="text-center py-20 card bg-white">
                            <FileText className="w-10 h-10 text-[var(--ink-mid)] mx-auto mb-3" />
                            <h3 className="text-2xl font-bold font-serif text-[var(--navy)] mb-2">No Stories Published</h3>
                            <p className="text-[var(--ink-mid)] mb-6">Create your first blog post, announcement, or case study.</p>
                            <Button asChild className="btn-primary text-xs">
                                <Link href="/admin/posts/new">Write Post</Link>
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
