import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head></Head>
      <main className={"m-8"}>
        <nav className={"flex justify-between items-center"}>
          <img src="/assets/logo.png" alt="logo" className={"w-20"} />
          <div className={"font-bold text-primary text-xl"}>
            <Link href={"#"}>Login</Link>
          </div>
        </nav>

        <div className={"flex justify-around items-center h-[80vh] ml-10"}>
          <div className={"flex flex-col gap-5 flex-1"}>
            <div>
              <h3 className={"text-2xl font-bold text-black"}>
                Love deals? <br />
                You have come to the right place
              </h3>
            </div>
            <div className={"w-4/5"}>
              Automatically compare deals from different stores and find the
              best one around the globe
            </div>
            <Link href={"/products"}>
              <button
                className={
                  "bg-primary text-white px-5 py-3 rounded text-lg font-bold hover:bg-secondary transition-all"
                }
              >
                Get started
              </button>
            </Link>
          </div>

          <img
            src={"/assets/hero-bg.svg"}
            alt="hero"
            className={"w-full flex-1"}
          />
        </div>
      </main>
    </>
  );
}
