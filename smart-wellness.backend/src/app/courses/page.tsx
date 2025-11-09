import Link from "next/link";
import { Clock, Users, Award, Calendar, ArrowLeft, Star, DollarSign } from "lucide-react";

// Mock courses data
const courses = [
  {
    id: '1',
    name: 'Yoga Fundamentals',
    description: 'Perfect for beginners looking to learn the basics of yoga. This course covers fundamental poses, breathing techniques, meditation practices, and flexibility training. Students will develop mindfulness, strength, and inner peace.',
    instructor: 'Master Sarah',
    level: 'Beginner',
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
    duration: '90 minutes',
    requirements: ['No prior experience needed', 'Yoga mat required'],
    benefits: [
      'Learn traditional yoga techniques',
      'Develop mindfulness and peace',
      'Improve flexibility and strength',
      'Build mental resilience',
      'Master stress management'
    ],
    image: '�‍♀️',
    rating: 4.9,
    reviews: 45
  },
  {
    id: '2',
    name: 'Advanced Fitness Training',
    description: 'High-intensity fitness program for experienced athletes. Focus on strength training, cardio conditioning, and athletic performance enhancement. Perfect preparation for competitions and advanced fitness goals.',
    instructor: 'Coach Rodriguez',
    level: 'Advanced',
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
    duration: '90 minutes',
    requirements: ['Intermediate fitness level', 'Fitness gear required', 'Health clearance'],
    benefits: [
      'Advanced strength training techniques',
      'Competition preparation',
      'Performance optimization',
      'Advanced conditioning',
      'Elite fitness development'
    ],
    image: '🏋️‍♂️',
    rating: 4.7,
    reviews: 23
  },
  {
    id: '3',
    name: 'Kids Wellness Program',
    description: 'Fun and engaging wellness program designed specifically for children. Emphasis on healthy habits, physical activity, and mental well-being while keeping activities enjoyable and age-appropriate.',
    instructor: 'Instructor Williams',
    level: 'Beginner',
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
    duration: '60 minutes',
    requirements: ['Parent/guardian consent', 'Comfortable workout clothes'],
    benefits: [
      'Age-appropriate wellness training',
      'Healthy habit development',
      'Improved focus and coordination',
      'Physical fitness and movement',
      'Social skills development'
    ],
    image: '👶',
    rating: 4.8,
    reviews: 67
  },
  {
    id: '4',
    name: 'Wellness Coaching Certification',
    description: 'Elite training program for wellness professionals focusing on coaching methodologies, client assessment, and program design. Prepare for professional certification and leadership roles.',
    instructor: 'Master Kim',
    level: 'Expert',
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
    duration: '120 minutes',
    requirements: ['Wellness background preferred', 'Professional commitment', 'Certification goals'],
    benefits: [
      'Advanced coaching techniques',
      'Leadership development',
      'Client assessment skills',
      'Program design mastery',
      'Professional certification prep'
    ],
    image: '🎓',
    rating: 4.9,
    reviews: 12
  },
  {
    id: '5',
    name: 'Nutrition & Healthy Living',
    description: 'Comprehensive nutrition course designed to teach healthy eating habits, meal planning, and sustainable lifestyle changes for optimal wellness and long-term health.',
    instructor: 'Dr. Maria',
    level: 'Beginner',
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
    duration: '60 minutes',
    requirements: ['No prior experience needed', 'Food journal recommended'],
    benefits: [
      'Practical nutrition knowledge',
      'Meal planning strategies',
      'Healthy habit formation',
      'Weight management skills',
      'Sustainable lifestyle changes'
    ],
    image: '�',
    rating: 4.6,
    reviews: 28
  },
  {
    id: '6',
    name: 'Mindfulness & Meditation',
    description: 'Comprehensive mindfulness training combining meditation techniques, stress management, and mental wellness practices. Perfect for those seeking inner peace and mental clarity.',
    instructor: 'Teacher Thompson',
    level: 'Intermediate',
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
    duration: '90 minutes',
    requirements: ['Basic meditation experience preferred', 'Meditation cushion recommended'],
    benefits: [
      'Multiple meditation techniques',
      'Stress management skills',
      'Mental clarity development',
      'Emotional regulation',
      'Inner peace cultivation'
    ],
    image: '🧠',
    rating: 4.5,
    reviews: 31
  },
  {
    id: '7',
    name: 'Wushu Traditional Forms',
    description: 'Traditional Chinese martial arts focusing on graceful movements, weapon techniques, and internal energy cultivation. Learn authentic Wushu forms including staff, sword, and hand forms.',
    instructor: 'Master Liu',
    level: 'Intermediate',
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
    duration: '90 minutes',
    requirements: ['Basic martial arts experience preferred', 'Traditional uniform recommended'],
    benefits: [
      'Traditional Chinese martial arts',
      'Weapon forms training',
      'Internal energy cultivation',
      'Graceful movement patterns',
      'Cultural martial arts heritage'
    ],
    image: '🗡️',
    rating: 4.6,
    reviews: 18
  },
  {
    id: '8',
    name: 'Muay Thai Conditioning',
    description: 'Authentic Thai boxing training focusing on striking techniques, clinch work, and traditional conditioning methods. Build strength, endurance, and fighting skills in the art of eight limbs.',
    instructor: 'Kru Martinez',
    level: 'Intermediate',
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
    duration: '90 minutes',
    requirements: ['Basic fitness level required', 'Hand wraps and gloves', 'Shin guards recommended'],
    benefits: [
      'Authentic Muay Thai techniques',
      'Full-body conditioning',
      'Striking and clinch skills',
      'Mental toughness training',
      'Traditional Thai boxing culture'
    ],
    image: '🥊',
    rating: 4.8,
    reviews: 26
  },
  {
    id: '9',
    name: 'Tai Chi Wellness',
    description: 'Gentle, meditative martial art focusing on slow, flowing movements and internal energy. Perfect for stress relief, balance improvement, and overall wellness for all ages.',
    instructor: 'Master Chen',
    level: 'Beginner',
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
    duration: '60 minutes',
    requirements: ['No prior experience needed', 'Comfortable, loose clothing'],
    benefits: [
      'Stress reduction and relaxation',
      'Improved balance and coordination',
      'Enhanced mental clarity',
      'Gentle physical exercise',
      'Mindfulness and meditation'
    ],
    image: '☯️',
    rating: 4.7,
    reviews: 34
  }
];

