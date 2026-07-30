"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SubmissionActions } from "@/components/submission-actions";
import { 
    Mail, 
    Phone, 
    User, 
    MapPin, 
    ChevronDown, 
    ChevronUp, 
    Globe, 
    Users2, 
    Info 
} from "lucide-react";

export function SubmissionCard({ s }: { s: any }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={cn(
                "group bg-background border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:border-primary/30 transition-all duration-300 relative",
                isExpanded && "border-primary/30 shadow-xl shadow-primary/5"
            )}
        >
            <div className="absolute top-0 right-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-6">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="w-20 h-20 rounded-2xl bg-muted/30 flex items-center justify-center shrink-0 border border-border/50 overflow-hidden shadow-sm">
                        {s.logoUrl ? (
                            <img src={s.logoUrl} alt="logo" className="w-full h-full object-contain p-2" />
                        ) : (
                            <span className="text-2xl font-bold text-muted-foreground/30">{s.schoolName?.charAt(0)}</span>
                        )}
                    </div>

                    <div className="flex-grow space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold tracking-tight">{s.schoolName}</h3>
                            <div className={cn(
                                "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                                s.type === "application" && "bg-blue-500/10 text-blue-600 border-blue-500/20",
                                s.type === "inquiry" && "bg-amber-500/10 text-amber-600 border-amber-500/20",
                                s.type === "partnership" && "bg-purple-500/10 text-purple-600 border-purple-500/20",
                                s.type === "pioneer" && "bg-primary/10 text-primary border-primary/20",
                                s.type === "deployment_request" && "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
                            )}>
                                {s.type === "deployment_request" ? "Deployment Request" : (s.type || "Application")}
                            </div>
                            <div className={cn(
                                "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                                s.status === "approved" && "bg-green-500/10 text-green-600 border-green-500/20",
                                s.status === "archived" && "bg-slate-500/10 text-slate-600 border-slate-500/20",
                                (!s.status || s.status === "pending" || s.status === "onboarding") && "bg-blue-500/10 text-blue-600 border-blue-500/20",
                            )}>
                                {s.status || "Pending"}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-light">
                            <span className="flex items-center gap-1.5 font-medium text-foreground">
                                <User className="w-3.5 h-3.5" /> {s.contactName}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Mail className="w-3.5 h-3.5" /> {s.email}
                            </span>
                            {s.phone && (
                                <span className="flex items-center gap-1.5">
                                    <Phone className="w-3.5 h-3.5" /> {s.phone}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex flex-col items-end gap-2 text-right">
                        <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold">
                            Received {new Date(s.createdAt).toLocaleDateString()}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-xs font-bold hover:bg-muted/80 transition-colors flex items-center gap-2"
                            >
                                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                {isExpanded ? "Hide Data" : "More Data"}
                            </button>
                            <SubmissionActions id={s._id.toString()} currentStatus={s.status || 'pending'} />
                        </div>
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div className="px-6 pb-8 pt-2 border-t border-border/50 bg-muted/10 animate-in slide-in-from-top-2 duration-300">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            {s.type === "deployment_request" && s.deploymentDetails ? (
                                <div className="space-y-3 bg-background p-4 rounded-xl border border-border/50">
                                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Simulated Deployment Config</span>
                                        <span className="text-sm font-bold text-emerald-600">
                                            GHS {s.deploymentDetails.costPerTermGHS?.toFixed(2)} / term
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div><strong>Total Enrolment:</strong> {s.deploymentDetails.totalStudents} Students</div>
                                        <div><strong>Annual Invoice:</strong> GHS {s.deploymentDetails.annualCostGHS?.toFixed(2)}</div>
                                        <div><strong>5-Year Lock:</strong> {s.deploymentDetails.isFiveYearLock ? "Yes (Active)" : "No"}</div>
                                        <div><strong>15% Bundle Discount:</strong> {s.deploymentDetails.hasBundleDiscount ? "Yes (Active)" : "No"}</div>
                                    </div>
                                    <div className="pt-2 border-t border-border/50">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">Selected Modules ({s.deploymentDetails.selectedModules?.length}):</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {s.deploymentDetails.selectedModules?.map((m: string) => (
                                                <span key={m} className="px-2 py-0.5 rounded bg-muted text-[11px] font-semibold text-foreground border border-border/40">
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">About the School</label>
                                    <p className="text-foreground font-light leading-relaxed">
                                        {s.description || "No description provided."}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="space-y-6">
                            <div className="grid gap-4">
                                <DetailItem icon={MapPin} label="Location" value={`${s.city || '-'}, ${s.country || 'Ghana'}`} />
                                <DetailItem icon={Globe} label="Website" value={s.website} isLink />
                                <DetailItem icon={Users2} label="Student Count" value={s.studentCount ? `${s.studentCount} Students` : '-'} />
                                <DetailItem icon={Info} label="Type" value={s.type} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DetailItem({ icon: Icon, label, value, isLink }: { icon: any, label: string, value?: string | number, isLink?: boolean }) {
    if (!value) return null;
    return (
        <div className="space-y-1">
            <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground block">{label}</span>
            <div className="flex items-center gap-2 text-sm">
                <Icon className="w-3.5 h-3.5 text-primary" />
                {isLink && typeof value === 'string' ? (
                    <a href={value.startsWith('http') ? value : `https://${value}`} target="_blank" className="text-primary hover:underline truncate">
                        {value}
                    </a>
                ) : (
                    <span className="font-medium truncate">{value}</span>
                )}
            </div>
        </div>
    );
}
