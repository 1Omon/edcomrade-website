"use client";

import { useState } from "react";
import { ArrowRight, TrendingUp, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

export function ROICalculator() {
    const [students, setStudents] = useState<number>(500);
    const [tuition, setTuition] = useState<number>(2000);

    // Assumptions based on industry data
    const collectionInefficiency = 0.15; // 15% lost to late payments/leakage
    const adminHoursPerStudent = 4; // Hours spent per student per term on manual work
    const adminHourlyRate = 20; // GHS conservative estimate

    const termlyRevenue = students * tuition;
    const lostRevenue = termlyRevenue * collectionInefficiency;
    const recoveredRevenue = lostRevenue * 0.8; // We assume we can recover 80% of lost revenue
    const hoursSaved = students * adminHoursPerStudent * 0.7; // 70% time reduction
    const costSavings = hoursSaved * adminHourlyRate;

    const totalValue = recoveredRevenue + costSavings;

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Input Section */}
                <div className="space-y-8 bg-background p-8 rounded-3xl border border-border shadow-sm">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <Calculator className="w-5 h-5" />
                            <h3 className="font-medium">Estimate Your Impact</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            See what switching to a digital operating system could mean for your bottom line per term.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-sm">Number of Students</label>
                                <div className="px-3 py-1 rounded-md bg-secondary/10 text-secondary font-bold font-mono">
                                    {students.toLocaleString()}
                                </div>
                            </div>
                            <div className="relative w-full h-2 bg-muted rounded-full">
                                <input
                                    type="range"
                                    min="50"
                                    max="5000"
                                    step="10"
                                    value={students}
                                    onChange={(e) => setStudents(parseInt(e.target.value))}
                                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div
                                    className="absolute h-full bg-secondary rounded-full"
                                    style={{ width: `${((students - 50) / (5000 - 50)) * 100}%` }}
                                ></div>
                                <div
                                    className="absolute h-4 w-4 bg-secondary border-2 border-white rounded-full top-1/2 -translate-y-1/2 shadow-md pointer-events-none"
                                    style={{ left: `${((students - 50) / (5000 - 50)) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="font-medium text-sm">Average Termly Tuition (GHS)</label>
                                <div className="px-3 py-1 rounded-md bg-secondary/10 text-secondary font-bold font-mono">
                                    ₵{tuition.toLocaleString()}
                                </div>
                            </div>
                            <div className="relative w-full h-2 bg-muted rounded-full">
                                <input
                                    type="range"
                                    min="500"
                                    max="20000"
                                    step="100"
                                    value={tuition}
                                    onChange={(e) => setTuition(parseInt(e.target.value))}
                                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div
                                    className="absolute h-full bg-secondary rounded-full"
                                    style={{ width: `${((tuition - 500) / (20000 - 500)) * 100}%` }}
                                ></div>
                                <div
                                    className="absolute h-4 w-4 bg-secondary border-2 border-white rounded-full top-1/2 -translate-y-1/2 shadow-md pointer-events-none"
                                    style={{ left: `${((tuition - 500) / (20000 - 500)) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-primary text-primary-foreground p-8 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="space-y-6 relative z-10">
                        <div>
                            <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-1">
                                Potential Recovered Revenue
                            </p>
                            <div className="text-4xl lg:text-5xl font-bold tracking-tight">
                                ₵{recoveredRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </div>
                            <p className="text-xs text-primary-foreground/50 mt-2">
                                *Based on reducing fee leakage by 80%
                            </p>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-white/10">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                                <span className="font-medium">Operational Savings</span>
                            </div>
                            <p className="text-2xl font-light opacity-90">
                                ~{Math.round(hoursSaved).toLocaleString()} Admin Hours Saved
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 relative z-10">
                        <button className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
                            Unlock This Value
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
