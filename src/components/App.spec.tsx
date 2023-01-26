import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import { render, fireEvent } from '@testing-library/react';
import React, { FC } from 'react';
import App from '../App';
import { ListType } from './list/list';

describe.only('should render app component', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
		fetchMock.mockResponseOnce(JSON.stringify([]));
	});

	test('should render component', () => {
		const { container, getByTestId } = render(<App initialCounter={17} />);
		const element = getByTestId('app-container');
		expect(element).toBeTruthy();
	});
	test('counter should be 17', () => {
		const { container, getByTestId } = render(<App initialCounter={17} />);
		const element = getByTestId('app-button');
		expect(element.textContent).toBe('count is 17');
	});
	test('counter should be 18', () => {
		const { container, getByTestId } = render(<App initialCounter={17} />);
		const element = getByTestId('app-button');
		fireEvent.click(element);
		expect(element.textContent).toBe('count is 18');
	});
	test('counter should be restarted to 0', () => {
		const { container, getByTestId } = render(<App initialCounter={17} />);
		const topBarReset = getByTestId('top-bar-reset-button');
		fireEvent.click(topBarReset);
		const element = getByTestId('app-button');
		expect(element.textContent).toBe('count is 0');
	});
	describe('when integrated with List', () => {
		test('fetch should be called once', async () => {
			const { queryAllByRole } = render(<App initialCounter={17} />);
			expect(global.fetch).toHaveBeenCalledTimes(1);
		});
		test('fetch should be called with default url', async () => {
			const { queryAllByRole } = render(<App initialCounter={17} />);
			expect(global.fetch).toHaveBeenCalledWith(
				'https://jsonplaceholder.typicode.com/todos?_limit=3'
			);
		});
		test('fetch should be called with custom url', async () => {
			const { queryAllByRole } = render(
				<App initialCounter={17} listType={ListType.POSTS} />
			);
			expect(global.fetch).toHaveBeenCalledWith(
				'https://jsonplaceholder.typicode.com/posts?_limit=3'
			);
		});
	});
});
