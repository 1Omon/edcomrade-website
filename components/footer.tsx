import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-lg font-semibold">EdComrade</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering African schools through seamless software and ecosystem partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-background text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-background text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-background/70 hover:text-background text-sm transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-background/70 hover:text-background text-sm transition-colors">
                  Our Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-background/70 text-sm">School Management Systems</li>
              <li className="text-background/70 text-sm">Learning Management</li>
              <li className="text-background/70 text-sm">Finance & Billing</li>
              <li className="text-background/70 text-sm">Marketing Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail size={16} />
                <span>info@edcomrade.com</span>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone size={16} />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <MapPin size={16} />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            © {new Date().getFullYear()} EdComrade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
