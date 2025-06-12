import { useState } from 'react';

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수 선언 방식
    // function handleClick() {
    //     setIsToggleOn(prev => !prev);
    // }

    // 방법 2. 화살표 함수 방식
    const handleClick = () => {
        setIsToggleOn(prev => !prev);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle;
