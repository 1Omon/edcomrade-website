import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Rocket, Zap, MonitorPlay } from "lucide-react";

export const metadata = {
    title: "The Pioneers | Shaping the Future",
    description: "Join the 25 visionary schools shaping the future of education technology in Ghana.",
};

export default function PioneersPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/20">
            <Navigation />

            {/* Hero */}
            <Section className="min-h-[80vh] flex items-center justify-center text-center">
                <Container>
                    <div className="max-w-4xl mx-auto space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            The Pioneers Program
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.95]">
                            25 Schools. <br /> One Future.
                        </h1>

                        <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                            We are looking for the boldest school leaders in Ghana to help us build the next generation of education software.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                            <Button size="xl" className="rounded-full px-10 text-lg shadow-xl" asChild>
                                <Link href="#apply">Request Invitation</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* The Offer */}
            <Section intensity="soft">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold tracking-tight">
                                Not for everyone. <br /> Just the visionary.
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                The Pioneers Program is an exclusive partnership. You aren't just buying software; you are shaping it.
                                You get direct access to our engineering team, early access to new features, and "white glove" onboarding support.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <BenefitRow
                                icon={Zap}
                                title="6 Months Free"
                                desc="Full access to the entire EdComrade ecosystem (ERP + ParentAide) at zero cost for two terms."
                            />
                            <BenefitRow
                                icon={Rocket}
                                title="Concierge Onboarding"
                                desc="We don't just send you a login. We come to your school, train your staff, and import your data for you."
                            />
                            <BenefitRow
                                icon={MonitorPlay}
                                title="Engineering Access"
                                desc="Feature request? Bug? You have a direct line to our CTO. Your feedback builds the product."
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Application Form Placeholder */}
            <Section id="apply" intensity="none" className="py-24">
                <Container className="max-w-xl text-center space-y-8">
                    <h2 className="text-3xl font-bold">Are you a Pioneer?</h2>
                    <p className="text-muted-foreground">Applications are reviewed on a rolling basis. Only 25 spots available for the 2026 cohort.</p>

                    <div className="bg-card border border-border rounded-3xl p-8 shadow-lg text-left space-y-4">
                        {/* Simple Email Capture Form Logic would go here */}
                        <div>
                            <label className="block text-sm font-medium mb-2">School Name</label>
                            <input type="text" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="e.g. Great Minds Academy" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="headmaster@school.com" />
                        </div>
                        <Button className="w-full rounded-lg h-12 text-lg font-medium mt-4">
                            Submit Application
                        </Button>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    )
}

function BenefitRow({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