const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-orange-100 text-orange-800',
  'Expert': 'bg-red-100 text-red-800'
};

export default function CoursesPage() {
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
              <Award className="h-8 w-8 text-blue-600 mr-2" />
              Our Programs
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Wellness Path</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're a complete beginner or an experienced wellness enthusiast, we have the right program to help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Course Image */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-6xl mb-2 block">{course.image}</span>
                  <h3 className="text-xl font-bold">{course.name}</h3>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${levelColors[course.level]}`}>
                        {course.level}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-600">{course.rating}</span>
                        <span className="text-sm text-gray-500">({course.reviews} reviews)</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                  </div>
                </div>

                {/* Course Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Instructor: {course.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Age Group: {course.ageGroup}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Spots: {course.currentStudents}/{course.maxStudents}</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </h4>
                  <div className="space-y-1">
                    {course.schedule.map((session, index) => (
                      <div key={index} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-2">
                        {session.dayOfWeek}: {session.startTime} - {session.endTime}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Pricing Options
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-semibold text-gray-900">${course.price.monthly}</div>
                      <div className="text-gray-600">Monthly</div>
                    </div>
                    <div className="text-center p-2 bg-orange-50 rounded border border-orange-200">
                      <div className="font-semibold text-orange-900">${course.price.quarterly}</div>
                      <div className="text-orange-700">Quarterly</div>
                      <div className="text-xs text-orange-600">Save 11%</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded border border-green-200">
                      <div className="font-semibold text-green-900">${course.price.annual}</div>
                      <div className="text-green-700">Annual</div>
                      <div className="text-xs text-green-600">Save 22%</div>
                    </div>
                  </div>
                </div>

                {/* Enrollment Status */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Enrollment Status</span>
                    <span className="text-sm text-gray-600">
                      {course.currentStudents}/{course.maxStudents} enrolled
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${(course.currentStudents / course.maxStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link 
                    href={`/courses/${course.id}`}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href={`/enroll/${course.id}`}
                    className={`flex-1 text-center py-3 rounded-lg font-semibold transition-colors ${
                      course.currentStudents >= course.maxStudents
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {course.currentStudents >= course.maxStudents ? 'Full' : 'Enroll Now'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join Smart Wellness Academy and discover the transformative power of comprehensive wellness training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Trial Class
            </Link>
            <Link 
              href="/about" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
            >
              Learn About Our Academy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}