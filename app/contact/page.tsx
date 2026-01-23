"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitContactAction } from "@/app/actions";
import { CheckCircle2, Loader2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        const formData = new FormData(e.currentTarget);
        try {
            await submitContactAction(formData);
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsPending(false);
        }
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero — Get in Touch */}
            <Section className="min-[70vh] flex items-center pt-32">
                <Container>
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                        <h1 className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/50">
                            Let's start a <br /> <span className="text-primary italic">Conversation.</span>
                        </h1>
                        <p className="text-xl md:text-4xl text-muted-foreground font-light max-w-4xl mx-auto leading-tight">
                            Whether you're a school owner looking to grow or a parent with a question, we're here to help you move forward.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Contact Grid */}
            <Section intensity="soft" className="py-24 border-y border-border/50 bg-muted/5">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        {/* Info Side */}
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">We're here <br /> for you.</h2>
                                <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
                                    Our team is dedicated to building the future of education in Ghana. Reach out to us directly or fill out the form.
                                </p>
                            </div>

                            <div className="grid gap-12">
                                <ContactItem
                                    icon={Mail}
                                    title="Email Us"
                                    content="info@edcomrade.com"
                                    link="mailto:info@edcomrade.com"
                                />
                                <ContactItem
                                    icon={Phone}
                                    title="Call Us"
                                    content="+233 55 528 4923"
                                    link="tel:+233555284923"
                                />
                                <ContactItem
                                    icon={MapPin}
                                    title="Visit Us"
                                    content="Accra Hub, Ghana, West Africa"
                                />
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                            <div className="relative bg-background border border-border/50 rounded-[3rem] p-8 md:p-12 shadow-2xl">
                                {isSuccess ? (
                                    <div className="py-12 text-center space-y-6 animate-in zoom-in duration-500">
                                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold">Message Sent!</h3>
                                        <p className="text-muted-foreground font-light max-w-sm mx-auto">
                                            Thank you for reaching out. A member of our team will get back to you shortly.
                                        </p>
                                        <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full">
                                            Send another message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            <FormGroup label="First Name" name="firstName" required placeholder="John" />
                                            <FormGroup label="Last Name" name="lastName" placeholder="Doe" />
                                        </div>
                                        <FormGroup label="Email Address" name="email" type="email" required placeholder="john@example.com" />
                                        <FormGroup label="School Name (Optional)" name="school" placeholder="The Royal Academy" />
                                        <div className="space-y-3">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">How can we help?</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                placeholder="Tell us a bit about your school or your question..."
                                                className="w-full bg-muted/30 border border-border/50 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                            />
                                        </div>
                                        <Button type="submit" size="xl" disabled={isPending} className="w-full rounded-2xl h-16 text-lg group">
                                            {isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                                                <>
                                                    Send Message <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}

function ContactItem({ icon: Icon, title, content, link }: { icon: any, title: string, content: string, link?: string }) {
    return (
        <div className="flex gap-8 group">
            <div className="w-16 h-16 rounded-[1.5rem] bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                <Icon className="w-7 h-7" />
            </div>
            <div className="space-y-1 pt-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{title}</h4>
                {link ? (
                    <a href={link} className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">{content}</a>
                ) : (
                    <p className="text-2xl font-bold tracking-tight">{content}</p>
                )}
            </div>
        </div>
    );
}

function FormGroup({ label, name, type = "text", required = false, placeholder }: { label: string, name: string, type?: string, required?: boolean, placeholder: string }) {
    return (
        <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{label}</label>
            <input
                type={type}
                name={name}
                required={required}
                placeholder={placeholder}
                className="w-full bg-muted/30 border border-border/50 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
        </div>
    );
}
