'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Plus, Search, ArrowLeft, Users, Clock, DollarSign, Calendar } from 'lucide-react';

// Mock courses data
const mockCourses = [
  {
    id: '1',
    name: 'Yoga Fundamentals',
    description: 'Perfect for beginners looking to learn the basics of yoga. This course covers fundamental poses, breathing techniques, meditation practices, and flexibility training.',
    instructor: 'Master Sarah',
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
    ageGroup: '16+ years',
    requirements: ['No prior experience needed', 'Yoga mat required'],
    createdAt: '2024-01-15',
    updatedAt: '2024-11-01'
  },
  {
    id: '2',
    name: 'Advanced Fitness Training',
    description: 'High-intensity fitness program for experienced athletes. Focus on strength training, cardio conditioning, and athletic performance enhancement.',
    instructor: 'Coach Rodriguez',
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
    ageGroup: '18+ years',
    requirements: ['Intermediate fitness level', 'Fitness gear required', 'Health clearance'],
    createdAt: '2024-02-01',
    updatedAt: '2024-10-15'
  },
  {
    id: '3',
    name: 'Kids Wellness Program',
    description: 'Fun and engaging wellness program designed specifically for children. Emphasis on healthy habits, physical activity, and mental well-being.',
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
    name: 'Wellness Coaching Certification',
    description: 'Elite training program for wellness professionals focusing on coaching methodologies, client assessment, and program design.',
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
    ageGroup: '21+ years',
    requirements: ['Wellness background preferred', 'Professional commitment', 'Certification goals'],
    createdAt: '2024-03-01',
    updatedAt: '2024-11-05'
  },
  {
    id: '5',
    name: 'Nutrition & Healthy Living',
    description: 'Comprehensive nutrition course designed to teach healthy eating habits, meal planning, and sustainable lifestyle changes for optimal wellness.',
    instructor: 'Dr. Maria',
    level: 'beginner' as const,
    schedule: [
      { dayOfWeek: 'Tuesday', startTime: '18:00', endTime: '19:00' },
      { dayOfWeek: 'Thursday', startTime: '18:00', endTime: '19:00' }
    ],
    maxStudents: 15,
    currentStudents: 12,
    price: {
      monthly: 130,
      quarterly: 350,
      annual: 1200
    },
    ageGroup: '16+ years',
    requirements: ['No prior experience needed', 'Food journal recommended'],
    createdAt: '2024-04-01',
    updatedAt: '2024-11-01'
  },
  {
    id: '6',
    name: 'Mindfulness & Meditation',
    description: 'Comprehensive mindfulness training combining meditation techniques, stress management, and mental wellness practices.',
    instructor: 'Teacher Thompson',
    level: 'intermediate' as const,
    schedule: [
      { dayOfWeek: 'Monday', startTime: '20:00', endTime: '21:30' },
      { dayOfWeek: 'Wednesday', startTime: '20:00', endTime: '21:30' },
      { dayOfWeek: 'Friday', startTime: '20:00', endTime: '21:30' }
    ],
    maxStudents: 18,
    currentStudents: 14,
    price: {
      monthly: 180,
      quarterly: 480,
      annual: 1800
    },
    ageGroup: '18+ years',
    requirements: ['Basic meditation experience preferred', 'Meditation cushion recommended'],
    createdAt: '2024-05-01',
    updatedAt: '2024-11-01'
  },
  {
    id: '7',
    name: 'Wushu Traditional Forms',
    description: 'Traditional Chinese martial arts focusing on graceful movements, weapon techniques, and internal energy cultivation.',
    instructor: 'Master Liu',
    level: 'intermediate' as const,
    schedule: [
      { dayOfWeek: 'Tuesday', startTime: '17:00', endTime: '18:30' },
      { dayOfWeek: 'Thursday', startTime: '17:00', endTime: '18:30' },
      { dayOfWeek: 'Saturday', startTime: '14:00', endTime: '15:30' }
    ],
    maxStudents: 16,
    currentStudents: 11,
    price: {
      monthly: 170,
      quarterly: 450,
      annual: 1650
    },
    ageGroup: '14+ years',
    requirements: ['Basic martial arts experience preferred', 'Traditional uniform recommended'],
    createdAt: '2024-06-01',
    updatedAt: '2024-11-01'
  },
  {
    id: '8',
    name: 'Muay Thai Conditioning',
    description: 'Authentic Thai boxing training focusing on striking techniques, clinch work, and traditional conditioning methods.',
    instructor: 'Kru Martinez',
    level: 'intermediate' as const,
    schedule: [
      { dayOfWeek: 'Monday', startTime: '19:30', endTime: '21:00' },
      { dayOfWeek: 'Wednesday', startTime: '19:30', endTime: '21:00' },
      { dayOfWeek: 'Friday', startTime: '19:30', endTime: '21:00' }
    ],
    maxStudents: 14,
    currentStudents: 9,
    price: {
      monthly: 190,
      quarterly: 520,
      annual: 1900
    },
    ageGroup: '16+ years',
    requirements: ['Basic fitness level required', 'Hand wraps and gloves', 'Shin guards recommended'],
    createdAt: '2024-07-01',
    updatedAt: '2024-11-01'
  },
  {
    id: '9',
    name: 'Tai Chi Wellness',
    description: 'Gentle, meditative martial art focusing on slow, flowing movements and internal energy. Perfect for stress relief and balance improvement.',
    instructor: 'Master Chen',
    level: 'beginner' as const,
    schedule: [
      { dayOfWeek: 'Monday', startTime: '08:00', endTime: '09:00' },
      { dayOfWeek: 'Wednesday', startTime: '08:00', endTime: '09:00' },
      { dayOfWeek: 'Friday', startTime: '08:00', endTime: '09:00' },
      { dayOfWeek: 'Saturday', startTime: '08:00', endTime: '09:00' }
    ],
    maxStudents: 20,
    currentStudents: 16,
    price: {
      monthly: 140,
      quarterly: 380,
      annual: 1350
    },
    ageGroup: 'All ages (8+ years)',
    requirements: ['No prior experience needed', 'Comfortable, loose clothing'],
    createdAt: '2024-08-01',
    updatedAt: '2024-11-01'
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
                <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
                Program Management
              </h1>
            </div>
            <Link 
              href="/admin/courses/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Create Program</span>
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
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{mockCourses.length}</div>
                <div className="text-sm text-gray-500">Total Programs</div>
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
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(course.currentStudents / course.maxStudents) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                <Link 
                  href={`/admin/courses/${course.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Details
                </Link>
                <Link 
                  href={`/admin/courses/${course.id}/edit`}
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  Edit
                </Link>
                <Link 
                  href={`/admin/courses/${course.id}/students`}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                >
                  Manage Students
                </Link>
                <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">
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