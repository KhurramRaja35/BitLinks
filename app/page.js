import Image from "next/image";
import Link from "next/link";
import BlurText from "@/ReactBits/BlurText/BlurText";
import FadeContent from "@/fade/FadeContent/FadeContent";

export default function Home() {

  return (
    <main className="bg-purple-200">
      <section className="min-h-[calc(100vh-8rem)] grid grid-cols-1 grid-rows-2 place-content-center md:grid-cols-2 md:grid-rows-1 ">
        <div className=" flex flex-col gap-3 md:gap-3 items-center justify-center py-4 md:py-0 ">
          <BlurText
            text="The Best URL Shortener in the Market!"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl font-bold text-center flex justify-center "
          // className="text-2xl mb-8"
          />

          <p className=" text-center px-6">
            Experience seamless and reliable link shortening with our platform. We offer a fast, secure, and user-friendly solution to manage and share your URLs with ease. Join thousands who trust us for their link management needs.
          </p>
          <div className='flex gap-4'>
            <Link href="/shorten"><button className='bg-purple-400 transition-all duration-300 hover:scale-105 shadow-lg p-3 py-1 font-bold text-white cursor-pointer rounded-lg'>Try Now</button></Link>
            <Link target="_blank" href="https://github.com/KhurramRaja35"><button className='bg-purple-400 transition-all duration-300 hover:scale-105 shadow-lg p-3 py-1 font-bold text-white cursor-pointer rounded-lg'>GitHub</button></Link>
          </div>
        </div>
        
          <FadeContent className=" flex justify-start items-center relative bg-purple-200" blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <Image className="mix-blend-darken" src={"/vector1.jpg"} fill={true} alt="An Image of a vector" />
          </FadeContent>
        
      </section>
    </main>
  );
}
