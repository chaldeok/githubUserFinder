class Github {
	constructor() {
		this.client_id = '68445ebcca452b36a22f';
		this.client_secret = 'a67e61aa3188694bac83f5a1e8293ccc4987a0a5';
		this.repos_count = 6;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?
		client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/
		repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&
		client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile: profile,
			repos: repos
		}
	}
}
