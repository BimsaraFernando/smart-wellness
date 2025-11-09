'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Plus, Search, ArrowLeft, Users, Clock, DollarSign, Calendar } from 'lucide-react';

// Mock courses data
const mockCourses = [
  {
    id: '1',
    name: 'Karate Fundamentals',
    description: 'Perfect for beginners looking to learn the basics of traditional Karate. This course covers fundamental stances, basic strikes, blocks, and kicks.',
    instructor: 'Master Chen',
    level: 'beginner' as const,
    schedule: [
      { dayOfWeek: 'Monday', startTime: '18:00', endTime: '19:30' },
      { dayOfWeek: 'Wednesday', startTime: '18:00', endTime: '19:30' },
      { dayOfWeek: 'Friday', startTime: '18:00', endTime: '19:30' }
    ],
    maxStudents: 20,
    currentStudents: 15,
    price: {
      monthly: 150,
      quarterly: 400,
      annual: 1400
    },
    ageGroup: '8-16 years',
    requirements: ['No prior experience needed', 'Uniform required after first month'],
    createdAt: '2024-01-15',
    updatedAt: '2024-11-01'
  },
  {
    id: '2',
    name: 'Advanced Sparring',
    description: 'High-intensity sparring sessions for experienced martial artists. Focus on advanced techniques, strategy, and competitive fighting.',
    instructor: 'Sensei Rodriguez',
    level: 'advanced' as const,
    schedule: [
      { dayOfWeek: 'Tuesday', startTime: '19:00', endTime: '20:30' },
      { dayOfWeek: 'Thursday', startTime: '19:00', endTime: '20:30' },
      { dayOfWeek: 'Saturday', startTime: '10:00', endTime: '11:30' }
    ],
    maxStudents: 12,
    currentStudents: 8,
    price: {
      monthly: 200,
      quarterly: 550,
      annual: 2000
    },
    ageGroup: '16+ years',
    requirements: ['Green belt minimum', 'Sparring gear required', 'Medical clearance'],
    createdAt: '2024-02-01',
    updatedAt: '2024-10-15'
  },
  {
    id: '3',
    name: 'Youth Martial Arts',
    description: 'Fun and engaging martial arts program designed specifically for children. Emphasis on discipline, respect, and basic self-defense.',
    instructor: 'Instructor Williams',
    level: 'beginner' as const,
    schedule: [
      { dayOfWeek: 'Monday', startTime: '16:30', endTime: '17:30' },
      { dayOfWeek: 'Wednesday', startTime: '16:30', endTime: '17:30' },
      { dayOfWeek: 'Saturday', startTime: '09:00', endTime: '10:00' }
    ],
    maxStudents: 25,
    currentStudents: 22,
    price: {
      monthly: 120,
      quarterly: 320,
      annual: 1100
    },
    ageGroup: '5-12 years',
    requirements: ['Parent/guardian consent', 'Comfortable workout clothes'],
    createdAt: '2024-01-20',
    updatedAt: '2024-10-20'
  },
  {
    id: '4',
    name: 'Black Belt Mastery',
    description: 'Elite training program for black belt holders focusing on mastery of advanced techniques, teaching skills, and leadership development.',
    instructor: 'Master Kim',
    level: 'advanced' as const,
    schedule: [
      { dayOfWeek: 'Sunday', startTime: '08:00', endTime: '10:00' }
    ],
    maxStudents: 8,
    currentStudents: 5,
    price: {
      monthly: 300,
      quarterly: 800,
      annual: 3000
    },
    ageGroup: '18+ years',
    requirements: ['Black belt 1st Dan minimum', 'Instructor recommendation', 'Leadership commitment'],
    createdAt: '2024-03-01',
    updatedAt: '2024-11-05'
  }
];

const levelColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
};

export default function AdminCoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = 
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
    
    return matchesSearch && matchesLevel;
  });

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
                <BookOpen className="h-8 w-8 text-orange-600 mr-2" />
                Course Management
              </h1>
            </div>
            <Link 
              href="/admin/courses/new"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Create Course</span>
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
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{mockCourses.length}</div>
                <div className="text-sm text-gray-500">Total Courses</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {mockCourses.reduce((sum, course) => sum + course.currentStudents, 0)}
                </div>
                <div className="text-sm text-gray-500">Total Enrollments</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  ${mockCourses.reduce((sum, course) => sum + (course.currentStudents * course.price.monthly), 0)}
                </div>
                <div className="text-sm text-gray-500">Monthly Revenue</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-orange-600 rounded-full"></div>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round((mockCourses.reduce((sum, course) => sum + course.currentStudents, 0) / 
                   mockCourses.reduce((sum, course) => sum + course.maxStudents, 0)) * 100)}%
                </div>
                <div className="text-sm text-gray-500">Capacity Utilization</div>
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
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              {/* Course Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Instructor: {course.instructor}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${levelColors[course.level]}`}>
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
              </div>

              {/* Course Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Age Group:</span>
                  <p className="text-gray-600">{course.ageGroup}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Enrollment:</span>
                  <p className="text-gray-600">{course.currentStudents}/{course.maxStudents} students</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-4">
                <span className="font-medium text-gray-700 text-sm">Schedule:</span>
                <div className="mt-1 space-y-1">
                  {course.schedule.map((session, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      {session.dayOfWeek}: {session.startTime} - {session.endTime}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-4">
                <span className="font-medium text-gray-700 text-sm">Pricing:</span>
                <div className="mt-1 flex space-x-4 text-sm">
                  <span className="text-gray-600">Monthly: ${course.price.monthly}</span>
                  <span className="text-gray-600">Quarterly: ${course.price.quarterly}</span>
                  <span className="text-gray-600">Annual: ${course.price.annual}</span>
                </div>
              </div>

              {/* Enrollment Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Enrollment</span>
                  <span className="text-sm text-gray-600">
                    {Math.round((course.currentStudents / course.maxStudents) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${(course.currentStudents / course.maxStudents) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                <Link 
                  href={`/admin/courses/${course.id}`}
                  className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                >
                  View Details
                </Link>
                <Link 
                  href={`/admin/courses/${course.id}/edit`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Edit
                </Link>
                <Link 
                  href={`/admin/courses/${course.id}/students`}
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  Manage Students
                </Link>
                <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                  Schedule Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}