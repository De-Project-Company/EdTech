// db.ts
export const fetchDataFromDB = (): Promise<
  { id: number; title: string; content: string }[]
> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'React Basics',
          content: 'Learn the fundamentals of React.'
        },
        {
          id: 2,
          title: 'Node.js Crash Course',
          content: 'Quick overview of Node.js concepts.'
        },
        {
          id: 3,
          title: 'JavaScript Promises',
          content: 'Understanding promises in JS.'
        },
        {
          id: 4,
          title: 'CSS Flexbox Tutorial',
          content: 'Master Flexbox layout in CSS.'
        },
        {
          id: 5,
          title: 'Express.js Guide',
          content: 'Building web applications with Express.js.'
        },
        {
          id: 6,
          title: 'TypeScript Introduction',
          content: 'Getting started with TypeScript.'
        },
        {
          id: 7,
          title: 'Responsive Web Design',
          content: 'Create responsive web layouts.'
        },
        {
          id: 8,
          title: 'GraphQL Explained',
          content: 'Understanding GraphQL concepts.'
        },
        {
          id: 9,
          title: 'Database Design Basics',
          content: 'Essentials of database design.'
        },
        {
          id: 10,
          title: 'Tailwind CSS Styling',
          content: 'Apply styles with Tailwind CSS.'
        },
        {
          id: 11,
          title: 'React Hooks Tutorial',
          content: 'Deep dive into React Hooks.'
        },
        {
          id: 12,
          title: 'RESTful API Design',
          content: 'Best practices for designing RESTful APIs.'
        },
        {
          id: 13,
          title: 'Docker for Beginners',
          content: 'Introduction to Docker containers.'
        },
        {
          id: 14,
          title: 'Web Security Fundamentals',
          content: 'Basic principles of web security.'
        },
        {
          id: 15,
          title: 'Angular Framework Overview',
          content: 'Explore the Angular framework.'
        },
        {
          id: 16,
          title: 'Python Flask Web Development',
          content: 'Building web apps with Flask.'
        },
        {
          id: 17,
          title: 'AWS Cloud Services',
          content: 'Overview of Amazon Web Services (AWS).'
        },
        {
          id: 18,
          title: 'SASS and SCSS Styling',
          content: 'Advanced styling with SASS and SCSS.'
        },
        {
          id: 19,
          title: 'Jest Testing Framework',
          content: 'Testing JavaScript applications with Jest.'
        },
        {
          id: 20,
          title: 'Web Accessibility Guidelines',
          content: 'Designing accessible web interfaces.'
        },
        {
          id: 21,
          title: 'Java Spring Boot Introduction',
          content: 'Building Java web applications with Spring Boot.'
        },
        {
          id: 22,
          title: 'Vue.js Framework Basics',
          content: 'Learn the basics of Vue.js.'
        },
        {
          id: 23,
          title: 'Continuous Integration with Jenkins',
          content: 'Implement CI/CD pipelines with Jenkins.'
        },
        {
          id: 24,
          title: 'C# ASP.NET Core Web Development',
          content: 'Building web apps with ASP.NET Core.'
        },
        {
          id: 25,
          title: 'Mobile App Development with React Native',
          content: 'Build cross-platform mobile apps.'
        },
        {
          id: 26,
          title: 'GraphQL with Apollo Client',
          content: 'Using Apollo Client with GraphQL.'
        },
        {
          id: 27,
          title: 'WebAssembly Overview',
          content: 'Introduction to WebAssembly.'
        },
        {
          id: 28,
          title: 'Python Django Web Framework',
          content: 'Building web apps with Django.'
        },
        {
          id: 29,
          title: 'WebSockets and Real-Time Communication',
          content: 'Implement real-time features with WebSockets.'
        },
        {
          id: 30,
          title: 'Rust Programming Language Introduction',
          content: 'Getting started with Rust.'
        }
      ]);
    }, 1000);
  });
};
