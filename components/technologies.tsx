import Image from "next/image";

const technologies = [
  {
    name: "React.js",
    iconUrl: "/skills/react.svg",
  },
  {
    name: "Angular",
    iconUrl: "/skills/angular.svg",
  },
  {
    name: "Javascript",
    iconUrl: "/skills/javascript.svg",
  },
  {
    name: "Typescript",
    iconUrl: "/skills/typescript.svg",
  },
  {
    name: "HTML/CSS",
    iconUrl: "/skills/html.svg",
  },
  {
    name: "SCSS",
    iconUrl: "/skills/sass.svg",
  },
  {
    name: "Jasmine",
    iconUrl: "/skills/jasmine.svg",
  },
  {
    name: "Jest",
    iconUrl: "/skills/jest.svg",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "/skills/tailwind.svg",
  },
  {
    name: "Git",
    iconUrl: "/skills/git.svg",
  },
  {
    name: "Next.js",
    iconUrl: "/skills/next-js.svg",
  },
  {
    name: "Jira",
    iconUrl: "/skills/jira.svg",
  },
  {
    name: ".NET/EF Core",
    iconUrl: "/skills/net-core.svg",
  },
  {
    name: "C#",
    iconUrl: "/skills/csharp.svg",
  },
  {
    name: "Protractor",
    iconUrl: "/skills/protractor.svg",
  },
];

export default function Technologies() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Skills & Technologies
        </h2>
        <div className="mx-auto py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="col-span-1 flex flex-col justify-center items-center md:col-span-2 lg:col-span-1 transition duration-100 transform hover:scale-125 hover:-translate-y-2">
                <Image
                  height={48}
                  width={48}
                  src={tech.iconUrl}
                  alt={tech.name}
                />
                <span className="mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
