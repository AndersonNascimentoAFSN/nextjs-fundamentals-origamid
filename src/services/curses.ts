import { ICourse } from "@/types"

export async function getCourses() {
  const baseUrl = 'https://api.origamid.online/cursos';

  const url = new URL(baseUrl);

  const response = await fetch(url.toString())
  const courses: ICourse[] = await response.json()
  return courses
}

export async function getCourse(id?: string) {
  const baseUrl = 'https://api.origamid.online/cursos';
  const url = new URL(baseUrl);
  url.pathname += `/${id}`;

  const response = await fetch(url.toString())
  const courses: ICourse = await response.json()
  return courses
}