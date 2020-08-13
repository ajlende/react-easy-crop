module.exports = {
	stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
	addons: [
		// Preset
		"@storybook/preset-create-react-app",

		// Toolbar
		"@storybook/addon-docs",
		"@storybook/addon-viewport",

		// Panel
		"@storybook/addon-controls",
		"@storybook/addon-actions",
		"@storybook/addon-storysource",
		"@storybook/addon-a11y",

		// Other Addons
		"@storybook/addon-links",
	],
}
