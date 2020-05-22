import React from 'react';
import { graphql } from 'gatsby';

const IndexPage = (data) => {
	console.log(data)
	return (
		<div>
			<h1>Index Page</h1>
		<a href="__graphql?query=%7B%0A%20%20landingPagesJson(title%3A%20%7Beq%3A%20%22Home%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%20%7B%0A%20%20%20%20%20%20sections%20%7B%0A%20%20%20%20%20%20%20%20content%0A%20%20%20%20%20%20%20%20heading%0A%20%20%20%20%20%20%20%20contentHtml%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A">Access GraphQL</a>
		</div>
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
