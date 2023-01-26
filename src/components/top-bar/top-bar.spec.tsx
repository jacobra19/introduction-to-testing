import { render } from '@testing-library/react';
import React, { FC } from 'react';
import { TopBar } from './top-bar';

describe('should render top bar component', () => {
	test('should render component', () => {
		const { container, getByTestId } = render(
			<TopBar counter={0} onReset={() => {}} />
		);
		const element = getByTestId('top-bar-container');
		expect(element).toBeTruthy();
	});

	test('should title be top bar here', () => {
		const { container, getByTestId } = render(
			<TopBar counter={0} onReset={() => {}} />
		);
		const element = getByTestId('top-bar-title');
		expect(element.textContent).toBe('top bar here');
	});

	test('should counter be 0', () => {
		const { container, getByTestId } = render(
			<TopBar counter={0} onReset={() => {}} />
		);
		const element = getByTestId('top-bar-counter');
		expect(element.textContent).toBe('counter: 0');
	});

	test('should button text be reset', () => {
		const { container, getByTestId } = render(
			<TopBar counter={0} onReset={() => {}} />
		);
		const element = getByTestId('top-bar-reset-button');
		expect(element.textContent).toBe('reset');
	});
});
