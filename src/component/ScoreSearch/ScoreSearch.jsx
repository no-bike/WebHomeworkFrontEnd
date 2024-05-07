import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ScoreView() {
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [newScore, setNewScore] = useState({name: '', chinese: '', math: '', english: '', sum: '', rank: ''});
    const api = '后端api'

    useEffect(() => {
        const fetchOptions = async () => {
            const result = await axios(api);
            setOptions(result.data);
            if (result.data.length > 0) {
                setSelectedOption(result.data[0].value);
            }
        };

        fetchOptions();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(api+`?option=${selectedOption}`);
            setData(result.data);
        };

        if (selectedOption) {
            fetchData();
        }
    }, [selectedOption]);

    const handleUpdate = async (sno) => {
        // 发送修改请求
        await axios.put(api+`/${sno}`);
        // 重新获取数据
        const result = await axios(api+`?option=${selectedOption}`);
        setData(result.data);
    };

    const handleDelete = async (sno) => {
        // 发送删除请求
        await axios.delete(api+`/${sno}`);
        // 重新获取数据
        const result = await axios(api+`?option=${selectedOption}`);
        setData(result.data);
    };

    const handleAdd = async () => {
        // 发送添加请求
        await axios.post(api, newScore);
        // 重新获取数据
        const result = await axios(api+`?option=${selectedOption}`);
        setData(result.data);
        // 关闭添加窗口
        setShowAddForm(false);
    };

    return (
        <div className="score-view">
            <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
            <button onClick={() => setShowAddForm(true)}>添加学生成绩</button>
            {showAddForm && (
                <div>
                    <h2>添加学生成绩</h2>
                    <form onSubmit={handleAdd}>
                        <label>
                            姓名：
                            <input type="text" value={newScore.name} onChange={e => setNewScore({...newScore, name: e.target.value})} />
                        </label>
                        <label>
                            语文：
                            <input type="text" value={newScore.chinese} onChange={e => setNewScore({...newScore, chinese: e.target.value})} />
                        </label>
                        <label>
                            数学：
                            <input type="text" value={newScore.math} onChange={e => setNewScore({...newScore, math: e.target.value})} />
                        </label>
                        <label>
                            英语：
                            <input type="text" value={newScore.english} onChange={e => setNewScore({...newScore, english: e.target.value})} />
                        </label>
                        <label>
                            总分：
                            <input type="text" value={newScore.sum} onChange={e => setNewScore({...newScore, sum: e.target.value})} />
                        </label>
                        <label>
                            排名：
                            <input type="text" value={newScore.rank} onChange={e => setNewScore({...newScore, rank: e.target.value})} />
                        </label>
                        <button type="submit">提交</button>
                        <button type="button" onClick={() => setShowAddForm(false)}>取消</button>
                    </form>
                </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>学号</th>
                        <th>姓名</th>
                        <th>语文</th>
                        <th>数学</th>
                        <th>英语</th>
                        <th>总分</th>
                        <th>排名</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((sno, name,chinese,math,english,sum,rank) => (
                        <tr key={sno}>
                            <td>{name}</td>
                            <td>{chinese}</td>
                            <td>{math}</td>
                            <td>{english}</td>
                            <td>{sum}</td>
                            <td>{rank}</td>
                            <td>
                                <button onClick={() => handleUpdate(sno)}>修改</button>
                                <button onClick={() => handleDelete(sno)}>删除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}