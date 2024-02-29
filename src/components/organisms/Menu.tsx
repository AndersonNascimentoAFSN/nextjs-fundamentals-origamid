import { Link } from "../molecules";

export function Menu() {
  return (
    <ul className="flex gap-6 p-0 list-none">
      <li>
        <Link href="/" prefetch={true}>Home</Link>
      </li>
      <li>
        <Link href="/about" prefetch={true}>Sobre</Link>
      </li>
      <li>
        <Link href="/about#empresa" prefetch={true} scroll={true}>Empresa</Link>
      </li>
      <li>
        <Link href="/contact" prefetch={true}>Contato</Link>
      </li>
      <li>
        <Link href="/access" prefetch={true}>Acessos</Link>
      </li>
    </ul>
  )
}
