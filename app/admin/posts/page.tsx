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

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'blog': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'case-study': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
            case 'success-story': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
            default: return 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20';
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
                    <p className="text-muted-foreground font-light text-lg">Manage blogs, case studies, and success stories.</p>
                </div>
                <Button asChild className="gap-2">
                    <Link href="/admin/posts/new">
                        <Plus className="w-4 h-4" /> Write Post
                    </Link>
                </Button>
            </div>

            {isLoading ? (
                <div className="text-muted-foreground animate-pulse p-4">Loading posts...</div>
            ) : (
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <div key={post._id} className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm hover:border-primary/20 transition-colors flex flex-col md:flex-row justify-between gap-6 md:items-center">
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-xl font-bold tracking-tight">{post.title}</h3>
                                    <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md border ${getTypeColor(post.type)}`}>
                                        {post.type.replace('-', ' ')}
                                    </span>
                                </div>
                                <div className="flex gap-4 text-sm text-muted-foreground">
                                    <span>By {post.author}</span>
                                    <span>•</span>
                                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        {post.isPublished ? (
                                            <><Globe className="w-3 h-3 text-green-500" /> <span className="text-green-600 font-medium">Published</span></>
                                        ) : (
                                            <><FileText className="w-3 h-3" /> Draft</>
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/admin/posts/${post._id}/edit`}><Edit2 className="w-4 h-4 mr-2" /> Edit</Link>
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete(post._id)}>
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    {posts.length === 0 && (
                        <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No posts yet</h3>
                            <p className="text-muted-foreground mb-6">Create your first blog post or case study.</p>
                            <Button asChild>
                                <Link href="/admin/posts/new">Write Post</Link>
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
