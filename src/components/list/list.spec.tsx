import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { List, ListType } from './list';

describe('when list is rendered', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
		fetchMock.mockResponseOnce(
			JSON.stringify([
				{
					userId: 1,
					id: 1,
					title: 'delectus aut autem',
					completed: true,
				},
				{
					userId: 1,
					id: 2,
					title: 'quis ut nam facilis et officia qui',
					completed: false,
				},
				{
					userId: 1,
					id: 3,
					title: 'fugiat veniam minus',
					completed: false,
				},
			])
		);
	});
	test('should show 0 items', async () => {
		const { queryAllByRole } = render(<List listType={ListType.TODOS} />);
		expect(queryAllByRole('listitem')).toHaveLength(0);
	});

	test('should show 3 items', async () => {
		const { queryAllByRole } = render(<List listType={ListType.TODOS} />);
		await waitFor(
			() => {
				expect(queryAllByRole('listitem').length).toBe(3);
			},
			{ timeout: 1000 }
		);
	});

	test('should show 1/3 completed', async () => {
		const { getByRole } = render(<List listType={ListType.TODOS} />);
		await waitFor(
			() => {
				expect(getByRole('banner').textContent).toBe('1/3 completed');
			},
			{ timeout: 1000 }
		);
	});
});
