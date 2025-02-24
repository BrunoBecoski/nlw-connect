const app = document.getElementById("app");

const formAction = () => {
	const form = document.getElementById("form");

	if (form == null) {
		return;
	}

	form.onsubmit = (event) => {
		event.preventDefault();
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
