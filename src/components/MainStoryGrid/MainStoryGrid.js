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
	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";
	gap: 48px;
	margin-bottom: 48px;
`;

const MainStorySection = styled.section`
	grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;
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
	--story-spacing: 16px;
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
`;

export default MainStoryGrid;
