"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Bold, Italic, List, ListOrdered, Image as ImageIcon, Heading2 } from 'lucide-react';
import { useCallback } from 'react';

export default function RichTextEditor({ content, onChange }: { content: string, onChange: (val: string) => void }) {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Image.configure({
                inline: true,
                allowBase64: true,
            })
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'min-h-[400px] w-full border border-border/50 rounded-b-lg p-4 focus:outline-none prose prose-zinc dark:prose-invert max-w-none',
            },
        },
    });

    const addImage = useCallback(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async () => {
            if (input.files?.length) {
                const file = input.files[0];
                const formData = new FormData();
                formData.append('file', file);
                try {
                    const res = await fetch('/api/upload', {
                        method: 'POST',
                        body: formData
                    });
                    const data = await res.json();
                    if (data.url) {
                        editor?.chain().focus().setImage({ src: data.url }).run();
                    }
                } catch (error) {
                    console.error('Image upload failed', error);
                }
            }
        };
        input.click();
    }, [editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className="w-full flex flex-col mt-2 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 p-2 border border-b-0 border-border/50 rounded-t-lg bg-muted/20">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-2 rounded hover:bg-muted ${editor.isActive('bold') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
                    type="button"
                >
                    <Bold className="w-4 h-4" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-2 rounded hover:bg-muted ${editor.isActive('italic') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
                    type="button"
                >
                    <Italic className="w-4 h-4" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`p-2 rounded hover:bg-muted ${editor.isActive('heading', { level: 2 }) ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
                    type="button"
                >
                    <Heading2 className="w-4 h-4" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-2 rounded hover:bg-muted ${editor.isActive('bulletList') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
                    type="button"
                >
                    <List className="w-4 h-4" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-2 rounded hover:bg-muted ${editor.isActive('orderedList') ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
                    type="button"
                >
                    <ListOrdered className="w-4 h-4" />
                </button>
                <button
                    onClick={addImage}
                    className="p-2 rounded hover:bg-muted text-muted-foreground ml-auto"
                    type="button"
                >
                    <ImageIcon className="w-4 h-4" />
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
}
