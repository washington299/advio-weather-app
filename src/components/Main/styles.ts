import styled from 'styled-components';

export const Content = styled.main`
	margin: var(--size-lg) 0;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: calc(var(--size-xl2) * 4);
`;

export const WeatherNumber = styled.span`
	font-size: calc(var(--size-xl) * 2);
	font-weight: bold;
	color: var(--white);
`;

export const DefaultText = styled.p`
	font-size: var(--size-lg);
	color: var(--white);
`;
