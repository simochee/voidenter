export default {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/git",
		{ assets: ["CHANGELOG.md", "package.json", "package-lock.json"] },
	],
};
