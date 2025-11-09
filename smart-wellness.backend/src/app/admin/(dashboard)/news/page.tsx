'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Newspaper, Plus, Search, Filter, ArrowLeft, Eye, Edit, Trash2, Calendar } from 'lucide-react';

// Mock news data for admin
const mockNewsArticles = [
  {
    id: '1',
    title: 'Championship Tournament Success - 3 Gold Medals!',
    summary: 'Our students dominated the Regional Martial Arts Championship, bringing home 3 gold medals and 2 silver medals.',
    content: 'We are incredibly proud to announce that our academy students have achieved outstanding results at the Regional Martial Arts Championship held last weekend...',
    author: 'Master Chen',
    category: 'achievement' as const,
    featuredImage: '/images/championship-medals.jpg',
    published: true,
    publishedAt: '2024-11-08',
    createdAt: '2024-11-08',
    updatedAt: '2024-11-08'
  },
  {
    id: '2',
    title: 'New Advanced Combat Training Course Launching January 2025',
    summary: 'Exciting news! We are launching a new advanced combat training course designed for experienced martial artists.',
    content: 'Starting January 2025, Dragon\'s Path Academy will offer an exclusive Advanced Combat Training course...',
    author: 'Sensei Rodriguez',
    category: 'announcement' as const,
    featuredImage: '/images/advanced-training.jpg',
    published: true,
    publishedAt: '2024-11-05',
    createdAt: '2024-11-05',
    updatedAt: '2024-11-05'
  },
  {
    id: '3',
    title: 'Holiday Training Schedule - December 2024',
    summary: 'Important updates to our training schedule during the holiday season.',
    content: 'Please note the following changes to our regular training schedule during the holiday season...',
    author: 'Academy Administration',
    category: 'announcement' as const,
    featuredImage: '/images/holiday-schedule.jpg',
    published: true,
    publishedAt: '2024-11-03',
    createdAt: '2024-11-03',
    updatedAt: '2024-11-03'
  },
  {
    id: '4',
    title: 'Upcoming Black Belt Testing Ceremony',
    summary: 'Special ceremony for students advancing to black belt level.',
    content: 'We are proud to announce an upcoming black belt testing ceremony...',
    author: 'Master Kim',
    category: 'event' as const,
    featuredImage: '/images/black-belt-test.jpg',
    published: false,
    createdAt: '2024-11-10',
    updatedAt: '2024-11-10'
  }
];

const categoryColors = {
  achievement: 'bg-yellow-100 text-yellow-800',
  announcement: 'bg-blue-100 text-blue-800',
  event: 'bg-green-100 text-green-800',
  training: 'bg-purple-100 text-purple-800',
  competition: 'bg-red-100 text-red-800'
};

export default function AdminNewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredArticles = mockNewsArticles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'published' && article.published) ||
      (filterStatus === 'draft' && !article.published);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const publishedCount = mockNewsArticles.filter(article => article.published).length;
  const draftCount = mockNewsArticles.filter(article => !article.published).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <Newspaper className="h-8 w-8 text-yellow-600 mr-2" />
                News Management
              </h1>
            </div>
            <Link 
              href="/admin/news/new"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Create Article</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Newspaper className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{mockNewsArticles.length}</div>
                <div className="text-sm text-gray-500">Total Articles</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Eye className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{publishedCount}</div>
                <div className="text-sm text-gray-500">Published</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-600" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{draftCount}</div>
                <div className="text-sm text-gray-500">Drafts</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {mockNewsArticles.filter(article => {
                    const today = new Date();
                    const articleDate = new Date(article.createdAt);
                    const diffTime = Math.abs(today.getTime() - articleDate.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays <= 7;
                  }).length}
                </div>
                <div className="text-sm text-gray-500">This Week</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="achievement">Achievement</option>
                  <option value="announcement">Announcement</option>
                  <option value="event">Event</option>
                  <option value="training">Training</option>
                  <option value="competition">Competition</option>
                </select>
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </div>

        {/* Articles Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Article
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <div className="text-sm font-medium text-gray-900 line-clamp-2">
                          {article.title}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2 mt-1">
                          {article.summary}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${categoryColors[article.category]}`}>
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {article.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        article.published 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {article.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        {article.published && article.publishedAt ? 
                          new Date(article.publishedAt).toLocaleDateString() :
                          new Date(article.createdAt).toLocaleDateString()
                        }
                      </div>
                      <div className="text-xs text-gray-500">
                        Updated: {new Date(article.updatedAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <Link 
                          href={`/admin/news/${article.id}`}
                          className="text-yellow-600 hover:text-yellow-900"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link 
                          href={`/admin/news/${article.id}/edit`}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        {!article.published && (
                          <button className="text-green-600 hover:text-green-900 text-xs">
                            Publish
                          </button>
                        )}
                        {article.published && (
                          <button className="text-gray-600 hover:text-gray-900 text-xs">
                            Unpublish
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/admin/news/new?category=announcement"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>New Announcement</span>
            </Link>
            <Link 
              href="/admin/news/new?category=achievement"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>New Achievement</span>
            </Link>
            <Link 
              href="/admin/news/new?category=event"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>New Event</span>
            </Link>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Calendar className="h-4 w-4" />
              <span>Schedule Post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}