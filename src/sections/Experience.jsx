const experience = [
  {
    period: "2023 - 2024",
    role: "Lead Software Engineer",
    company: "ASENDtials",
    description:
      "Rapidly promoted to Team Lead within five months, successfully leading the web development team and managing projects from inception to completion. Mentored and onboarded two junior developers while serving as the company's SQL Database Administrator, ensuring data integrity and secure access.Enhanced marketing efforts by designing high- performing Mailchimp email campaigns that increased open rates from 10 % to 25 % for a 1,000 - subscriber base.Improved the company website through regular updates using React.js, HTML, CSS, and JavaScript, and significantly enhanced user experience by redesigning the homepage in WordPress.",
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Mailchimp",
      "WordPress",
    ],
    current: false,
  },
  {
    period: "2021 - 2022",
    role: "Drone Pilot",
    company: "SkySkope",
    description:
      "Operated drones for aerial photography and videography, capturing high-quality footage for various clients. Conducted pre-flight inspections and maintained drone equipment to ensure safety and optimal performance. Collaborated with clients to understand their needs and deliver customized solutions, resulting in increased customer satisfaction and repeat business.",
    technologies: ["DJI drones", "Adobe Premiere Pro", "Final Cut Pro"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My experience.
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional experience, from curious beginner to a
            now building projects that scales.
          </p>
        </div>
        <div className="relative ">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"></div>
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 text-xs ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
