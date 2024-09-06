import { Button } from "@/components/ui/button";
import Banner from "@/components/ui/home/banner";
import Header from "@/components/ui/home/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px),transparent_1px][background-size:16px_16px] flow-root space-y-5 py-6">
      <Header/>
      <Banner />

      {/* <Divider />
      <HowItWorks/>
      <Divider/>
      <Pricing />
      <Divider />
      <Footer/> */}

    </main>
  );
}
