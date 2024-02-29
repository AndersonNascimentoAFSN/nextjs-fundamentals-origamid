import fs from 'fs/promises'

export async function Access() {
  await fs.appendFile('access.txt', new Date().toISOString() + '\n', 'utf8')
  const access = await fs.readFile('access.txt', 'utf8')

  const accessToArray = access?.split('\n')?.filter(item => item)

  return (
    <div>
      <ul>
        {accessToArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
