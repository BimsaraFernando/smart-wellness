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
import { Student } from '@/types/index';

const COLLECTION_NAME = 'students';

export const studentService = {
  // Get all students
  async getAllStudents(): Promise<Student[]> {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'))
      );
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Student));
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  },

  // Get student by ID
  async getStudentById(id: string): Promise<Student | null> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as Student;
      }
      return null;
    } catch (error) {
      console.error('Error fetching student:', error);
      throw error;
    }
  },

  // Create new student
  async createStudent(studentData: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const now = Timestamp.now().toDate().toISOString();
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...studentData,
        createdAt: now,
        updatedAt: now
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  },

  // Update student
  async updateStudent(id: string, updates: Partial<Student>): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const now = Timestamp.now().toDate().toISOString();
      await updateDoc(docRef, {
        ...updates,
        updatedAt: now
      });
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
  },

  // Delete student
  async deleteStudent(id: string): Promise<void> {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
    }
  },

  // Get students by status
  async getStudentsByStatus(status: Student['status']): Promise<Student[]> {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('status', '==', status),
        orderBy('lastName', 'asc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Student));
    } catch (error) {
      console.error('Error fetching students by status:', error);
      throw error;
    }
  },

  // Get students by course
  async getStudentsByCourse(courseId: string): Promise<Student[]> {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('courses', 'array-contains', courseId),
        orderBy('lastName', 'asc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Student));
    } catch (error) {
      console.error('Error fetching students by course:', error);
      throw error;
    }
  },

  // Get overdue payments
  async getStudentsWithOverduePayments(): Promise<Student[]> {
    try {
      const today = new Date().toISOString().split('T')[0];
      const q = query(
        collection(db, COLLECTION_NAME),
        where('paymentInfo.status', '==', 'overdue'),
        where('paymentInfo.nextPaymentDue', '<', today)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Student));
    } catch (error) {
      console.error('Error fetching students with overdue payments:', error);
      throw error;
    }
  }
};