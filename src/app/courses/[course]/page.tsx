import { getCourse } from "@/services"
import Link from "next/link"

interface CoursePageProps {
  params: {
    course: string
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const course = params.course

  const result = await getCourse(course)

  return (
    <div>
      <h2>Curso: {result?.nome}</h2>

      <h2>Aulas</h2>
      {
        result?.aulas?.map((aula) => (
          <div className="flex gap-2" key={aula.id}>
            <h2>{aula.nome}</h2>
            <Link href={`/courses/${course}/${aula.slug}`}>Ver aula</Link>
          </div>
        ))
      }
    </div>
  )

}
