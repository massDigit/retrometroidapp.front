import { HomeProps } from "../types";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home({ searchParams }: HomeProps) {
  const consoles = [
    { name: "Console 1", imageUrl: "/a2.png" },
    { name: "Console 2", imageUrl: "/a3.png" },
    { name: "Console 3", imageUrl: "/a4.png" },
    { name: "Console 4", imageUrl: "/a5.png" },
  ];

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue de Consoles</h1>
          <p>Découvrez nos consoles de jeux</p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consoles.map((console, index) => (
              <div key={index} className="console-item">
                <Image
                  src={console.imageUrl}
                  alt={console.name}
                  width={500}
                  height={300}
                />
                <h2>{console.name}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
