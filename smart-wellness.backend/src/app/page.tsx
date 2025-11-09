import Link from "next/link";
import { Users, CreditCard, TrendingUp, BookOpen, Newspaper, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-orange-800">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-white">Dragon's Path Academy</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/courses" className="text-white hover:text-yellow-400 transition-colors">
                Courses
              </Link>
              <Link href="/news" className="text-white hover:text-yellow-400 transition-colors">
                News
              </Link>
              <Link href="/admin" className="text-white hover:text-yellow-400 transition-colors">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Master the Art of Martial Arts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our academy and embark on a journey of self-discipline, strength, and honor. 
            Train with experienced masters and achieve your martial arts goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Courses
            </Link>
            <Link 
              href="/admin/students" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Management Dashboard Preview */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Academy Management System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/students" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Student Management</h4>
                <p className="text-white/70">
                  Manage student enrollments, track progress, and maintain detailed profiles.
                </p>
              </div>
            </Link>

            <Link href="/admin/payments" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <CreditCard className="h-12 w-12 text-green-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Payment Tracking</h4>
                <p className="text-white/70">
                  Monitor tuition payments, generate invoices, and track financial records.
                </p>
              </div>
            </Link>

            <Link href="/admin/progress" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Progress Tracking</h4>
                <p className="text-white/70">
                  Track belt progressions, skill assessments, and testing schedules.
                </p>
              </div>
            </Link>

            <Link href="/admin/courses" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <BookOpen className="h-12 w-12 text-orange-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Course Management</h4>
                <p className="text-white/70">
                  Create and manage courses, schedules, and instructor assignments.
                </p>
              </div>
            </Link>

            <Link href="/admin/news" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <Newspaper className="h-12 w-12 text-yellow-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">News & Events</h4>
                <p className="text-white/70">
                  Publish academy news, announcements, and upcoming events.
                </p>
              </div>
            </Link>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Award className="h-12 w-12 text-red-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Achievement System</h4>
              <p className="text-white/70">
                Track belts, certifications, and student achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="h-6 w-6 text-yellow-400" />
            <span className="text-white font-semibold">Dragon's Path Martial Arts Academy</span>
          </div>
          <p className="text-white/70">
            Empowering students through traditional martial arts training and modern management.
          </p>
        </div>
      </footer>
    </div>
  );
}
