"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BotMessageSquare, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

import { Button } from "@/components/button";
import { postMessages } from "@/http/api";
import { IconButton } from "./icon-button";
import { TextAreaField, TextAreaRoot } from "./textarea";

const askingSchema = z.object({
	message: z.string().min(5, "Digite a sua pergunta"),
});

type AskingSchema = z.infer<typeof askingSchema>;

export function Modal() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [messagesAndResponses, setMessagesAndResponses] = useState<string[]>(
		[],
	);

	const dummy = useRef(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<AskingSchema>({
		resolver: zodResolver(askingSchema),
	});

	async function onAsking({ message }: AskingSchema) {
		setMessagesAndResponses((prevState) => [...prevState, message]);

		const { response } = await postMessages({ message });

		setMessagesAndResponses((prevState) => [...prevState, response]);

		reset();
	}

	useEffect(() => {
		dummy.current?.scrollIntoView({ behavior: "smooth" });
	}, [messagesAndResponses]);

	return (
		<div
			className={twMerge(
				"fixed right-10 bottom-10 md:top-auto md:left-auto p-6 border-transparent border-2",
				modalIsOpen === true &&
					"top-10 left-10 flex flex-col justify-between bg-gray-700 border-blue rounded-2xl",
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
						Faça uma pergunta ao chat sobre os participantes do evento?
					</p>
				)}
			</div>

			{modalIsOpen === true && (
				<div className="flex mt-6 flex-col justify-between gap-6">
					<div className="overflow-y-scroll max-h-[30vh] space-y-4">
						{messagesAndResponses.map((text, index) => {
							return (
								<TextAreaRoot key={index}>
									<TextAreaField value={text} disabled />
								</TextAreaRoot>
							);
						})}

						<div ref={dummy} />
					</div>

					<form onSubmit={handleSubmit(onAsking)} className="space-y-4">
						<TextAreaRoot error={errors.message && true}>
							<TextAreaField
								placeholder="Pergunte alguma coisa"
								{...register("message")}
							/>
						</TextAreaRoot>
						{errors.message && (
							<p className="text-danger text-xs font-semibold">
								{errors.message.message}
							</p>
						)}

						<Button type="submit">
							Perguntar
							<MessageCircle />
						</Button>
					</form>
				</div>
			)}
		</div>
	);
}
