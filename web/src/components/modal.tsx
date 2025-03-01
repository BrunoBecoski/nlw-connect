"use client";

import { Button } from "@/components/button";

import { BotMessageSquare, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconButton } from "./icon-button";
import { TextAreaField, TextAreaRoot } from "./textarea";

export function Modal() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div
			data-modalIsOpen={modalIsOpen}
			className={twMerge(
				"fixed right-10 bottom-10 md:top-auto md:left-auto p-6 border-transparent border-2",
				modalIsOpen === true &&
					"left-10 flex flex-col justify-between bg-gray-700 border-blue rounded-2xl",
			)}
		>
			<div className="flex items-center gap-6">
				<IconButton
					onClick={() => setModalIsOpen((prevState) => !prevState)}
					className="rounded-full p-4 border-2 "
					title={modalIsOpen ? "Fechar chat" : "Abrir chat"}
				>
					<BotMessageSquare className="size-12" />
				</IconButton>
				{modalIsOpen === true && (
					<p className="text-gray-200 text-lg font-heading font-semibold leading-none">
						Faca uma pergunta ao chat sobre os participantes do evento?
					</p>
				)}
			</div>

			{modalIsOpen === true && (
				<div className="flex mt-6 flex-col flex-1 justify-between gap-6">
					<div className="overflow-y-scroll max-h-[50vh] md:max-h-[30vh] space-y-4">
						<TextAreaRoot>
							<TextAreaField placeholder="Me diga o nome dos usuários que não conseguiram convidar ninguém pro evento!" />
						</TextAreaRoot>
					</div>

					<Button>
						Perguntar
						<MessageCircle />
					</Button>
				</div>
			)}
		</div>
	);
}
