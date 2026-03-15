import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Stories of Change | EdComrade",
    description: "Real stories from the schools, parents, and leaders transforming education in Ghana.",
};

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/20">
            <Navigation />

            <Section className="py-32">
                <Container className="max-w-4xl text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                        EdComrade Stories
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                        Change is <br /> <span className="text-secondary">human</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Technology is just a tool. The real story is about the people who use it to find peace, control, and dignity.
                    </p>
                </Container>
            </Section>

            <div className="space-y-32 pb-32">
                {/* STORY 1 */}
                <StorySection
                    image="/professional-african-male-headmaster-portrait--con.jpeg"
                    quote="I used to dread the end of the term. Now I sleep well."
                    person="Mr. Osei, Headmaster"
                    location="St. Mary's International, Kumasi"
                    text="For Mr. Osei, 'exam week' meant two weeks of sleepless nights collating results from 40 teachers. Mistakes were common. Parents were angry. EdComrade's automated grading system didn't just save him time; it saved his relationship with his staff. He gained back his weekends, and his school gained back its reputation for accuracy."
                    theme="primary"
                />

                {/* STORY 2 */}
                <StorySection
                    image="/african-parent-smiling-while-checking-child-s-grad.jpeg"
                    quote="I finally feel involved in my daughter's life."
                    person="Sarah, Bank Manager & Parent"
                    location="Accra"
                    text="Sarah leaves home at 6 AM and returns at 7 PM. She felt like an outsider in her own child's education, relying on WhatsApp rumors to know what was happening. With ParentAide, she gets a notification when her daughter arrives at school and instantly sees quiz results. 'It took 30 seconds to send a voice note to her teacher,' she says. 'But it meant the world.'"
                    theme="secondary"
                    reversed
                />

                {/* STORY 3 */}
                <StorySection
                    image="/modern-african-classroom-with-students-using-table.jpeg"
                    quote="We had everything except students. Then we got visible."
                    person="The Proprietor"
                    location="Great Minds Academy, Tema"
                    text="Great Minds Academy had a computer lab, a swimming pool, and excellent teachers. But their enrollment was dropping because nobody knew they existed. After joining the Digital 100 cohort, getting verified on Schoolpedia, and launching a professional website, inquiries jumped 400% in three months. Parents weren't just looking for 'a school'. They were looking for them."
                    theme="primary"
                />
            </div>

            <Footer />
        </main>
    )
}

function StorySection({ image, quote, person, location, text, theme, reversed }: { image: string, quote: string, person: string, location: string, text: string, theme: "primary" | "secondary", reversed?: boolean }) {
    return (
        <section className="px-6 lg:px-8">
            <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${reversed ? '' : ''}`}>
                <div className={`relative h-[600px] w-full rounded-[2rem] overflow-hidden ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image src={image} alt={person} fill className="object-cover" />
                </div>
                <div className={`space-y-8 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Quote className={`w-12 h-12 text-${theme} opacity-50`} />
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        "{quote}"
                    </h2>
                    <div className="prose prose-lg text-muted-foreground leading-relaxed">
                        {text}
                    </div>
                    <div>
                        <div className="font-bold text-lg text-foreground">{person}</div>
                        <div className="text-muted-foreground">{location}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
