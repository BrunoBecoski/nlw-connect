const app = document.getElementById("app");

type UserType = {
	email: string;
	phone: string;
	ref: number;
	refBy: number | null;
};

type UserFormType = {
	email: string;
	phone: string;
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
		refBy: 200,
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

const saveUser = (userData: UserFormType) => {
	const newUser = {
		...userData,
		ref: Math.round(Math.random() * 4000),
		refBy: 100,
	};

	users.push(newUser);
	return newUser;
};

const formAction = () => {
	const form = document.getElementById("form") as HTMLFormElement;

	form.onsubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(form);

		const email = formData.get("email")?.toString();
		const phone = formData.get("phone")?.toString();

		if (email === undefined || phone === undefined) {
			return;
		}

		const user = getUsers({ email, phone });

		if (user) {
			showInvite(user);
		} else {
			const newUser = saveUser({ email, phone });
			showInvite(newUser);
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

const logo = document.getElementById("logo");

if (logo) {
	logo.onclick = () => startApp();
}
