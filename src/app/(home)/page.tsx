import { DefineCookies } from "@/components/molecules/define-cookies";
import { ShowCookie } from "@/components/molecules/show-cookie";


export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      <DefineCookies />
      <ShowCookie />
    </main>
  );
}
