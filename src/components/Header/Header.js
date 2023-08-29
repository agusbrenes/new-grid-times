import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
	return (
		<header>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<User size={24} />
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<MainHeaderWrapper>
					<HeaderLeftOptions>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</HeaderLeftOptions>
					<MainLogo />
					<HeaderRightOptions>
						<Button>Subscribe</Button>
						<SubscriberButton>Already a subscriber?</SubscriberButton>
					</HeaderRightOptions>
				</MainHeaderWrapper>
			</MainHeader>
		</header>
	);
};

const MainLogo = styled(Logo)`
	@media ${QUERIES.tabletAndUp} {
		font-size: ${64 / 16}rem;
	}
`;

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;

	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`;

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
`;

const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`;

const MainHeaderWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;

	@media ${QUERIES.laptopAndUp} {
		width: 100%;
	}
`;

const HeaderLeftOptions = styled(ActionGroup)`
	display: none;

	@media ${QUERIES.laptopAndUp} {
		position: absolute;
		left: 0;
		display: flex;
	}
`;

const HeaderRightOptions = styled.div`
	display: none;

	@media ${QUERIES.laptopAndUp} {
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
`;

const SubscriberButton = styled.button`
	background: none;
	color: var(--color-gray-900);
	font-size: ${14 / 16}rem;
	font-style: italic;
	text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		margin-top: 48px;
		margin-bottom: 72px;
	}

	@media ${QUERIES.laptopAndUp} {
		margin-top: 16px;
	}
`;

export default Header;
