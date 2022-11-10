import React from 'react';
import styled from 'styled-components';

const Content = styled.header`
	padding: var(--size-md) 0;
	font-size: var(--size-lg);
	background-color: var(--dark-gray);
	color: var(--white);
	text-align: center;
`;

export const Header = () => {
	return (
		<Content>
			<div>Weather app</div>
		</Content>
	);
};
