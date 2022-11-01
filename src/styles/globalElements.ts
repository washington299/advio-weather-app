import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1080px;
	margin: auto;
	padding: 0 var(--size-md);
`;

export const Spinner = styled.div`
	width: var(--size-xl2);
	height: var(--size-xl2);
	border: var(--size-xs) solid rgba(0, 0, 0, 0.1);
	border-left-color: var(--orange);
	border-radius: 50%;
	animation: spin 0.8s linear infinite;

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;
