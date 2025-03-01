import type { ComponentProps } from "react";

interface TextAreaRootProps extends ComponentProps<"div"> {}

export function TextAreaRoot(props: TextAreaRootProps) {
	return (
		<div
			className="group bg-gray-800 border border-gray-600 rounded-xl p-4 flex items-center gap-2 focus-within:border-gray-100"
			{...props}
		/>
	);
}

interface TextAreaFieldProps extends ComponentProps<"textarea"> {}

export function TextAreaField(props: TextAreaFieldProps) {
	return (
		<textarea
			rows={3}
			className="flex-1 outline-0 placeholder-gray-400 text-gray-100 resize-none overflow-"
			{...props}
		/>
	);
}
