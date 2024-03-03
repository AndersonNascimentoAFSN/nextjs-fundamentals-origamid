import { getCourse } from "@/services"
import Link from "next/link"

interface classroomPageProps {
  params: {
    course: string
    classroom: string
  }
}

export default async function classroomPage({ params }: classroomPageProps) {
  const course = params.course
  const classroom = params.classroom

  const result = await getCourse(`${course}/${classroom}`)

  return (
    <div>
      <h2>Aula: {result.nome} - {result.descricao}</h2>
    </div>
  )
}