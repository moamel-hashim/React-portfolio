import { Button } from "../components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import {
  GithubLogo as Github,
  LinkedinLogo as Linkedin,
} from "@phosphor-icons/react";

const skills = [
  "React",
  "JavaScript",
  "PHP",
  "CSS",
  "Angular",
  "Node.js",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "PHP",
  "postgreSQL",
  "Sass",
  "Webpack",
  "Babel",
  "Jquery",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/public/images/Emerald waves on black gradient.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-liner-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        ;
      </div>
      {/*Content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-xl font-bold leading-right animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">
                  thoughtful digital
                </span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision and care.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Moamel Hashim - a software engineer specializing in
                React, JavaScript, PHP, CSS, and Angular. I build scalable,
                performant web applications that prioritizes usability and
                mobile first approach that users love.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 animation-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <button className="box flex gap-2 relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 px-8 py-4 text-lg">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
            <div className="flex items-center gap-4 animation-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/moamel-hashim" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/moamelhashim/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              ;
            </div>
          </div>
          {/*right column*/}
          <div className="animate-fade-in animation-delay-300 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animation-pulse-glow" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/public/images/Moamel.jpg"
                  alt="Moamel Hashim"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Skills section*/}
        <div className='mt-20 animation-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div>
            <div className='relative overflow-hidden'>
              <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className='shrink-0 px-8 py-4' >
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800'>
        <a href="#about" className='flex flex-col items-center gap-2 text-muted-foreground hover:text-muted-foreground/80 transition-colors'>
          <span className='text-xs uppercase tracking-wide'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce'/>
        </a>
      </div>
    </section>
  );
};
