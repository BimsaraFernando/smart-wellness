// Course types
export interface Course {
  id: string;
  name: string;
  description: string;
  image?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
  duration: string;
  schedule: string;
  price: number;
  maxStudents: number;
  currentStudents: number;
  category: string;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Student types
export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth?: Date;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  enrolledCourses: string[]; // Course IDs
  joinDate: Date;
  status: 'Active' | 'Inactive' | 'Suspended';
  medicalNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Payment types
export interface Payment {
  id: string;
  studentId: string;
  courseId: string;
  amount: number;
  currency: string;
  status: 'Pending' | 'Completed' | 'Failed' | 'Refunded';
  paymentMethod: 'Cash' | 'Credit Card' | 'Bank Transfer' | 'Online';
  paymentDate: Date;
  dueDate: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Progress types
export interface Progress {
  id: string;
  studentId: string;
  courseId: string;
  currentBelt?: string;
  skillsAssessed: {
    [skillName: string]: number; // Score out of 10
  };
  testingHistory: {
    date: Date;
    belt: string;
    passed: boolean;
    notes?: string;
  }[];
  goals: string[];
  instructor: string;
  lastUpdated: Date;
}

// News types
export interface News {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image?: string;
  category: string;
  author: string;
  published: boolean;
  publishDate: Date;
  createdAt: Date;
  updatedAt: Date;
}