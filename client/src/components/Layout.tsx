import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                {/* BlueAlly Logo Icon Representation */}
                <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute w-full h-full bg-secondary/20 transform rotate-45 translate-x-1/2"></div>
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6 text-white transform -rotate-45"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight text-primary">BlueAlly</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Challenges
            </a>
            <a href="#solution" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Framework
            </a>
            <a href="#workshop" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Workshop
            </a>
            <a href="#results" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Results
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold">
              Book Workshop
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <a href="#problem" className="text-base font-medium py-2 border-b border-border/50" onClick={toggleMenu}>
              Challenges
            </a>
            <a href="#solution" className="text-base font-medium py-2 border-b border-border/50" onClick={toggleMenu}>
              Framework
            </a>
            <a href="#workshop" className="text-base font-medium py-2 border-b border-border/50" onClick={toggleMenu}>
              Workshop
            </a>
            <a href="#results" className="text-base font-medium py-2 border-b border-border/50" onClick={toggleMenu}>
              Results
            </a>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold mt-2">
              Book Workshop
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-primary transform -rotate-45"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <span className="text-xl font-bold">BlueAlly</span>
            </div>
            <p className="text-blue-100 max-w-md mb-6">
              Conquer IT complexity. We help organizations navigate every digital decision and reach peak performance with AI-driven solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-secondary">Solutions</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data & Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-secondary">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-white/10 text-center text-sm text-blue-200">
          <p>© Copyright BlueAlly 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
