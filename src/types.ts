export interface Course {
  id: string;
  name: string;
  duration: number;
  totalModules: number;
  totalModulesCompleted: number;
}

export interface CourseInput {
  name: string;
  duration: number;
  totalModules: number;
  totalModulesCompleted: number;
}

export interface CourseUpdateInput {
  name?: string;
  duration?: number;
  totalModules?: number;
  totalModulesCompleted?: number;
}
