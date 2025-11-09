import Link from "next/link";
import { Users, CreditCard, TrendingUp, BookOpen, Newspaper, Award, Star, Clock, Calendar } from "lucide-react";

// Mock data for popular courses
const popularCourses = [
  {
    id: '1',
    name: 'Yoga Fundamentals',
    description: 'Perfect for beginners looking to learn the basics of yoga. Covers fundamental poses, breathing techniques, and meditation practices.',
    image: '�‍♀️',
    level: 'Beginner',
    students: 25,
    rating: 4.9
  },
  {
    id: '9',
    name: 'Tai Chi Wellness',
    description: 'Gentle, meditative martial art focusing on slow, flowing movements and internal energy. Perfect for stress relief and balance improvement.',
    image: '☯️',
    level: 'Beginner',
    students: 32,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Advanced Fitness Training',
    description: 'High-intensity fitness program for experienced athletes. Focus on strength training, cardio conditioning, and athletic performance.',
    image: '🏋️‍♂️',
    level: 'Advanced',
    students: 18,
    rating: 4.7
  }
];

// Mock data for latest news
const latestNews = [
  {
    id: '1',
    title: 'New Wellness Programs Launching This Winter',
    excerpt: 'Exciting new wellness programs designed to help you achieve your health goals during the winter months. From indoor yoga sessions to nutrition workshops.',
    image: '�',
    date: '2025-11-08',
    category: 'Programs'
  },
  {
    id: '2',
    title: 'Smart Wellness Academy Receives Health Excellence Award',
    excerpt: 'Our academy has been recognized for outstanding contributions to community health and wellness education.',
    image: '🏆',
    date: '2025-11-05',
    category: 'Awards'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-cyan-400" />
              <h1 className="text-2xl font-bold text-white">Smart Wellness</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/courses" className="text-white hover:text-cyan-400 transition-colors">
                Courses
              </Link>
              <Link href="/news" className="text-white hover:text-cyan-400 transition-colors">
                News
              </Link>
              <Link href="/admin" className="text-white hover:text-cyan-400 transition-colors">
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
            Achieve Your Wellness Goals
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our wellness academy and embark on a journey of health, fitness, and well-being. 
            Train with experienced instructors and achieve your wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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

      {/* Popular Courses Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Programs</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after wellness programs designed to help you achieve optimal health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                {/* Course Image */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <span className="text-6xl">{course.image}</span>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-cyan-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{course.name}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link 
                      href={`/courses/${course.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href={`/enroll/${course.id}`}
                      className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/courses"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>View All Courses</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest achievements, announcements, and events from our academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {latestNews.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Article Image */}
                <div className="h-40 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <span className="text-5xl">{article.image}</span>
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/news"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <Newspaper className="h-5 w-5" />
              <span>View All News</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Management Dashboard Preview */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Wellness Academy Management System
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
            <Award className="h-6 w-6 text-cyan-400" />
            <span className="text-white font-semibold">Smart Wellness Academy</span>
          </div>
          <p className="text-white/70">
            Empowering individuals through comprehensive wellness programs and modern management.
          </p>
        </div>
      </footer>
    </div>
  );
}
