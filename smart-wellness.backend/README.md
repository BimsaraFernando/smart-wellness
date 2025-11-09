# Dragon's Path Martial Arts Academy

A comprehensive martial arts academy management system built with Next.js and Firebase. This application provides a complete solution for managing students, payments, progress tracking, course management, and academy news.

## 🥋 Features

### Student Management
- Complete student profiles with personal and contact information
- Enrollment tracking and status management
- Emergency contact information
- Medical information storage
- Belt progression tracking

### Payment System
- Tuition payment tracking
- Multiple payment plans (monthly, quarterly, annual)
- Payment status monitoring
- Overdue payment alerts
- Invoice generation

### Progress Tracking
- Belt progression tracking
- Skill assessments
- Testing history
- Goal setting and tracking
- Instructor feedback

### Course Management
- Course creation and scheduling
- Instructor assignments
- Capacity management
- Age group categorization
- Pricing management

### News & Events
- Academy news publication
- Event announcements
- Achievement highlights
- Newsletter system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-wellness.backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication, Firestore, and Storage
   - Copy your Firebase configuration

4. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- **Frontend**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## 📱 Application Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard pages
│   │   ├── students/      # Student management
│   │   ├── payments/      # Payment tracking
│   │   ├── progress/      # Progress tracking
│   │   ├── courses/       # Course management
│   │   └── news/          # News management
│   ├── courses/           # Public course pages
│   ├── news/              # Public news pages
│   └── page.tsx           # Home page
├── components/             # Reusable UI components
├── lib/                   # Utility functions and Firebase config
├── types/                 # TypeScript type definitions
└── styles/                # Global styles
```

## 🔥 Firebase Setup

### Firestore Collections

The application uses the following Firestore collections:

- **students**: Student profiles and information
- **courses**: Course details and schedules
- **payments**: Payment records and tracking
- **progress**: Student progress and assessments
- **news**: Academy news and announcements
- **instructors**: Instructor profiles

### Security Rules

Make sure to configure Firestore security rules for proper data access control.

## 🎯 Usage

### For Academy Staff
1. Access the admin dashboard at `/admin`
2. Manage students, payments, and progress
3. Create and schedule courses
4. Publish news and announcements

### For Students/Parents
1. View available courses at `/courses`
2. Read academy news at `/news`
3. Access student portal for progress tracking

## 🚀 Deployment

### Deploy to Vercel

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure Environment Variables**
   Add your Firebase configuration to Vercel's environment variables.

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to Other Platforms

This Next.js application can be deployed to any platform that supports Node.js applications, including:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Google Cloud Platform
- Azure Static Web Apps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Dragon's Path Martial Arts Academy** - Empowering students through traditional martial arts training and modern management.
