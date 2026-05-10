import {ArrowUpRight} from "@phosphor-icons/react";


const projects = [
  {
    title: "Agent Show Case",
    description:
      "a web application that demonstrates all Valorant agents and their abilities, providing users with a comprehensive overview of each agent's unique skills and characteristics. as well as their background story and role in the game.",
    image: "/images/agent show case.gif",
    link: "https://moamel-hashim.github.io/agent-show-case/",
    github: "https://github.com/moamel-hashim/agent-show-case",
    tags:"Javascript, HTML, CSS",
  },
  {
    title: "Dad Jokes",
    description:
      "a web application that provides users with a collection of dad jokes, allowing them to browse through a variety of humorous and pun-filled jokes. the application may include features such as categorization, search functionality, and the ability to share jokes with others.",
    image: "/images/DadJokes.gif",
    link: "https://moamel-hashim.github.io/jquery-dad-jokes/",
    github: "https://github.com/moamel-hashim/jquery-dad-jokes",
    tags:"Javascript, HTML, CSS, JQuery",
  },
  {
    title: "Travel Guide",
    description:
      "a web application that offers users a comprehensive travel guide, providing information on popular destinations, attractions, accommodations, and local tips. the application may include features such as interactive maps, user reviews, and personalized recommendations based on user preferences.",
    image: "/images/travel guide.gif",
    link: "https://travel-guide.moamelhashim.com/#",
    github: "https://github.com/moamel-hashim/travel-guide",
    tags:"React, Node.js, Express, PostgreSQL",
  },
];

export const Projects = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      {/*bg glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/*section header*/}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> that I Created for fun.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects that showcase my skills and creativity.
            These projects demonstrate my ability to design and develop engaging
            web applications using a variety of technologies. Each project
            reflects my passion for coding and my commitment to creating
            impactful digital experiences.
          </p>
        </div>
        {/*projects grid*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(1 + index) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                </div>
                <div className="p-2">

              <h3 className="text-xl font-semibold mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <p>
                <span className="text-sm font-medium text-muted-foreground">Technologies: </span>
                <span className="text-sm text-muted-foreground">{project.tags}</span>
              </p>
                </div>
              <div className="flex gap-4 p-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-fade-in animation-delay-500">
        <button className="box flex gap-2 relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 px-8 py-4 text-lg">
          <a href="https://github.com/moamel-hashim?tab=repositories">View all my projects</a>
          <ArrowUpRight className="w-5 h-5" />
        </button>
        </div>
      </div>
    </section>
  );
};
