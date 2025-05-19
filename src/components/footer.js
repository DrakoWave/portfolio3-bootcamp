import React from "react";
import { Github, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-red-600 vial-amber-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">ATHUL A S</h3>
            <p className="text-white opacity-80">Building a Better Future</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#About"
                  className="text-white/80 hover:text-red-900 transition-color duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Project"
                  className="text-white/80 hover:text-red-900 transition-color duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Skills"
                  className="text-white/80 hover:text-red-900 transition-color duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="text-white/80 hover:text-red-900 transition-color duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl mb-4 font-bold">Connect</h3>
            <div className="flex justify-center md:justify-center space-x-4">
              <a
                href=""
                className="text-white/80 hover:text-red-900 transition-color duration-200"
              >
                <span className="sr-only">GitHub</span>
                <Github h-6 w-6 />
              </a>
              <a
                href=""
                className="text-white/80 hover:text-red-900 transition-color duration-200"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin h-6 w-6 />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/80 text-center">
          <p className="text-white/80">
            @ 2025 Athul A S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
