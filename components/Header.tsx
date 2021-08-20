import { Moon } from "react-feather";
import { GitHub } from "react-feather";
import { Twitter } from "react-feather";

import Container from "@/components/Container";
import Isotype from "@/components/Isotype";

export default function Header() {
  return (
    <header className="py-8">
      <Container className="max-w-screen-lg">
        <div className="flex justify-between">
          <Isotype className="w-7 h-7" />
          <div className="flex space-x-10 items-center">
            <nav className="hidden md:inline-block">
              <ul className="flex items-center space-x-6">
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
                <li>
                  <div className="w-1 h-1 rounded-full bg-gray-900" />
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
              </ul>
            </nav>
            <a href="#">
              <Moon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
