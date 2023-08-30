import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
	return (
		<Wrapper>
			<MarketsSection>
				<SectionTitle
					cornerLink={{
						href: "/markets",
						content: "Visit Markets data »",
					}}
				>
					Markets
				</SectionTitle>
				<MarketCards>
					{MARKET_DATA.map((data) => (
						<MarketCard key={data.tickerSymbol} {...data} />
					))}
				</MarketCards>
			</MarketsSection>
			<SportsSection>
				<SectionTitle
					cornerLink={{
						href: "/sports",
						content: "Visit Sports page »",
					}}
				>
					Sports
				</SectionTitle>
				<SportsStoriesGrid>
					<SportsStoriesWrapper>
						<SportsStories>
							{SPORTS_STORIES.map((data) => (
								<MiniStoryWrapper key={data.id}>
									<MiniStory {...data} />
								</MiniStoryWrapper>
							))}
						</SportsStories>
					</SportsStoriesWrapper>
				</SportsStoriesGrid>
			</SportsSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	--spacing: 16px;
	--sports-story-width: 13.75rem;

	display: grid;
	gap: 48px;

	@media ${QUERIES.laptopAndUp} {
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		background-color: var(--color-gray-300);
	}
`;

const MarketsSection = styled.section`
	@media ${QUERIES.laptopAndUp} {
		padding-right: var(--spacing);
		background-color: var(--color-gray-100);
	}
`;

const MarketCards = styled.div`
	display: grid;
	gap: 1rem;

	//! Fluid Approach
	grid-template-columns: repeat(auto-fill, minmax(min(11rem, 100%), 1fr));
`;

const SportsSection = styled.div`
	@media ${QUERIES.laptopAndUp} {
		padding-left: var(--spacing);
		background-color: var(--color-gray-100);
	}
`;

const SportsStoriesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`;

const SportsStoriesWrapper = styled.div`
	overflow: auto;
`;

const SportsStories = styled.div`
	display: grid;
	gap: 1rem;
	//! Fluid Approach
	grid-template-columns: repeat(auto-fill, minmax(min(var(--sports-story-width), 100%), 1fr));

	@media ${QUERIES.tabletAndUp} {
		grid-auto-flow: column;
		grid-template-columns: revert;
	}
`;

const MiniStoryWrapper = styled.div`
	width: 100%;

	@media ${QUERIES.tabletAndUp} {
		width: var(--sports-story-width);
	}
`;

export default SpecialtyStoryGrid;
