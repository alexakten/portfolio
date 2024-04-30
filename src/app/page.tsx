import Contact from "./components/Contact";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="my-24 flex flex-col items-center bg-zinc-950 px-4 leading-[1.5] tracking-[-0.015rem] text-zinc-300">
      <header className="w-full max-w-xl font-medium leading-[1.2] ">
        <p className="bg-gradient-to-tr from-zinc-400 via-zinc-200 to-zinc-100 bg-clip-text text-transparent">
          Alex Aktén
        </p>
        <p className="text-sm font-normal opacity-80">Designer/Dev</p>
      </header>

      <section className="mt-24 w-full max-w-xl font-medium ">
        <p>About</p>
        <p className="mt-5 font-normal opacity-80">
          Hey. I&apos;m Alex — an indie maker based in Stockholm. I&apos;m
          passionate about building small startups that allow me to optimize for
          my lifestyle.
          <br /> <br />
          Right now I&apos;m working on Redpoint, a product for climbers.
        </p>
      </section>

      <section className="mt-24 w-full max-w-xl font-medium ">
        <p>Projects</p>
        <Project
          name="Kindred Lab"
          description="Design and web development agency."
          link="https://www.kindredlab.io"
        />
        <Project
          name="Redpoint"
          description="One membership for all climbing gyms."
          link="https://www.redpoint.top"
        />
        <Project
          name="Solarity"
          description="8-bit solar system focus timer."
          link="https://solarity-alexakten.vercel.app/"
        />
        <Project
          name="Mendly"
          description="Minimalistic writing interface."
          link="https://www.mendly.app"
        />
        <Project
          name="Airbon"
          description="Regenerative farming tool."
          link="https://www.airbon.co"
        />
        <Project
          name="Tasktree"
          description="Tree structure task manager."
          link="https://www.tasktree.co"
        />
        <Project
          name="Textlock"
          description="Text on phone lockscreen."
          link="https://textlock.vercel.app/"
        />
      </section>

      <footer className="mt-24 w-full max-w-xl font-medium ">
        <p>Contact</p>
        <div className="grid grid-cols-1 gap-x-3 sm:grid-cols-3">
          <Contact
            name="Instagram"
            description="@alexakten"
            link="https://www.instagram.com/alexakten/"
          />
          <Contact
            name="Twitter"
            description="@alexakten"
            link="https://twitter.com/alexakten"
          />
          <Contact
            name="LinkedIn"
            description="Alex Aktén"
            link="https://www.linkedin.com/in/alex-akt%C3%A9n-86bb18195/"
          />
          <Contact
            name="Phone"
            description="+46 709 13 65 14"
            link="tel:+46709136514"
          />
          <Contact
            name="Email"
            description="alex.akten@outlook.com"
            link="mailto:alex.akten@outlook.com"
          />
        </div>
      </footer>
    </main>
  );
}
