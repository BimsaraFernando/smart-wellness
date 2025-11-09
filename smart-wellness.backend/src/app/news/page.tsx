import Link from "next/link";
import { Calendar, User, Tag, ArrowLeft, Clock, Eye } from "lucide-react";

// Mock news data
const newsArticles = [
  {
    id: '1',
    title: 'New Wellness Programs Launching This Winter',
    excerpt: 'Exciting new wellness programs designed to help you achieve your health goals during the winter months. From indoor yoga sessions to nutrition workshops.',
    content: 'We are thrilled to announce the launch of our comprehensive winter wellness programs, designed specifically to help our community maintain and improve their health during the colder months. These programs include heated indoor yoga sessions, personalized nutrition workshops, and mindfulness meditation classes.',
    category: 'Programs',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2025-11-08',
    imageUrl: '/images/news/winter-programs.jpg',
    imageAlt: 'People practicing yoga in a warm, well-lit studio',
    readTime: '3 min read',
    views: 245,
    featured: true,
    tags: ['Wellness', 'Winter', 'Yoga', 'Nutrition']
  },
  {
    id: '2',
    title: 'Smart Wellness Academy Receives Health Excellence Award',
    excerpt: 'Our academy has been recognized for outstanding contributions to community health and wellness education.',
    content: 'Smart Wellness Academy has been honored with the prestigious Health Excellence Award from the National Wellness Association. This recognition highlights our commitment to providing comprehensive wellness education and promoting healthy lifestyle choices within our community.',
    category: 'Awards',
    author: 'Mark Thompson',
    publishedAt: '2025-11-05',
    imageUrl: '/images/news/excellence-award.jpg',
    imageAlt: 'Award ceremony with team members holding trophy',
    readTime: '2 min read',
    views: 189,
    featured: true,
    tags: ['Awards', 'Recognition', 'Community']
  },
  {
    id: '3',
    title: 'Nutrition Workshop Series: Healthy Eating Made Simple',
    excerpt: 'Join our certified nutritionists for a comprehensive workshop series on practical nutrition strategies for busy lifestyles.',
    content: 'Our monthly nutrition workshop series continues with expert-led sessions covering meal planning, healthy cooking techniques, and sustainable eating habits. Perfect for busy professionals and families looking to improve their nutritional wellness.',
    category: 'Workshops',
    author: 'Lisa Chen',
    publishedAt: '2025-11-02',
    imageUrl: '/images/news/nutrition-workshop.jpg',
    imageAlt: 'Fresh vegetables and healthy meal preparation',
    readTime: '4 min read',
    views: 156,
    featured: false,
    tags: ['Nutrition', 'Workshops', 'Healthy Eating']
  },
  {
    id: '4',
    title: 'Mental Health Awareness Week: Free Community Sessions',
    excerpt: 'Special free sessions focusing on mental wellness, stress management, and mindfulness practices for our community.',
    content: 'During Mental Health Awareness Week, Smart Wellness Academy is offering free community sessions focusing on mental wellness, stress management techniques, and mindfulness practices. These sessions are open to everyone and designed to support mental health in our community.',
    category: 'Community',
    author: 'Dr. Michael Roberts',
    publishedAt: '2025-10-28',
    imageUrl: '/images/news/mental-health-week.jpg',
    imageAlt: 'Group meditation session in peaceful environment',
    readTime: '3 min read',
    views: 298,
    featured: false,
    tags: ['Mental Health', 'Community', 'Free Sessions', 'Mindfulness']
  },
  {
    id: '5',
    title: 'New Fitness Equipment Arrives at Smart Wellness',
    excerpt: 'State-of-the-art fitness equipment has been installed to enhance our members\' workout experience.',
    content: 'We are excited to announce the arrival of new state-of-the-art fitness equipment at Smart Wellness Academy. The new equipment includes advanced cardio machines, strength training equipment, and functional fitness tools designed to support all fitness levels.',
    category: 'Facilities',
    author: 'Jessica Martinez',
    publishedAt: '2025-10-25',
    imageUrl: '/images/news/new-equipment.jpg',
    imageAlt: 'Modern gym equipment in bright, clean facility',
    readTime: '2 min read',
    views: 172,
    featured: false,
    tags: ['Equipment', 'Fitness', 'Facilities']
  },
  {
    id: '6',
    title: 'Success Story: Member Achieves Incredible Transformation',
    excerpt: 'Read about Maria\'s inspiring 6-month wellness journey and how Smart Wellness Academy supported her goals.',
    content: 'Maria Rodriguez shares her incredible 6-month transformation story, highlighting how the comprehensive wellness programs at Smart Wellness Academy helped her achieve her health and fitness goals through personalized training, nutrition guidance, and ongoing support.',
    category: 'Success Stories',
    author: 'Smart Wellness Team',
    publishedAt: '2025-10-20',
    imageUrl: '/images/news/success-story.jpg',
    imageAlt: 'Before and after transformation photos',
    readTime: '5 min read',
    views: 387,
    featured: false,
    tags: ['Success Stories', 'Transformation', 'Inspiration']
  }
];

const categoryColors: Record<string, string> = {
  'Programs': 'bg-blue-100 text-blue-800',
  'Awards': 'bg-yellow-100 text-yellow-800',
  'Workshops': 'bg-green-100 text-green-800',
  'Community': 'bg-purple-100 text-purple-800',
  'Facilities': 'bg-orange-100 text-orange-800',
  'Success Stories': 'bg-pink-100 text-pink-800'
};

export default function NewsPage() {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Calendar className="h-8 w-8 text-blue-600 mr-2" />
              Latest News
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Smart Wellness</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the latest news, wellness tips, success stories, and updates from our community.
          </p>
        </div>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Article Image */}
                <div className="h-64 bg-gradient-to-br from-blue-400 to-green-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Calendar className="h-16 w-16 mb-4 mx-auto opacity-80" />
                    <h3 className="text-lg font-bold px-4">{article.title}</h3>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title and Excerpt */}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>By {article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Articles */}
      <div className="container mx-auto px-4 pb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">All News</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <Calendar className="h-12 w-12 mb-2 mx-auto opacity-80" />
                  <span className="text-sm font-medium">{article.category}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-4">
                {/* Category Badge */}
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${categoryColors[article.category]}`}>
                  {article.category}
                </span>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h4>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{formatDate(article.publishedAt)}</span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{article.views}</span>
                    </span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay In The Loop</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest wellness news, tips, and updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}