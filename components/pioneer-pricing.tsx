"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface PioneerModule {
    _id: string;
    name: string;
    description: string;
    type: string;
    pricing: {
        under100: string;
        tier100_299: string;
        tier300_499: string;
        tier500Plus: string;
    };
}

export function PioneerPricing() {
    const [modules, setModules] = useState<PioneerModule[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchModules() {
            try {
                const res = await fetch('/api/modules');
                const data = await res.json();
                if (data.success) {
                    setModules(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch modules", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchModules();
    }, []);

    if (isLoading) {
        return (
            <Section intensity="soft" className="py-20 border-y border-border/50 text-center">
                <p className="text-muted-foreground animate-pulse">Loading pricing modules...</p>
            </Section>
        );
    }

    if (modules.length === 0) {
        return null;
    }

    return (
        <Section intensity="soft" className="py-32 border-y border-border/50">
            <Container className="max-w-6xl">
                <div className="space-y-6 text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Pricing & Packages</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Simple, transparent pricing.</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Pioneers is billed per term — three times per academic year. Every school starts with Core Admin. Add modules at the start of any new term. Pricing scales with enrollment.
                    </p>
                </div>

                <div className="overflow-hidden border border-border/50 rounded-2xl bg-card shadow-lg">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    <TableHead className="w-[30%] min-w-[250px]">MODULE</TableHead>
                                    <TableHead>TYPE</TableHead>
                                    <TableHead>Under 100</TableHead>
                                    <TableHead>100–299</TableHead>
                                    <TableHead>300–499</TableHead>
                                    <TableHead>500+</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {modules.map((mod) => (
                                    <TableRow key={mod._id} className="last:border-0 border-b border-border/50">
                                        <TableCell className="font-medium align-top py-4">
                                            <div className="text-foreground font-bold">{mod.name}</div>
                                            {mod.description && (
                                                <div className="text-xs text-muted-foreground mt-1 italic">{mod.description}</div>
                                            )}
                                        </TableCell>
                                        <TableCell className="align-top py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                                mod.type === 'Required' ? 'bg-primary/10 text-primary' :
                                                mod.type === 'Free' ? 'bg-green-500/10 text-green-500' :
                                                mod.type === 'Best Value' ? 'bg-secondary/10 text-secondary-foreground' :
                                                'bg-zinc-100 dark:bg-zinc-800 text-muted-foreground'
                                            }`}>
                                                {mod.type}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-semibold align-top py-4">{mod.pricing.under100}</TableCell>
                                        <TableCell className="font-semibold align-top py-4">{mod.pricing.tier100_299}</TableCell>
                                        <TableCell className="font-semibold align-top py-4">{mod.pricing.tier300_499}</TableCell>
                                        <TableCell className="font-semibold align-top py-4">{mod.pricing.tier500Plus}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
                    *All prices are per term. Three terms per academic year. Module changes take effect at the start of a new term. School size tier is reviewed at the start of each academic year.
                </p>
            </Container>
        </Section>
    );
}
