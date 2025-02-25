const app = document.getElementById("app");

type UserType = {
	email: string;
	phone: string;
	ref: number;
	refBy: number | null;
};

type UserFormType = {
	email?: string;
	phone?: string;
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
	{
		email: "tost@tost.com",
		phone: "99999999999",
		ref: 300,
		refBy: 100,
	},
];

const getUsers = (userData: UserFormType) => {
	return users.find((user) => {
		return user.email === userData.email;
	});
};

const getTotalSubscribers = (userData: UserType) => {
	const subs = users.filter((user) => {
		return user.refBy === userData.ref;
	});

	return subs.length;
};

const showInvite = (userData: UserType) => {
	if (app == null) {
		return;
	}

	app.innerHTML = `
		<input id="link" type="text" value="https://rocketseat.com.br?ref=${userData.ref}" disabled />
		<div id="stats">
			<h4>${getTotalSubscribers(userData)}</h4>
			<p>Inscrições feitas</p>
		</div>
	`;
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

		if (user) {
			showInvite(user);
		} else {
			console.log(user);
		}
	};
};

const startApp = () => {
	if (app == null) {
		return;
	}

	const content = `
    <form id="form">
      <input type="email" name="email" placeholder="E-mail" />
      <input type="text" name="phone" placeholder="Telefone" />
      <button type="submit">Confirmar</button>
    </form>
  `;

	app.innerHTML = content;

	formAction();
};

startApp();
