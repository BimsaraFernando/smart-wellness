import Link from 'next/link';
import { 
  Users, 
  CreditCard, 
  BookOpen, 
  Newspaper, 
  Award,
  DollarSign,
  Calendar,
  UserCheck,
  AlertCircle
} from 'lucide-react';

// Mock dashboard data
const dashboardStats = {
  totalStudents: 156,
  activePrograms: 9,
  monthlyRevenue: 47850,
  completedSessions: 342,
  upcomingClasses: 28,
  pendingPayments: 7
};

const recentActivities = [
  {
    id: 1,
    type: 'enrollment',
    message: 'New student enrolled in Yoga Fundamentals',
    time: '2 hours ago',
    icon: UserCheck,
    color: 'text-green-600'
  },
  {
    id: 2,
    type: 'payment',
    message: 'Payment received from Maria Rodriguez',
    time: '4 hours ago',
    icon: DollarSign,
    color: 'text-blue-600'
  },
  {
    id: 3,
    type: 'class',
    message: 'Tai Chi Wellness class completed',
    time: '6 hours ago',
    icon: Award,
    color: 'text-purple-600'
  },
  {
    id: 4,
    type: 'alert',
    message: 'Low enrollment in Advanced Fitness Training',
    time: '1 day ago',
    icon: AlertCircle,
    color: 'text-orange-600'
  }
];

const upcomingClasses = [
  {
    id: 1,
    program: 'Yoga Fundamentals',
    instructor: 'Master Sarah',
    time: '09:00 AM',
    date: 'Today',
    students: 15,
    capacity: 20
  },
  {
    id: 2,
    program: 'Muay Thai Conditioning',
    instructor: 'Kru Martinez',
    time: '07:30 PM',
    date: 'Today',
    students: 9,
    capacity: 14
  },
  {
    id: 3,
    program: 'Tai Chi Wellness',
    instructor: 'Master Chen',
    time: '08:00 AM',
    date: 'Tomorrow',
    students: 16,
    capacity: 20
  }
];

export default function AdminDashboard() {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening at Smart Wellness Academy.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalStudents}</div>
              <div className="text-sm text-gray-500">Total Students</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.activePrograms}</div>
              <div className="text-sm text-gray-500">Active Programs</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DollarSign className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">${dashboardStats.monthlyRevenue.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Monthly Revenue</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.completedSessions}</div>
              <div className="text-sm text-gray-500">Completed Sessions</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.upcomingClasses}</div>
              <div className="text-sm text-gray-500">Upcoming Classes</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CreditCard className="h-8 w-8 text-red-600" />
            </div>
            <div className="ml-4">
              <div className="text-2xl font-bold text-gray-900">{dashboardStats.pendingPayments}</div>
              <div className="text-sm text-gray-500">Pending Payments</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 ${activity.color}`}>
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/admin/activity" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View all activities →
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Classes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingClasses.map((classItem) => (
                <div key={classItem.id} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 text-sm">{classItem.program}</h4>
                  <p className="text-xs text-gray-600">{classItem.instructor}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">{classItem.date} at {classItem.time}</span>
                    <span className="text-xs text-gray-500">{classItem.students}/{classItem.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/admin/schedule" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View full schedule →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/students" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Add Student</div>
                <div className="text-sm text-gray-500">Enroll new student</div>
              </div>
            </Link>

            <Link href="/admin/courses" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200">
              <BookOpen className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Manage Programs</div>
                <div className="text-sm text-gray-500">Edit course details</div>
              </div>
            </Link>

            <Link href="/admin/payments" className="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200">
              <CreditCard className="h-8 w-8 text-emerald-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Process Payment</div>
                <div className="text-sm text-gray-500">Record payment</div>
              </div>
            </Link>

            <Link href="/admin/news" className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200">
              <Newspaper className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Post News</div>
                <div className="text-sm text-gray-500">Create announcement</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}