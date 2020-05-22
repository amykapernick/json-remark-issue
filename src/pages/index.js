import React from 'react';
import { graphql } from 'gatsby';

const IndexPage = (data) => {
	const { content } = data.data.landingPagesJson;

	return (
		<h1>Index Page</h1>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		landingPagesJson(title: {eq: "Home"}) {
			content {
				heading
				type
				sections {
					content
					heading
				}
			}
		}
	}
`;
