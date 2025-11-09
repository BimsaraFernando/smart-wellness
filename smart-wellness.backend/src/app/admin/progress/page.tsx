'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, ArrowLeft, Award, BarChart3, Target, Calendar, User } from 'lucide-react';

// Mock progress data
const mockProgressData = [
  {
    id: '1',
    studentId: '1',
    studentName: 'John Doe',
    courseId: '1',
    courseName: 'Karate Fundamentals',
    currentBelt: 'Yellow Belt',
    skillsAssessed: {
      technique: 7,
      discipline: 9,
      attendance: 8,
      improvement: 8
    },
    testingHistory: [
      { date: '2024-09-15', belt: 'White Belt', passed: true, notes: 'Good form, needs work on balance' },
      { date: '2024-06-15', belt: 'Yellow Belt', passed: true, notes: 'Excellent progress, ready for next level' }
    ],
    goals: ['Master side kick technique', 'Improve flexibility', 'Learn kata #2'],
    instructor: 'Master Chen',
    lastUpdated: '2024-11-08'
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Jane Smith',
    courseId: '2',
    courseName: 'Advanced Sparring',
    currentBelt: 'Green Belt',
    skillsAssessed: {
      technique: 8,
      discipline: 10,
      attendance: 9,
      improvement: 9
    },
    testingHistory: [
      { date: '2024-08-20', belt: 'Green Belt', passed: true, notes: 'Outstanding technique and discipline' }
    ],
    goals: ['Prepare for brown belt test', 'Master advanced combinations', 'Mentor junior students'],
    instructor: 'Sensei Rodriguez',
    lastUpdated: '2024-11-05'
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Mike Johnson',
    courseId: '1',
    courseName: 'Black Belt Mastery',
    currentBelt: 'Black Belt 1st Dan',
    skillsAssessed: {
      technique: 10,
      discipline: 10,
      attendance: 10,
      improvement: 9
    },
    testingHistory: [
      { date: '2024-07-10', belt: 'Black Belt 1st Dan', passed: true, notes: 'Exceptional performance across all areas' }
    ],
    goals: ['Assistant instructor training', 'Tournament preparation', 'Master traditional forms'],
    instructor: 'Master Kim',
    lastUpdated: '2024-11-01'
  }
];

const beltColors = {
  'White Belt': 'bg-gray-100 text-gray-800',
  'Yellow Belt': 'bg-yellow-100 text-yellow-800',
  'Orange Belt': 'bg-orange-100 text-orange-800',
  'Green Belt': 'bg-green-100 text-green-800',
  'Blue Belt': 'bg-blue-100 text-blue-800',
  'Brown Belt': 'bg-amber-100 text-amber-800',
  'Black Belt': 'bg-black text-white',
  'Black Belt 1st Dan': 'bg-black text-white'
};

const getSkillColor = (score: number) => {
  if (score >= 9) return 'text-green-600';
  if (score >= 7) return 'text-yellow-600';
  return 'text-red-600';
};

export default function ProgressPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const filteredProgress = mockProgressData.filter(progress =>
    progress.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    progress.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedStudentData = selectedStudent 
    ? mockProgressData.find(p => p.id === selectedStudent)
    : null;

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
              <TrendingUp className="h-8 w-8 text-purple-600 mr-2" />
              Progress Tracking
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Students</h2>
                <BarChart3 className="h-5 w-5 text-gray-500" />
              </div>
              
              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Student List */}
              <div className="space-y-3">
                {filteredProgress.map((progress) => (
                  <div
                    key={progress.id}
                    onClick={() => setSelectedStudent(progress.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedStudent === progress.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{progress.studentName}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${beltColors[progress.currentBelt]}`}>
                        {progress.currentBelt}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{progress.courseName}</p>
                    <div className="text-xs text-gray-500 mt-1">
                      Updated: {new Date(progress.lastUpdated).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Details */}
          <div className="lg:col-span-2">
            {selectedStudentData ? (
              <div className="space-y-6">
                {/* Student Header */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedStudentData.studentName}</h2>
                      <p className="text-gray-600">{selectedStudentData.courseName}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-2 text-sm font-semibold rounded-full ${beltColors[selectedStudentData.currentBelt]}`}>
                        {selectedStudentData.currentBelt}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Instructor: {selectedStudentData.instructor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Assessment */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-purple-600" />
                    Skills Assessment
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(selectedStudentData.skillsAssessed).map(([skill, score]) => (
                      <div key={skill} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {skill}
                          </span>
                          <span className={`text-sm font-bold ${getSkillColor(score)}`}>
                            {score}/10
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              score >= 9 ? 'bg-green-500' : 
                              score >= 7 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${score * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testing History */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-600" />
                    Testing History
                  </h3>
                  <div className="space-y-4">
                    {selectedStudentData.testingHistory.map((test, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-900">
                              {new Date(test.date).toLocaleDateString()}
                            </span>
                          </div>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${beltColors[test.belt]}`}>
                            {test.belt}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{test.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-purple-600" />
                    Current Goals
                  </h3>
                  <div className="space-y-2">
                    {selectedStudentData.goals.map((goal, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-700">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                      <Award className="h-4 w-4" />
                      <span>Schedule Test</span>
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                      <BarChart3 className="h-4 w-4" />
                      <span>Update Assessment</span>
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                      <Target className="h-4 w-4" />
                      <span>Set Goals</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Placeholder */
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Student</h3>
                <p className="text-gray-600">Choose a student from the list to view their progress details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}