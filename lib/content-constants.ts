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
            badge: "Ecosystem Layer 1: Infrastructure",
            title: "Total Institutional Control.",
            subtitle: "The Operating System for African Education. Visibility, dignity, and interoperability built into your foundation.",
            ctaPrimary: "Deploy Infrastructure",
            ctaSecondary: "Digital 100",
        },
        reality: {
            badge: "Institutional Audit",
            title: "The Invisible Leaks",
            description: "Most schools aren't failing—they are leaking. Leaking time through paperwork. Leaking fees through poor records. Leaking reputation through digital invisibility.",
            items: [
                {
                    icon: Fingerprint,
                    title: "Institutional Identity",
                    desc: "If parents can't find your verified profile on Google, you don't exist in their world.",
                },
                {
                    icon: ShieldCheck,
                    title: "Fee Integrity",
                    desc: "Stop the confusion. Digital records that provide dignity to both the bursar and the parent.",
                },
                {
                    icon: Zap,
                    title: "Staff Automation",
                    desc: "Free your teachers from the prison of lesson notes and manual grading. Let them teach.",
                },
                {
                    icon: Lock,
                    title: "Data Sovereignty",
                    desc: "Your records, your history, your property. Protected by infrastructure-grade security.",
                },
            ],
        },
    },
    parent: {
        hero: {
            badge: "Ecosystem Layer 2: Network",
            title: "Digital Peace of Mind.",
            subtitle: "Beyond a student portal—a direct connection to the institutions shaping your child's future. Legitimacy in every update.",
            ctaPrimary: "Join the Network",
            ctaSecondary: "Find Verified Schools",
        },
        reality: {
            badge: "The Parent Pulse",
            title: "End the School 'Black Box'",
            description: "Education shouldn't be a mystery you pay for. The ParentAide network provides a window into the reality of your child's journey.",
            items: [
                {
                    icon: Eye,
                    title: "Real-time Visibility",
                    desc: "Know they arrived. Know they ate. Know they learned. No more guessing until report day.",
                },
                {
                    icon: Network,
                    title: "Direct Connection",
                    desc: "One channel for every teacher, every announcement, every event. Zero noise.",
                },
                {
                    icon: ShieldCheck,
                    title: "Verified Ledger",
                    desc: "See every payment and every receipt instantly on your phone. Financial clarity for your child.",
                },
                {
                    icon: Telescope,
                    title: "Future Intelligence",
                    desc: "Identify strengths and gaps early through data-driven insights, not just end-of-term comments.",
                },
            ],
        },
    },
    public: {
        hero: {
            badge: "Ecosystem Layer 3: Intelligence",
            title: "Africa's Education Network.",
            subtitle: "Connecting visibility, trust, and interoperability to solve the $50B private education crisis in Africa.",
            ctaPrimary: "Explore The Map",
            ctaSecondary: "For Institutions",
        },
        reality: {
            badge: "Infrastructure Gap",
            title: "The Trust Deficit",
            description: "African education is a fragmented ocean of $50B in tuition. We are the digital bridge that turns schools into institutions and parents into partners.",
            items: [
                {
                    icon: Globe,
                    title: "Schoolpedia: The Record",
                    desc: "The single, verified record of truth for every educational institution in Ghana.",
                },
                {
                    icon: BarChart3,
                    title: "Systemic Intelligence",
                    desc: "Data-driven insights for policy makers, school groups, and the Ghanaian education ecosystem.",
                },
                {
                    icon: Cpu,
                    title: "EdComrade OS",
                    desc: "The underlying technology that makes African schools inevitable on the global stage.",
                },
                {
                    icon: ShieldCheck,
                    title: "Standardized Trust",
                    desc: "Verification protocols that ensure quality and accountability for the next generation.",
                },
            ],
        },
    },
};
