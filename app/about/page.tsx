import { MinimalNav } from "@/components/minimal-nav";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Eye,
  Cog,
  BarChart,
  Users,
  Target,
  Rocket
} from "lucide-react";
import { Footer } from "@/components/footer";


export const metadata: Metadata = {
  title: "About Us | The EdComrade Story",
  description: "We are building the digital operating system for African education.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            The EdComrade <br />
            <span className="text-primary">Genesis</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            We didn't start with code. We started with a question: <br />
            <span className="text-foreground italic">"Why are our smartest schools still running on paper?"</span>
          </p>
        </div>
      </section>

      {/* Image Banner */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden h-[500px] shadow-2xl">
          <Image
            src="/young-african-computer-science-students-working-on.jpg"
            alt="EdComrade Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-10 left-10 text-white max-w-xl">
            <p className="text-2xl font-bold">Born in a dorm room. <br />Built for a continent.</p>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-3xl font-bold mb-6">The Hidden Crisis</h3>
            <p className="text-xl leading-relaxed text-muted-foreground">
              In 2022, we visited over 50 private schools in Accra and Kumasi. What we found was shocking.
              Schools with incredible teachers and brilliant students were being suffocated by chaos.
              Records were lost. Fees were untracked. Communication was broken.
              <br /><br />
              The "Operating System" of African education was manual, prone to error, and exhausting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted/50 p-8 rounded-3xl border border-border">
              <Target className="w-10 h-10 text-red-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">The Problem</h4>
              <p className="text-muted-foreground">Great schools were invisible and inefficient. They spent 80% of their time on admin, leaving only 20% for education.</p>
            </div>
            <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20">
              <Rocket className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">The Solution</h4>
              <p className="text-muted-foreground">A unified digital infrastructure. One platform to manage operations, engage parents, and showcase excellence.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Vision */}
      <section className="py-32 px-6 lg:px-8 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold">Our North Star</h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            By 2030, we will be the underlying infrastructure for 10,000 African schools.
            We believe that when you fix the system, you free the teacher. And when you free the teacher, you change the future.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
