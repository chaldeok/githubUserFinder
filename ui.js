class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}

	showProfile(user) {
		this.profile.innerHTML = `
		<div class="card card-body mb-3">
			<div class="row">
				<div class="col-md-3">
					<img class="img-fluid mb-2" src="${user.avatar_url}">
					<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Открыть профиль</a>
				</div>
				<div class="col-md-9">
					<span class="badge badge-warning p-2">Репозитории: ${user.public_repos}</span>
					<span class="badge badge-secondary p-2">Открытые Гисты: ${user.public_gists}</span>
					<span class="badge badge-success p-2">Подписчики: ${user.followers}</span>
					<span class="badge badge-info p-2">Подписки: ${user.following}</span>
					<br><br>
					<ul class="list-group">
						<li class="list-group-item">Компания: ${user.company}</li>
						<li class="list-group-item">Сайт: ${user.blog}</li>
						<li class="list-group-item">Место проживания: ${user.location}</li>
						<li class="list-group-item">Зарегистрирован: ${user.created_at}</li>
					</ul>
				</div>
			</div>
		</div>
		<h3 class="page-heading mb-3">Новейшие репозитории</h3>
		<div id="repos"></div>
		`
	};

	showRepos(repos) {
		let output = '';

		repos.forEach(function(repo) {
			output += `
			<div class="card card-body mb-2">
				<div class="row">
					<div class="col-md-6">
						<a href="${repo.html_url}" target="_blank">${repo.name}</a>
					</div>
					<div class="col-md-6">
						<span class="badge badge-success p-2">Звезды: ${repo.stargazers_count}</span>
						<span class="badge badge-info p-2">Наблюдатели: ${repo.watchers_count}</span>
						<span class="badge badge-warning p-2">Ветки: ${repo.forks_count}</span>
					</div>
				</div>
			</div>
			`
		});
		document.getElementById('repos').innerHTML = output;
	};

	showAlert(message, className) {
		this.clearAlert();

		const div = document.createElement('div');
		div.className = className;
		div.appendChild(document.createTextNode(message));
		const parentElement = document.querySelector('.searchContainer');
		const insertBeforeElement = document.querySelector('.search');
		parentElement.insertBefore(div, insertBeforeElement);

		// Timeout in 3 sec
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	};

	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if(currentAlert) {
			currentAlert.remove();
		}
	};

	clearProfile() {
		this.profile.innerHTML = '';
	};
}