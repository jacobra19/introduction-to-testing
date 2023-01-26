import React, { FC } from 'react';

interface ITopBar {
	counter: number;
	onReset: () => void;
}

export const TopBar: FC<ITopBar> = ({ counter, onReset }) => {
	return (
		<div
			data-testid='top-bar-container'
			style={{
				backgroundColor: 'lightblue',
				width: '100%',
				fontWeight: 'bold',
			}}
		>
			<div data-testid={'top-bar-title'}>top bar here</div>
			<div data-testid={'top-bar-counter'}>counter: {counter}</div>
			<button onClick={onReset} data-testid={'top-bar-reset-button'}>
				reset
			</button>
		</div>
	);
};
