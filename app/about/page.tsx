import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export const metadata = {
  title: "Our Story | Why We Built This",
  description: "The origin story of EdComrade. Built because excellence without visibility is invisible.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <Section className="pt-40 pb-20">
        <Container className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            The Lost Form.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We didn't start with code. We started with a question: <br />
            <span className="italic text-foreground">"Why are our smartest schools still running on paper?"</span>
          </p>
        </Container>
      </Section>

      <Section intensity="none" className="pb-32">
        <Container className="max-w-2xl mx-auto prose prose-lg prose-zinc dark:prose-invert">
          <p>
            In 2022, we visited a top private school in Accra to enroll a nephew. The school was beautiful.
            The teachers were passionate. The headmaster was brilliant.
          </p>
          <p>
            But when we asked for the admission form, chaos ensued. It was lost in a pile.
            When we finally got it, we were told to pay at the bank and bring back the slip.
            Two days later, the slip was misplaced, and we had to prove payment again.
          </p>
          <p>
            <strong>We realized something profound:</strong> <br />
            The school wasn't incompetent. It was <em>overwhelmed</em>.
          </p>
          <p>
            We visited 50 more schools. We saw the same story everywhere.
            Headmasters drowning in spreadsheets. Parents relying on gossip because they had no data.
            Excellent schools losing students simply because they were invisible online.
          </p>
          <hr className="border-border my-12" />
          <h3>Excellence without visibility is invisible.</h3>
          <p>
            We built EdComrade to solve this. not just to "digitize" schools, but to give them their dignity back.
            To create a connected system where:
          </p>
          <ul>
            <li>A Headmaster can see his school's health in one glance.</li>
            <li>A Parent can trust that their child is safe and learning.</li>
            <li>A great School can be found by the families who need it.</li>
          </ul>
          <p>
            This is not just software. It is the infrastructure of trust for African education.
          </p>

          <div className="pt-12 not-prose">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                SA
              </div>
              <div>
                <p className="font-bold text-foreground">Solomon Annan Ayisi</p>
                <p className="text-sm text-muted-foreground">Co-founder & CEO</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
