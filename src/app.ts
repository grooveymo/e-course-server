import express, { Request, Response } from 'express';
import { Course } from './types';
import { courses } from './courseData';

const app = express();
const port = 3000;

app.use(express.json());

// GET /courses (returns all courses)
app.get('/courses', (req: Request, res: Response) => {
  res.json(courses);
});

// GET /courses/:courseId (returns details for specific course)
app.get('/courses/:courseId', (req: Request, res: Response) => {
  const course = courses.find((c) => c.id === req.params.courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

// PUT /courses/:courseId (updates course details)
app.put('/courses/:courseId', (req: Request, res: Response) => {
  const courseIndex = courses.findIndex((c) => c.id === req.params.courseId);
  if (courseIndex !== -1) {
    const updatedCourse: Course = { ...courses[courseIndex], ...req.body };
    courses[courseIndex] = updatedCourse;
    res.json(updatedCourse);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

// DELETE /courses/:courseId (deletes course)
app.delete('/courses/:courseId', (req: Request, res: Response) => {
  const courseIndex = courses.findIndex((c) => c.id === req.params.courseId);
  if (courseIndex !== -1) {
    const deletedCourse = courses.splice(courseIndex, 1)[0];
    res.json(deletedCourse);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
