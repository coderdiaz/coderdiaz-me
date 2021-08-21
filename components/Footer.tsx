import { Headphones, GitHub, Twitter } from "react-feather";

import Container from "@/components/Container";
import Isotype from "@/components/Isotype";
import Flag from "@/components/Flag";

export default function Footer() {
  return (
    <footer className="py-6 md:pt-14 md:pb-8">
      <Container className="max-w-screen-lg">
        <div className="flex flex-col space-y-6 py-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-6 md:space-y-0">
            <div className="flex space-x-3">
              <Headphones className="w-5 h-5 text-green-600" />
              <span className="inline-block text-gray-600 text-sm xl:text-base">Nothing playing right now</span>
            </div>
            <div className="flex">
              <div className="text-gray-600 text-sm xl:text-base flex items-center space-x-2">
                <span className="inline-block">Since 2015. Made in Mexico</span>
                <Flag width={22} height={18} />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-500">
                <Isotype className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="flex justify-center md:justify-between">
            <div className="inline-block text-gray-600 text-sm xl:text-base">Made with Next.js, Vercel and TailwindCSS</div>
            <div className="relative">
              <nav className="hidden md:inline-block">
                <ul className="flex items-center space-x-6">
                  <li>
                    <a href="#">Uses</a>
                  </li>
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <div className="w-1 h-1 rounded-full bg-gray-900" />
                  </li>
                  <li>
                    <a href="#">
                      <GitHub className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}