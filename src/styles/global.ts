import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

	*, html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto', sans-serif;
		background-color: var(--light-gray);
	}

	:root {
		--white: #FFFFFF;
		--light-gray: #718096;
		--dark-gray: #4A5568;
		--orange: #DD6B20;

		--size-xs: 4px;
		--size-sm: 8px;
		--size-md: 16px;
		--size-lg: 24px;
		--size-xl: 32px;
		--size-xl2: 48px;
	}
`;
