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
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="/" className="">
                <Image
                  src="/full-logo.png"
                  alt="EdComrade Logo"
                  width={100}
                  height={45}
                  className="object-cover w-[300px] h-[45px]"
                />
              </a>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6 font-light">
              Ghana's premier educational technology company, transforming
              schools through innovative digital solutions and strategic
              partnerships.
            </p>
            <div className="space-y-2 text-base text-gray-200 font-light">
              <p className="flex gap-x-2">
                <MapPin /> Accra • Kumasi • Takoradi • Cape Coast
              </p>
              <p className="flex gap-x-2">
                <Mail /> edcomrade.gh@gmail.com
              </p>
              <p className="flex gap-x-2">
                <Phone /> +233 55 528 4923
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-6">Product</h4>
            <ul className="space-y-3 text-gray-200 font-light">
              <li>
                <Link
                  href="/technology"
                  className="hover:text-secondary transition-colors text-lg"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-secondary transition-colors text-lg"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-secondary transition-colors text-lg"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-200 font-light">
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-secondary transition-colors text-lg"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/pioneer-100"
                  className="hover:text-secondary transition-colors text-lg"
                >
                  Pioneer 100
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-6">Connect</h4>
            <ul className="space-y-3 text-gray-200 font-light">
              <li>
                <Link
                  href="https://www.x.com/edcomradegh/"
                  target="_blank"
                  className="hover:text-secondary transition-colors text-lg flex gap-x-2 items-center"
                >
                  <BsTwitterX/>
                  Twitter (X)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/edcomrade/"
                  target="_blank"
                  className="hover:text-secondary transition-colors text-lg flex gap-x-2 items-center"
                >
                  <BsLinkedin/>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  target="_blank"
                  className="hover:text-secondary transition-colors text-lg flex gap-x-2 items-center"
                >
                  <BsFacebook/>
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/edcomradegh/"
                  target="_blank"
                  className="hover:text-secondary transition-colors text-lg flex gap-x-2 items-center"
                >
                  <BsInstagram/>
                  
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-200 font-light">
          <p>© 2025 EdComrade. All rights reserved.</p>
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
