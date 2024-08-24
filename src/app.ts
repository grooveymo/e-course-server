import express, { Request, Response } from 'express';
import cors from 'cors';

import { CourseInput, CourseUpdateInput } from './types';
import prisma from './db';

const app = express();
const port = 3000;

app.use(express.json());

// Enable CORS for all routes
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow only our UI's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  })
);

// GET /courses (returns all courses)
app.get('/courses', async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch courses' });
  }
});

// GET /courses/:courseId (returns details for specific course)
app.get('/courses/:courseId', async (req: Request, res: Response) => {
  try {
    const course = await prisma.course.findUnique({
      where: { id: req.params.courseId },
    });
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch course' });
  }
});

// POST /courses (creates a new course)
app.post('/courses', async (req: Request, res: Response) => {
  try {
    const courseData: CourseInput = req.body;
    const newCourse = await prisma.course.create({
      data: { ...courseData, totalModulesCompleted: 0 },
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create course' });
  }
});

// PUT /courses/:courseId (updates course details)
app.put('/courses/:courseId', async (req: Request, res: Response) => {
  try {
    const courseData: CourseUpdateInput = req.body;
    const updatedCourse = await prisma.course.update({
      where: { id: req.params.courseId },
      data: courseData,
    });
    res.json(updatedCourse);
  } catch (error) {
    res.status(404).json({ message: 'Course not found' });
  }
});

// DELETE /courses/:courseId (deletes course)
app.delete('/courses/:courseId', async (req: Request, res: Response) => {
  try {
    const deletedCourse = await prisma.course.delete({
      where: { id: req.params.courseId },
    });
    res.json(deletedCourse);
  } catch (error) {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
