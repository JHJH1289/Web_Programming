import React, { useState } from 'react';
import './ScheduleMatcher.css';

const days = ['월', '화', '수', '목', '금', '토', '일'];

function ScheduleMatcher() {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState('');
  const [availability, setAvailability] = useState({});
  const [userSongs, setUserSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState('');
  const [newUserSong, setNewUserSong] = useState('');

  const handleCheckboxChange = (day, hour) => {
    const key = `${day}-${hour}`;
    setAvailability(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = () => {
    if (!name || userSongs.length === 0) return;
    const newUser = {
      name,
      availability,
      songs: userSongs,
    };
    setUserData([...userData, newUser]);
    setName('');
    setAvailability({});
    setUserSongs([]);
  };

  const handleAddSong = () => {
    if (newSong && !songs.includes(newSong)) {
      setSongs([...songs, newSong]);
    }
    setNewSong('');
  };

  const handleAddUserSong = () => {
    if (newUserSong && !userSongs.includes(newUserSong)) {
      setUserSongs([...userSongs, newUserSong]);
    }
    setNewUserSong('');
  };

  const getCommonTime = (targetSong) => {
    const sameSongUsers = userData.filter(user => user.songs.includes(targetSong));
    if (sameSongUsers.length === 0) return [];

    const allTimes = sameSongUsers.map(u =>
      Object.entries(u.availability).filter(([_, v]) => v).map(([k]) => k)
    );
    const common = allTimes.reduce((acc, times) => acc.filter(t => times.includes(t)));
    return common;
  };

  const getCommonTimeGrid = (targetSong) => {
    const commonTimes = getCommonTime(targetSong);
    const grid = {};
  
    for (let i = 17; i <= 21; i++) {
      grid[i] = {};
      for (const day of days) {
        const key = `${day}-${i}`;
        grid[i][day] = commonTimes.includes(key);
      }
    }
    return grid;
  };
  

  return (
    <div className="schedule-container">
      <h1 className="title">합주 스케쥴 Maker</h1>

      <div className="form-section">
        <input
          className="input"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="이름"
        />

        <div className="song-add">
          <input
            className="input"
            type="text"
            value={newSong}
            onChange={e => setNewSong(e.target.value)}
            placeholder="새 곡 추가"
          />
          <button onClick={handleAddSong} className="button green">곡 추가</button>
        </div>

        <div className="song-add">
          <select
            className="select"
            value={newUserSong}
            onChange={e => setNewUserSong(e.target.value)}
          >
            <option value="">곡 선택</option>
            {songs.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <button onClick={handleAddUserSong} className="button green">내 곡 추가</button>
        </div>

        <div className="selected-songs">
          <strong>선택한 곡:</strong> {userSongs.join(', ') || '없음'}
        </div>
        <div className="grid-center">
          <div className="grid">
            <div className="day-row">
              <div className="time-cell header-cell">시간/요일</div>
              {days.map(day => (
                <div key={day} className="header-cell">{day}</div>
              ))}
            </div>
            {[...Array(5).keys()].map(i => {
              const hour = i + 17;
              return (
                <div key={hour} className="time-row">
                  <div className="time-cell">{hour}시</div>
                  {days.map(day => {
                    const key = `${day}-${hour}`;
                    return (
                      <div key={key} className="checkbox-cell">
                        <input
                          type="checkbox"
                          checked={availability[key] || false}
                          onChange={() => handleCheckboxChange(day, hour)}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>


        <div className="button-center">
          <button onClick={handleSubmit} className="button blue large">저장</button>
        </div>
      </div>

      <div className="result-section">
        <h2 className="subtitle">공통 가능 시간 보기</h2>
        {songs.map(song => {
          const grid = getCommonTimeGrid(song);
          return (
            <div key={song} className="result-box">
              <h3>{song}</h3>
              <div className="grid">
                <div className="day-row">
                  <div className="time-cell header-cell">시간/요일</div>
                  {days.map(day => (
                    <div key={day} className="header-cell">{day}</div>
                  ))}
                </div>
                {Object.entries(grid).map(([hour, availability]) => (
                  <div key={hour} className="time-row">
                    <div className="time-cell">{hour}시</div>
                    {days.map(day => (
                      <div key={`${song}-${hour}-${day}`} className="checkbox-cell">
                        <input type="checkbox" checked={availability[day]} readOnly />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default ScheduleMatcher;
