# e-course-server
Provides an api layer for the e-course ui

# Instructions

1. Install dependencies:
    - $ pnpm install
  
2. Deploy app
    - $ pnpm run dev    

3. Open a terminal and inspect the database:   
   -    $ npx prisma studio

4. Check api routes are working as expected using curl
   
   # Get all courses
    curl http://localhost:3000/courses

    # Create a new course
    curl -X POST -H "Content-Type: application/json" -d '{"name":"New Course", "duration":5, "totalModules":10, "totalModulesCompleted":0}' http://localhost:3000/courses

    # Get a specific course (replace [id] with an actual id)
    curl http://localhost:3000/courses/[id]

    # Update a course (replace [id] with an actual id)
    curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Course Name"}' http://localhost:3000/courses/[id]

    # Delete a course (replace [id] with an actual id)
    curl -X DELETE http://localhost:3000/courses/[id]

