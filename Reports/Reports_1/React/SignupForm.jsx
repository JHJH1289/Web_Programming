import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        birthDate: '',
        email: '',
        emailDomain: 'naver.com',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('가입 성공!');
        // 여기서 추가적인 제출 로직을 작성할 수 있습니다.
    };

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><h2>회원가입</h2></td>
                    </tr>
                    <tr><td>아이디</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="username"
                                className="text"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr><td>비밀번호</td></tr>
                    <tr>
                        <td>
                            <input
                                type="password"
                                name="password"
                                className="text"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr><td>비밀번호 확인</td></tr>
                    <tr>
                        <td>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="text"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr><td>이름</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="name"
                                className="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr><td>생년월일</td></tr>
                    <tr>
                        <td>
                            <input
                                type="date"
                                name="birthDate"
                                className="text"
                                value={formData.birthDate}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr><td>이메일</td></tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="email"
                                className="email"
                                value={formData.email}
                                onChange={handleChange}
                            /> @
                            <select
                                name="emailDomain"
                                value={formData.emailDomain}
                                onChange={handleChange}
                            >
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="nate.com">nate.com</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="가입하기" className="btn" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default SignupForm;
