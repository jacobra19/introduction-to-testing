import { HelloWorld } from './hello-world';
import { fireEvent, render } from '@testing-library/react';

describe('when HelloWorld renders', () => {
	test('should render component', () => {
		const { container, getByTestId } = render(<HelloWorld />);
		const element = getByTestId('hello-world-container');
		expect(element).toBeTruthy();
	});

    test('should button color be black',()=>{
        const { container, getByTestId } = render(<HelloWorld />);
        const element = getByTestId('hello-world-container');
        expect(element.style.backgroundColor).toBe('black');
    })

    test('should button color be red when mouse has entered component',()=>{
        const { container, getByTestId } = render(<HelloWorld />);
        const element = getByTestId('hello-world-container');
        fireEvent.mouseEnter(element);
        expect(element.style.backgroundColor).toBe('red');
    })

    test('should button color be black when mouse has left component',()=>{
        const { container, getByTestId } = render(<HelloWorld />);
        const element = getByTestId('hello-world-container');
        fireEvent.mouseEnter(element);
        fireEvent.mouseLeave(element);
        expect(element.style.backgroundColor).toBe('black');
    })
});
