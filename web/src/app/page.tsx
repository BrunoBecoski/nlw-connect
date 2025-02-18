import { ArrowRight, Copy, Mail, User } from "lucide-react";

import { InputField, InputIcon, InputRoot } from "@/componentes/input";
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

      <InputRoot>
        <InputIcon>
          <User className="size-5" />
        </InputIcon>

        <InputField placeholder="Digite seu nome" />
      </InputRoot>

      <InputRoot error>
        <InputIcon>
          <Mail />
        </InputIcon>

        <InputField placeholder="Digite seu e-mail" />

        <InputIcon>
          <Copy />
        </InputIcon>

      </InputRoot>
    </main>
  );
}
