import {
    Cpu,
    Network,
    Telescope,
    ShieldCheck,
    Fingerprint,
    Zap,
    Globe,
    Lock,
    Eye,
    BarChart3
} from "lucide-react";

export const CONTENT_BY_ROLE = {
    school: {
        hero: {
            badge: "Built for Ghanaian Schools",
            title: "Run your school without the chaos.",
            subtitle: "Records, fees, parent communication, and staff management — all in one place. Helping your school grow without the guesswork.",
            ctaPrimary: "Start Your Free 6 Months",
            ctaSecondary: "Contact Us",
        },
        reality: {
            badge: "The Problem We Are Solving",
            title: "Ghana's best schools are invisible online.",
            description: "Thousands of excellent private schools are impossible for parents to find, verify, or compare online. At the same time, manual paperwork is slowing you down.",
            items: [
                {
                    icon: Globe,
                    title: "Get Found",
                    desc: "If parents can't find your verified profile on Google, they will choose the school they *can* find.",
                },
                {
                    icon: BarChart3,
                    title: "Fee Collection",
                    desc: "Automated billing and clear tracking. Give your bursar real-time visibility without the manual chase.",
                },
                {
                    icon: Zap,
                    title: "Time Back",
                    desc: "Automated grading and attendance tracking. Less paperwork means your teachers can focus on teaching.",
                },
                {
                    icon: Lock,
                    title: "History Protected",
                    desc: "Every record and transaction safely stored. Your school's history stays with you, always.",
                },
            ],
        },
    },
    parent: {
        hero: {
            badge: "The Parent Connection",
            title: "Your child's school — in your pocket.",
            subtitle: "ParentAide gives you a real-time window into your child's education. Grades, attendance, and fees — all in one place.",
            ctaPrimary: "Get the App",
            ctaSecondary: "Find a School",
        },
        reality: {
            badge: "Stay Connected",
            title: "No more chasing. No more guessing.",
            description: "Education should not be a mystery. ParentAide is the direct, clear connection between your home and your child's school.",
            items: [
                {
                    icon: Eye,
                    title: "Daily Progress",
                    desc: "Instant attendance alerts and real-time grade updates. Know how they're doing every single day.",
                },
                {
                    icon: Network,
                    title: "Clear Communication",
                    desc: "A secure, easy channel to reach teachers and administrators. No more missed messages.",
                },
                {
                    icon: ShieldCheck,
                    title: "Fee Management",
                    desc: "Pay fees and view history from your phone. No more lost receipts or balance confusion.",
                },
                {
                    icon: Telescope,
                    title: "A Record for Life",
                    desc: "A verified, organised record of your child's school journey — from first day to graduation.",
                },
            ],
        },
    },
    public: {
        hero: {
            badge: "Ghana's Private School Platform",
            title: "Be found and trusted.",
            subtitle: "EdComrade gives private schools in Ghana the tools and visibility to grow — without the guesswork.",
            ctaPrimary: "For Schools",
            ctaSecondary: "Learn More",
        },
        reality: {
            badge: "The Problem We Are Solving",
            title: "The Digital Gap",
            description: "Ghana's best schools are often hidden from parent view. We bridge the gap between excellence in the classroom and visibility online.",
            items: [
                {
                    icon: Globe,
                    title: "Verified Profiles",
                    desc: "Complete, trusted data for parents searching for the right school for their children.",
                },
                {
                    icon: ShieldCheck,
                    title: "Found by Families",
                    desc: "We ensure your school appears on Google Maps and Schoolpedia when parents search in your area.",
                },
                {
                    icon: Zap,
                    title: "Simple Setup",
                    desc: "No technical team needed. We visit your school, handle the tech, and support your growth.",
                },
                {
                    icon: BarChart3,
                    title: "Data Clarity",
                    desc: "Clear insights for school heads to make better decisions based on data, not instinct.",
                },
            ],
        },
    },
};
