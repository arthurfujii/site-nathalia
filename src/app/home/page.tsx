import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-center gap-16 p-40" id="home">
      <Image src="/logo_vertical.png" alt="logo" width={530} height={345} />
      <div className="w-[580px] text-[#9785bd]">
        <h1>
          Cuidado humanizado para reabilitação motora e neurológica de crianças
          e adultos.
        </h1>
      </div>
    </section>
  );
}
