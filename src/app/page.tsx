import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
       <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Wormplain is now live!
          </p>
      </div>

      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
         Now generate <span className="text-violet-600">Tweets</span> and <span className="text-violet-600">Threads</span> from the latest Research and News. 
      </h1>

      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Introducing Wormplain: The Ultimate Solution for Organic Growth on X
        Are you tired of struggling to grow your X account? Look no further! With Wormplain, we have got you covered. Our innovative app is designed to help you effortlessly expand your X account organically, without any hassle.      
      </p>
      
      <Link className= {buttonVariants({
        size: 'lg',
        className: 'mt-5',
      })} 
      href="/dashboard" target="_blank">
        Get started <ArrowRight className="ml-2 h-5 w-5" />
      
      </Link>
    </MaxWidthWrapper>

    <div>
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu"></div>
      </div>
    </div>
    </>
 

  );
}
