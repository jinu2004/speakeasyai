"use client";
import { Ghost, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { Children, useState } from "react";
import { Button } from "../button";
import { Dialog, DialogPanel } from "@headlessui/react";

export default function Header() {
  const [isDialogOpen, isInMobile] = useState(false);
  console.log(isDialogOpen);
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto md:px-4 lg:px-2">
        <div className="flex lg:flex-1">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 -top-1.5">
              <span className="sr-only"> Your Company </span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="flex lg:hidden justify-end">
          <Button
            onClick={() => isInMobile(true)}
            className="bg-transparent shadow-none text-gray-800 hover:bg-transparent"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="h-6 w-6" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg leading-6 text-gray-900  hover:text-purple-700"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-lg leading-6 text-gray-900 hover:text-purple-700"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog open={isDialogOpen} onClose={isInMobile} className="lg:hidden">
        <div className="fixed inset-0 z-50">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between it">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <Button
                onClick={() => isInMobile(false)}
                className="bg-transparent shadow-none text-gray-800 hover:bg-transparent"
              >
                <span className="sr-only">Close menu</span>
                <XIcon aria-hidden="true" className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7  hover:text-purple-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
