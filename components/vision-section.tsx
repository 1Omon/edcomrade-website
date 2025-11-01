export function VisionSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
          Our vision is simple.
          <br />
          Transform education across Africa.
        </h2>
        <p className="text-xl md:text-2xl opacity-90 leading-relaxed text-pretty max-w-3xl mx-auto">
          We believe every school deserves world-class technology. Not just software, but a complete ecosystem that
          connects institutions, empowers educators, and unlocks potential for millions of students.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl font-light mb-2">100+</div>
            <div className="text-lg opacity-80">Schools by 2026</div>
          </div>
          <div>
            <div className="text-5xl font-light mb-2">50K+</div>
            <div className="text-lg opacity-80">Students Impacted</div>
          </div>
          <div>
            <div className="text-5xl font-light mb-2">15+</div>
            <div className="text-lg opacity-80">African Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}
