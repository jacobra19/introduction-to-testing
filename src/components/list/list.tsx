import React, { FC, useEffect, useState } from 'react';

interface IResponse {
	title: string;
	userId: number;
	id: 1;
	completed: boolean;
}

export enum ListType {
	POSTS = 'posts',
	TODOS = 'todos',
}

interface IListProps {
	listType: ListType;
	limit?: number;
}

export const List: FC<IListProps> = ({
	listType = ListType.TODOS,
	limit = 3,
}) => {
	const [data, setData] = useState<IResponse[]>([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const url = `https://jsonplaceholder.typicode.com/${listType}?_limit=${limit}`;
		const response = await fetch(url);
		const data: IResponse[] = await response.json();
		setData(data);
	};

	const completedItems = data.filter((item) => item.completed);

	const bannerText = `${completedItems.length}/${data.length} completed`;

	return (
		<div data-testid={'list-container'}>
			<h1 role={'banner'}>{bannerText}</h1>
			{data.map((item) => {
				return (
					<div key={item.id} role={'listitem'}>
						{item.title}
					</div>
				);
			})}
		</div>
	);
};
