import {
  GithubLogo as Github,
  LinkedinLogo as Linkedin,
} from "@phosphor-icons/react";

export const Contact = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground animate-fade-in">
          Get in touch.
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in animation-delay-100">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-6 animate-fade-in animation-delay-200">
          <a href="https://github.com/moamel-hashim" className="text-5xl">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/moamelhashim/" className="text-5xl">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
};
