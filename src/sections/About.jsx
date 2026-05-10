import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "clean Code ",
    description:
      "I write clean, maintainable code that follows best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "I optimize applications for maximum speed and scalability, ensuring a smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I thrive in collaborative environments, working closely with teams to achieve common goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "I bring creative and innovative solutions to complex problems, pushing the boundaries of what's possible.",
  },
];

export const About = () => {
  return (
  <section className="py-32 relative overflow-hidden" id="about">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/*Left Column*/}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building the future,
            <span className=" font-serif italic font-normal text-white">
              {" "}
              one component at a time.
            </span>
          </h2>
          <div>
            <p className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              I'm a passionate software developer with over 3 years of
              experience crafting digital products that make a difference. My
              journey in software development has been driven by a love for
              problem-solving and a commitment to writing clean, efficient code.
              I thrive in collaborative environments where I can contribute to
              innovative projects and continuously learn from my peers.
            </p>
              <p className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              I specialize in React, Node.js, and javaScript, and I have a
              strong fundamentals in Angular, PHP, JQuery, expressJS,
              TypeScript, and MongoDB. I'm always eager to take on new
              challenges and push the boundaries of what's possible in software
              development.
            </p>
              <p className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            When im not coding, you can find me at the local gym, gaming with
            friends, or exploring the latest tech trends.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium text-foreground">
              my mission is to create impactful digital experiences that empower
              users and drive innovation. I'm excited to continue growing as a
              developer and learn new technologies.
            </p>
          </div>
        </div>
        {/*Right Column*/}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              style={{ animationDelay: `${(1 + index) * 100}ms` }}
              className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-400"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <highlight.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};
