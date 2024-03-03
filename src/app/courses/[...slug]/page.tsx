import { getCourse } from "@/services"
import Link from "next/link"

interface SlugPageProps {
  params: {
    slug: string[]
  }
}

export default async function SlugPage({
  params
}: SlugPageProps) {
  const slug = params.slug.join('/')
  const course = await getCourse(slug)

  return (
    <div>
      <h1>{course?.nome}</h1>
      <div>
        {
          course?.aulas?.map((aula) => (
            <>
              <h2>Aulas</h2>
              <div key={aula.id} className="flex gap-2">
                <h2>{aula.nome}</h2>
                <p>{aula.descricao}</p>
                <p>{aula.tempo}</p>
                <Link href={`/courses/${slug}/${aula.slug}`}>Ver aula</Link>
              </div>
            </>
          ))
        }
      </div>

    </div>
  )
}
