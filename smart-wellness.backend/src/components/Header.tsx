import Link from "next/link";
import { Award } from "lucide-react";

interface HeaderProps {
  currentPage?: 'home' | 'courses' | 'news' | 'contact';
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Award className="h-8 w-8 text-cyan-400" />
            <h1 className="text-2xl font-bold text-white">Smart Wellness</h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`text-white hover:text-cyan-400 transition-colors ${
                currentPage === 'home' ? 'text-cyan-400' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className={`text-white hover:text-cyan-400 transition-colors ${
                currentPage === 'courses' ? 'text-cyan-400' : ''
              }`}
            >
              Courses
            </Link>
            <Link 
              href="/news" 
              className={`text-white hover:text-cyan-400 transition-colors ${
                currentPage === 'news' ? 'text-cyan-400' : ''
              }`}
            >
              News
            </Link>
            <Link 
              href="/contact" 
              className={`text-white hover:text-cyan-400 transition-colors ${
                currentPage === 'contact' ? 'text-cyan-400' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button - you can expand this later */}
          <div className="md:hidden">
            <button className="text-white hover:text-cyan-400 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}