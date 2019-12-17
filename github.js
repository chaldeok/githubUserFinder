class Github {
	constructor() {
		this.client_id = '68445ebcca452b36a22f';
		this.client_secret = 'a67e61aa3188694bac83f5a1e8293ccc4987a0a5';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		return {
			profile: profile
		}
	}
}
