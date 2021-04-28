import styled from 'styled-components';

import colors from '../../styles/colors';

export const Button = styled.button`
	height: 36px;
	width: 142px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	border: 0;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.primary};
	transition: background 0.2s;
	&:hover {
		background: #ff2975;
	}
	svg {
		margin-right: 8px;
	}
`;
