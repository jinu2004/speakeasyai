import { Span } from "next/dist/trace";
import React, { Component } from "react";
import { Button } from "../button";
import Link from "next/link";
import { ArrowRight, Grid2x2, MouseIcon, ScrollIcon } from "lucide-react";

export default function Banner() {
  return (
    <section className="p-2 w-full overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="p-4 items-center lg:m-10">
          <h1>Mobile / Desktop / Backend</h1>
          <h2>Transforming your digital vision into reality. From sleek mobile apps to robust backend systems, we craft seamless solutions for every platform. Let’s build the future together</h2>


        <Button className="rounded-full p-6 mt-10">
          <span className="flex gap-2">Explore our works <ArrowRight></ArrowRight></span>
        </Button>

        <span className="lg:flex gap-2 hidden mt-10"> <MouseIcon></MouseIcon> scroll</span>

        </div>
        <div className="shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]">
        <img
            alt="Product screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>


      </div>

    </section>
  );
}
