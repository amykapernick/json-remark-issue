module.exports = {
	siteMetadata: {
		title: `Climate Clever`,
		description: `The ClimateClever Initiative is a new engaging, data-driven program underpinned by innovative online tools designed to help schools and communities to measure, monitor, compare and reduce their carbon footprint and become a leader in sustainability and climate action. It can also save considerable money in the process!`,
		tagline: `Clever solutions for tackling climate change`,
		siteUrl: `https://climateclever.org`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `landing_pages`,
				path: `${__dirname}/_data/landing_pages`
			}
		},
		{
			resolve: `gatsby-transformer-json`
		},
		{
			resolve: `gatsby-transformer-remark`,
		},
		{
			resolve: `gatsby-plugin-json-remark`,
			options: {
				paths: [
				  `${__dirname}/_data/landing_pages`,
				],
				fieldNameBlacklist: ['title', 'heading', 'image', 'type'],
			},
		}
	]
};
