module.exports = {
	stories: ["../src/**/*.stories.(ts|tsx|js|jsx)"],
	addons: [
		"@storybook/preset-create-react-app",
		"@storybook/addon-a11y/register",
		"@storybook/addon-actions",
		"@storybook/addon-knobs/register",
		"@storybook/addon-links",
		"@storybook/addon-storysource",
		"@storybook/addon-viewport/register",
	],
}
