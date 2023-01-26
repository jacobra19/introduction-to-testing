import { FC, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TopBar } from './components/top-bar/top-bar';
import { List, ListType } from './components/list/list';

interface IAppProps {
	initialCounter?: number;
	listType?: ListType;
}

const App: FC<IAppProps> = ({
	initialCounter = 0,
	listType = ListType.TODOS,
}) => {
	const [count, setCount] = useState(initialCounter);

	return (
		<div className='App' data-testid='app-container'>
			<TopBar
				counter={count}
				onReset={() => {
					setCount(0);
				}}
			/>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button
					onClick={() => setCount((count) => count + 1)}
					data-testid='app-button'
                    id='app-button'
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<List listType={listType || ListType.TODOS} />
		</div>
	);
};

export default App;
