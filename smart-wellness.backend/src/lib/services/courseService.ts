import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Course } from '@/types/index';

const COLLECTION_NAME = 'courses';

export const courseService = {
  // Get all courses
  async getAllCourses(): Promise<Course[]> {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'))
      );
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Course));
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },

  // Get course by ID
  async getCourseById(id: string): Promise<Course | null> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as Course;
      }
      return null;
    } catch (error) {
      console.error('Error fetching course:', error);
      throw error;
    }
  },

  // Create new course
  async createCourse(courseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const now = Timestamp.now().toDate().toISOString();
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...courseData,
        createdAt: now,
        updatedAt: now
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  },

  // Update course
  async updateCourse(id: string, updates: Partial<Course>): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const now = Timestamp.now().toDate().toISOString();
      await updateDoc(docRef, {
        ...updates,
        updatedAt: now
      });
    } catch (error) {
      console.error('Error updating course:', error);
      throw error;
    }
  },

  // Delete course
  async deleteCourse(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
    }
  },

  // Get courses by level
  async getCoursesByLevel(level: Course['level']): Promise<Course[]> {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('level', '==', level),
        orderBy('name', 'asc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Course));
    } catch (error) {
      console.error('Error fetching courses by level:', error);
      throw error;
    }
  },

  // Get courses by instructor
  async getCoursesByInstructor(instructor: string): Promise<Course[]> {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('instructor', '==', instructor),
        orderBy('name', 'asc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Course));
    } catch (error) {
      console.error('Error fetching courses by instructor:', error);
      throw error;
    }
  },

  // Update course enrollment
  async updateCourseEnrollment(courseId: string, currentStudents: number): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, courseId);
      const now = Timestamp.now().toDate().toISOString();
      await updateDoc(docRef, {
        currentStudents,
        updatedAt: now
      });
    } catch (error) {
      console.error('Error updating course enrollment:', error);
      throw error;
    }
  }
};