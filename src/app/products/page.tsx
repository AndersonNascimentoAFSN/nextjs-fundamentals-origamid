// import { ClientFetch } from "@/components/molecules/client-fetch";
import { ServerFetch } from "@/components/molecules/server-fetch";

export default function Products() {
  return (
    <main>
      <h1>Produtos</h1>
      <ServerFetch />
      {/* <ClientFetch /> */}
    </main>
  );
}