import { getCourses } from "@/services"
import { ICourse } from "@/types"
import Link from "next/link"

export default async function CoursePage() {
  const courses = await getCourses()

  return (
    <div>
        <h2>Cursos</h2>
        {courses?.map((course: ICourse) => (
          <div key={course.id}>
            <Link href={`/courses/${course.slug}`}>{course.nome}</Link>
          </div>
        ))}
    </div>
  )
}
