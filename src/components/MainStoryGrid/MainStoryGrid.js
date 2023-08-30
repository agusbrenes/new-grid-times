import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<StoryWrapper key={story.id}>
							<SecondaryStory {...story} />
						</StoryWrapper>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionStoryList>
					{OPINION_STORIES.map((story, index) => (
						<OpinionStoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</OpinionStoryWrapper>
					))}
				</OpinionStoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	--grid-spacing: 16px;
	--story-spacing: 16px;

	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-areas:
			"main-story main-story secondary-stories"
			"advertisement advertisement advertisement"
			"opinion-stories opinion-stories opinion-stories";
		gap: 48px 0;
	}

	@media ${QUERIES.laptopAndUp} {
		grid-template-columns: 4fr 3.3fr 2.5fr;
		grid-template-areas:
			"main-story secondary-stories opinion-stories"
			"main-story advertisement advertisement";
		gap: 0;
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		border-right: 1px solid var(--color-gray-300);
		padding-right: var(--grid-spacing);
		margin-right: var(--grid-spacing);
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;

	@media ${QUERIES.laptopAndUp} {
		border-right: 1px solid var(--color-gray-300);
		padding-right: var(--grid-spacing);
		margin-right: var(--grid-spacing);
	}
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		flex-direction: row;
	}
`;

const StoryWrapper = styled.div`
	background-color: var(--color-gray-100);

	&:not(:last-of-type) {
		border-bottom: 1px solid var(--color-gray-300);
		padding-bottom: var(--story-spacing);
		margin-bottom: var(--story-spacing);
	}
`;

const OpinionStoryWrapper = styled(StoryWrapper)`
	@media ${QUERIES.tabletOnly} {
		&:not(:last-of-type) {
			border: none;
			padding: 0 var(--story-spacing) 0 0;
			margin: 0 var(--story-spacing) 0 0;
		}
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;

	@media ${QUERIES.laptopAndUp} {
		border-top: 1px solid var(--color-gray-300);
		padding-top: var(--grid-spacing);
		margin-top: var(--grid-spacing);
	}
`;

export default MainStoryGrid;
