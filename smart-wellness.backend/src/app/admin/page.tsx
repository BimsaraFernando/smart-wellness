'use client';

import Link from 'next/link';
import { Users, CreditCard, TrendingUp, BookOpen, Newspaper, Award, Calendar, AlertCircle } from 'lucide-react';

// Mock dashboard data
const dashboardStats = {
  totalStudents: 42,
  activeStudents: 38,
  totalRevenue: 12750,
  pendingPayments: 450,
  totalCourses: 4,
  totalNews: 8,
  upcomingTests: 3,
  overduePayments: 2
};

const recentActivities = [
  { id: 1, type: 'enrollment', message: 'New student John Smith enrolled in Karate Fundamentals', time: '2 hours ago' },
  { id: 2, type: 'payment', message: 'Payment received from Jane Doe - $150', time: '4 hours ago' },
  { id: 3, type: 'achievement', message: 'Mike Johnson passed Yellow Belt test', time: '1 day ago' },
  { id: 4, type: 'news', message: 'Published new article: Championship Results', time: '2 days ago' }
];

const upcomingEvents = [
  { id: 1, title: 'Belt Testing Ceremony', date: '2024-11-30', type: 'testing' },
  { id: 2, title: 'Monthly Tournament', date: '2024-12-15', type: 'competition' },
  { id: 3, title: 'Holiday Break', date: '2024-12-23', type: 'break' }
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening at Smart Wellness.</p>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalStudents}</div>
                <div className="text-sm text-gray-500">Total Students</div>
                <div className="text-xs text-green-600 mt-1">
                  {dashboardStats.activeStudents} active
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">${dashboardStats.totalRevenue}</div>
                <div className="text-sm text-gray-500">Monthly Revenue</div>
                <div className="text-xs text-red-600 mt-1">
                  ${dashboardStats.pendingPayments} pending
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalCourses}</div>
                <div className="text-sm text-gray-500">Active Courses</div>
                <div className="text-xs text-blue-600 mt-1">
                  85% capacity
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{dashboardStats.upcomingTests}</div>
                <div className="text-sm text-gray-500">Upcoming Tests</div>
                <div className="text-xs text-purple-600 mt-1">
                  This month
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link 
                  href="/admin/students/new"
                  className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-blue-900">Add Student</span>
                </Link>

                <Link 
                  href="/admin/payments/new"
                  className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <CreditCard className="h-8 w-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium text-green-900">Record Payment</span>
                </Link>

                <Link 
                  href="/admin/courses/new"
                  className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <BookOpen className="h-8 w-8 text-orange-600 mb-2" />
                  <span className="text-sm font-medium text-orange-900">Create Course</span>
                </Link>

                <Link 
                  href="/admin/news/new"
                  className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                >
                  <Newspaper className="h-8 w-8 text-yellow-600 mb-2" />
                  <span className="text-sm font-medium text-yellow-900">Write News</span>
                </Link>

                <Link 
                  href="/admin/progress"
                  className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium text-purple-900">Track Progress</span>
                </Link>

                <button className="flex flex-col items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <Award className="h-8 w-8 text-red-600 mb-2" />
                  <span className="text-sm font-medium text-red-900">Schedule Test</span>
                </button>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      {activity.type === 'enrollment' && <Users className="h-5 w-5 text-blue-600" />}
                      {activity.type === 'payment' && <CreditCard className="h-5 w-5 text-green-600" />}
                      {activity.type === 'achievement' && <Award className="h-5 w-5 text-yellow-600" />}
                      {activity.type === 'news' && <Newspaper className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                Alerts
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-800 font-medium">Overdue Payments</p>
                  <p className="text-xs text-red-600">{dashboardStats.overduePayments} students have overdue payments</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 font-medium">Belt Testing</p>
                  <p className="text-xs text-yellow-600">3 students ready for testing</p>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.title}</p>
                      <p className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      event.type === 'testing' ? 'bg-purple-100 text-purple-800' :
                      event.type === 'competition' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
              <div className="space-y-2">
                <Link href="/admin/students" className="block text-sm text-blue-600 hover:text-blue-800">
                  → Manage Students
                </Link>
                <Link href="/admin/payments" className="block text-sm text-blue-600 hover:text-blue-800">
                  → Payment Tracking
                </Link>
                <Link href="/admin/progress" className="block text-sm text-blue-600 hover:text-blue-800">
                  → Progress Reports
                </Link>
                <Link href="/admin/courses" className="block text-sm text-blue-600 hover:text-blue-800">
                  → Course Management
                </Link>
                <Link href="/admin/news" className="block text-sm text-blue-600 hover:text-blue-800">
                  → News & Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}