import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
	return (
		<a href={`/story/${id}`}>
			<Wrapper>
				<Avatar alt="" src={avatar} />
				<div>
					<AuthorName>{author}</AuthorName>
					<ArticleTitle>{title}</ArticleTitle>
				</div>
			</Wrapper>
		</a>
	);
};

const Wrapper = styled.article`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: flex-start;
	gap: 32px;
	color: var(--color-gray-900);

	@media ${QUERIES.tabletAndUp} {
		flex-direction: column;
		gap: 8px;
	}

	@media ${QUERIES.laptopAndUp} {
		flex-direction: row-reverse;
		gap: 16px;
	}
`;

const Avatar = styled.img`
	display: block;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	object-fit: cover;
	margin-top: 3px;

	@media ${QUERIES.tabletOnly} {
		margin: 0;
	}
`;

const AuthorName = styled.p`
	font-size: 1.125rem;
	font-weight: var(--font-weight-medium);
	color: var(--color-gray-700);
	margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: var(--font-weight-bold);
	line-height: 1.3;
`;

export default OpinionStory;
