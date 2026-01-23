import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8  mb-16 md:mb-0">
      <div className="max-w-[90%] mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Link href="/" className="">
                <Image
                  src="/full-logo.png"
                  alt="EdComrade Logo"
                  width={100}
                  height={45}
                  className="object-cover w-[250px] h-[45px]"
                />
              </Link>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6 font-light">
              The Operating System for African Schools. Building the digital backbone for the next generation of education.
            </p>
            <div className="space-y-2 text-base text-gray-200 font-light">
              <p className="flex gap-x-2">
                <MapPin /> Accra • Kumasi • Takoradi • Cape Coast
              </p>
              <p className="flex gap-x-2">
                <Mail /> info@edcomrade.com
              </p>
              <p className="flex gap-x-2">
                <Phone /> +233 55 528 4923, +233 55 528 4923
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Solutions</h4>
            <ul className="space-y-3 text-gray-200 font-light">
              <li>
                <Link href="/schools" className="hover:text-secondary transition-colors text-lg">
                  School OS
                </Link>
              </li>
              <li>
                <Link href="/parents" className="hover:text-secondary transition-colors text-lg">
                  Parent Network
                </Link>
              </li>
              <li>
                <Link href="/intelligence" className="hover:text-secondary transition-colors text-lg">
                  Intelligence
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-secondary transition-colors text-lg">
                  Core Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">The Ecosystem</h4>
            <ul className="space-y-3 text-gray-200 font-light">
              <li>
                <Link href="/campaigns/digital-100" className="hover:text-secondary transition-colors text-lg">
                  The Digital 100
                </Link>
              </li>
              <li>
                <Link href="/schoolpedia" className="hover:text-secondary transition-colors text-lg">
                  Schoolpedia
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:text-secondary transition-colors text-lg">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-secondary transition-colors text-lg">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-200 font-light">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors text-lg">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-secondary transition-colors text-lg">
                  Contact Us
                </Link>
              </li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <Link href="https://www.x.com/edcomradegh/" target="_blank" className="hover:text-secondary transition-colors">
                    <BsTwitterX className="w-5 h-5" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/edcomrade/" target="_blank" className="hover:text-secondary transition-colors">
                    <BsLinkedin className="w-5 h-5" />
                  </Link>
                  <Link href="https://www.instagram.com/edcomradegh/" target="_blank" className="hover:text-secondary transition-colors">
                    <BsInstagram className="w-5 h-5" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200 font-light">
          <p>© 2026 EdComrade. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
