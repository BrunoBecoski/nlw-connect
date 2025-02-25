const app = document.getElementById("app");

type UserType = {
	email: string;
	phone: string;
	ref: number;
	refBy: number | null;
};

const users: UserType[] = [
	{
		email: "test@test.com",
		phone: "99999999999",
		ref: 100,
		refBy: null,
	},
	{
		email: "tust@tust.com",
		phone: "99999999999",
		ref: 200,
		refBy: 100,
	},
];

type GetUsersType = {
	email?: string;
	phone?: string;
};

const getUsers = (userData: GetUsersType) => {
	return users.find((user) => {
		return user.email === userData.email;
	});
};

const formAction = () => {
	const form = document.getElementById("form") as HTMLFormElement;

	form.onsubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(form);
		const userData = {
			email: formData.get("email")?.toString(),
			phone: formData.get("phone")?.toString(),
		};

		const user = getUsers(userData);

		console.log(user);
	};
};

const startApp = () => {
	const content = `
    <form id="form">
      <input type="email" name="email" placeholder="E-mail" />
      <input type="text" name="phone" placeholder="Telefone" />
      <button type="submit">Confirmar</button>
    </form>
  `;

	if (app) {
		app.innerHTML = content;
	}

	formAction();
};

startApp();
