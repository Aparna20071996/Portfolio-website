import { FiCode, FiLayout, FiServer, FiDatabase, FiSmartphone, FiShield } from 'react-icons/fi';

export const SERVICES_DATA = [
  {
    id: 1,
    icon: FiLayout,
    title: 'Frontend Development',
    description: 'Creating responsive, interactive, and visually appealing user interfaces that provide an exceptional user experience.',
    features: [
      'React.js & Next.js Development',
      'Responsive Web Design',
      'Modern CSS & Animations',
      'Performance Optimization'
    ]
  },
  {
    id: 2,
    icon: FiServer,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs that power your web applications with efficiency and security.',
    features: [
      'Node.js & Express.js',
      'RESTful API Development',
      'Authentication & Authorization',
      'Server Optimization'
    ]
  },
  {
    id: 3,
    icon: FiCode,
    title: 'Full Stack Development',
    description: 'End-to-end development of web applications, from the user interface to the server-side logic and database management.',
    features: [
      'MERN Stack Development',
      'Database Integration',
      'Third-party API Integration',
      'Deployment & DevOps'
    ]
  },
  {
    id: 4,
    icon: FiSmartphone,
    title: 'Responsive Web Design',
    description: 'Creating websites that look and function perfectly on all devices, from desktops to smartphones and tablets.',
    features: [
      'Mobile-First Design',
      'Cross-Browser Compatibility',
      'Progressive Web Apps',
      'Touch-Friendly Interfaces'
    ]
  },
  {
    id: 5,
    icon: FiDatabase,
    title: 'Database Design',
    description: 'Designing and implementing efficient database structures that ensure data integrity, security, and optimal performance.',
    features: [
      'SQL & NoSQL Databases',
      'Data Modeling',
      'Query Optimization',
      'Database Security'
    ]
  },
  {
    id: 6,
    icon: FiShield,
    title: 'Web Security',
    description: 'Implementing robust security measures to protect your web applications from common vulnerabilities and threats.',
    features: [
      'Security Audits',
      'Data Encryption',
      'Secure Authentication',
      'OWASP Best Practices'
    ]
  }
];