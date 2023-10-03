import { Navbar, Hero } from '@/src/components/layout';
import MaxWidthWrapper from '@/src/components/max-width-wrapper';

export default async function Home() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center w-screen min-h-screen bg-black">
      <div className="flex flex-col items-center bg-white max-w-fit max-h-full rounded-[25px]">
        <Navbar />
        <Hero />
        {/* <Features /> */}
        {/* <Prices /> */}
        {/* <Footer /> */}
      </div>
    </MaxWidthWrapper>
  );
}
