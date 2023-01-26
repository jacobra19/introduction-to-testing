import React, { FC, useState } from 'react';

export const HelloWorld:FC = () => {
	const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const handleMouseClick = () => {
        console.log('click'); const x= 10;
    }

    return (
		<div
            data-testid="hello-world-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
            style={{
                backgroundColor: isHover ? 'red' : 'black'
            }}
		>
			HelloWorld
		</div>
	);
};
