import { useState } from "react";

type Link = {
  id: number;
  url: string;
  displayText: string;
  created: Date;
};

const NavLinks: Link[] = [
  {
    id: 1,
    url: "string1",
    displayText: "string1",
    created: new Date(),
  },
  {
    id: 2,
    url: "string2",
    displayText: "string2",
    created: new Date(),
  },
  {
    id: 3,
    url: "string3",
    displayText: "string3",
    created: new Date(),
  },
];

function Component() {
  const [displayText, setDisplayText] = useState("Hello World!");
  const [displayNumber, setDisplayNumber] = useState(1000);
  const [tsList, setTsList] = useState<string[]>([]);
  const [navLinks, setNavLinks] = useState<Link[]>(NavLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setDisplayText("HELLOOOOOOO!");
          setDisplayNumber(displayNumber + 5);
          setTsList(["hello"]);
          setNavLinks([
            ...navLinks,
            {
              id: displayNumber,
              url: "string" + displayNumber.toString(),
              displayText: "string" + displayNumber.toString(),
              created: new Date(),
            },
          ]);
        }}
      >
        click me
      </button>
      <h2>State</h2>
      <h2>{displayText}</h2>
      <h2>{displayNumber}</h2>
      <h2>{tsList}</h2>
      {navLinks.map((navLink) => (
        <h2>{navLink.displayText}</h2>
      ))}
    </div>
  );
}
export default Component;
