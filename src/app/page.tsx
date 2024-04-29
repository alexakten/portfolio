import Project from "./components/Project";

export default function Home() {
  return (
    <main className="my-24 flex flex-col items-center bg-zinc-950 leading-[1.5] tracking-[-0.015rem] text-zinc-300">
      <header className="w-full max-w-lg font-medium ">
        <p>Alex Aktén</p>
        <p className="font-normal opacity-70">Indie Maker</p>
      </header>

      <section className="mt-24 w-full max-w-lg font-medium ">
        <p>About</p>
        <p className="mt-5 font-normal opacity-80">
          I work as a designer & developer at Kindred Lab. I'm always tinkering
          on some new project that interests me.
        </p>
      </section>

      <section className="mt-24 w-full max-w-lg font-medium ">
        <p>Projects</p>
        <Project
          name="Kindred Lab"
          description="Design and development agency."
          link="https://www.kindredlab.io"
        />
        <Project
          name="Redpoint"
          description="One card for all climbing gyms."
          link="https://www.redpoint.top"
        />
        <Project
          name="Solarity"
          description="8-bit solar system focus timer."
          link="https://solarity-alexakten.vercel.app/"
        />
        <Project
          name="Mendly"
          description="Minimalistic writing tool."
          link="https://www.mendly.app"
        />
        <Project
          name="Airbon"
          description="Regenerative farming tool."
          link="https://www.airbon.co"
        />
        <Project
          name="Tasktree"
          description="Tree structure task manager"
          link="https://www.tasktree.co"
        />
        <Project
          name="Textlock"
          description="Text on phone lockscreen."
          link="https://textlock.vercel.app/"
        />
      </section>
    </main>
  );
}
