// Body.js
import React from 'react';

const Body = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h2>로그인</h2>
                    </td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="ID" /></td>
                </tr>
                <tr>
                    <td><input type="password" placeholder="Password" /></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /> 로그인 정보 저장</td>
                </tr>
                <tr>
                    <td><input type="submit" value="Sign in" className="btn" /></td>
                </tr>
                <tr>
                    <td className="join">
                        <a>회원이 아니신가요?</a>
                        <a href="join.html" style={{ color: 'blue' }}>회원가입</a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Body;
