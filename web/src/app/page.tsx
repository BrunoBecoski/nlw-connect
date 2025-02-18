import { ArrowRight, Copy } from "lucide-react";

import { IconButton } from "@/componentes/icon-button";
import { Button } from "@/componentes/button";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </ IconButton>
    </main>
  );
}
