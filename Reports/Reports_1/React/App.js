import React from 'react';
import './App.css'; // CSS 파일을 import합니다.
import Body from './Body'; // Body 컴포넌트를 import합니다.

function App() {
    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        alert('로그인 성공!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Body /> {/* Body 컴포넌트를 사용합니다. */}
        </form>
    );
}

export default App;
