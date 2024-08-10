# e-course-server
Provides an api layer for the e-course ui

# Instructions

1. Install dependencies:
    - $ pnpm install
  
2. Deploy app
    - $ pnpm run dev    

3. Check app is running
   - $ curl http://localhost:3000/courses

   This should return data like:
   [
        {
            "id": "1",
            "name": "Introduction to TypeScript",
            "duration": 4,
            "totalModules": 10,
            "totalModulesCompleted": 5
        },
        {
            "id": "2",
            "name": "Express.js Fundamentals",
            "duration": 6,
            "totalModules": 12,
            "totalModulesCompleted": 3
        }
    ]

   