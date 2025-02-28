import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-32 bg-[#F0F8F9] fixed w-full">
      <Link href={"#home"}>
        <Image src="/logo_horizontal.png" alt="logo" width={135} height={60} />
      </Link>
      <div>
        <nav>
          <ul className="flex flex-row gap-10 font-[Federo] text-[#9785BD]">
            <li>
              <Link href={"#quemsou"}>
                <h2>Quem sou</h2>
              </Link>
            </li>
            <li>
              <h2>
                <Link href={"#especialidades"}>Especialidades</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link href={"#contato"}>Contato</Link>
              </h2>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
