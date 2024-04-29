export default function Project({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="-mx-3 mt-3 flex w-full flex-col rounded-md p-3 px-3 font-normal no-underline hover:bg-zinc-900 sm:py-3"
    >
      <p className="">{name}</p>
      <p className="opacity-80">{description}</p>
    </a>
  );
}
