import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ScoreView() {
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [newScore, setNewScore] = useState({ name: '', chinese: '', math: '', english: '', sum: '', rank: '' });
    const [showAddExam, setShowAddExam] = useState(false);
    const [newExam, setNewExam] = useState('');
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updatedScore, setUpdatedScore] = useState({ name: '', chinese: '', math: '', english: '', sum: '', rank: '' });

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
            const result = await axios(api + `?option=${selectedOption}`);
            setData(result.data);
        };

        if (selectedOption) {
            fetchData();
        }
    }, [selectedOption]);

    const handleUpdate = async (sno) => {
        // 发送修改请求
        await axios.put(api + `/${sno}`, updatedScore);
        // 重新获取数据
        const result = await axios(api + `?option=${selectedOption}`);
        setData(result.data);
        // 关闭修改窗口
        setShowUpdateForm(false);
    };

    const handleDelete = async (sno) => {
        // 发送删除请求
        await axios.delete(api + `/${sno}`);
        // 重新获取数据
        const result = await axios(api + `?option=${selectedOption}`);
        setData(result.data);
    };

    const handleAdd = async () => {
        // 发送添加请求
        await axios.post(api, newScore);
        // 重新获取数据
        const result = await axios(api + `?option=${selectedOption}`);
        setData(result.data);
        // 关闭添加窗口
        setShowAddForm(false);
    };

    const handleAddExam = async (event) => {
        event.preventDefault();
        // 发送添加考试的请求
        await axios.post(api, { exam: newExam });
        // 重新获取下拉表格的数据
        const result = await axios(api);
        setOptions(result.data);
        // 关闭添加考试的模态对话框
        setShowAddExam(false);
    };

    return (
        <>
            <div className="score-view">
                <label>考试：</label>
                <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <Button variant="primary" onClick={() => setShowAddForm(true)}>添加学生成绩</Button>

                <Button variant="primary" onClick={() => setShowAddExam(true)}>
                    添加考试
                </Button>


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
                        {data.map((score) => (
                            <tr key={score.sno}>
                                <td>{score.sno}</td>
                                <td>{score.name}</td>
                                <td>{score.chinese}</td>
                                <td>{score.math}</td>
                                <td>{score.english}</td>
                                <td>{score.sum}</td>
                                <td>{score.rank}</td>
                                <td>
                                    <button onClick={() => { setShowUpdateForm(true); setUpdatedScore(score); }}>修改</button>
                                    <button onClick={() => handleDelete(score.sno)}>删除</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={showAddForm} onHide={() => setShowAddForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>添加学生成绩</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAdd}>
                        <Form.Group controlId="formSno">
                            <Form.Label>学号</Form.Label>
                            <Form.Control type="text" value={newScore.sno} onChange={e => setNewScore({ ...newScore, sno: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>姓名</Form.Label>
                            <Form.Control type="text" value={newScore.name} onChange={e => setNewScore({ ...newScore, name: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formChinese">
                            <Form.Label>语文</Form.Label>
                            <Form.Control type="text" value={newScore.chinese} onChange={e => setNewScore({ ...newScore, chinese: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formMath">
                            <Form.Label>数学</Form.Label>
                            <Form.Control type="text" value={newScore.math} onChange={e => setNewScore({ ...newScore, math: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formEnglish">
                            <Form.Label>英语</Form.Label>
                            <Form.Control type="text" value={newScore.english} onChange={e => setNewScore({ ...newScore, english: e.target.value })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">提交</Button>
                        <Button variant="secondary" onClick={() => setShowAddForm(false)}>取消</Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={showAddExam} onHide={() => setShowAddExam(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>添加考试</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddExam}>
                        <Form.Group controlId="formExam">
                            <Form.Label>考试名称</Form.Label>
                            <Form.Control type="text" value={newExam} onChange={e => setNewExam(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">提交</Button>
                        <Button variant="secondary" onClick={() => setShowAddExam(false)}>取消</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showUpdateForm} onHide={() => setShowUpdateForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>修改学生成绩</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={() => handleUpdate(updatedScore.sno)}>
                        <Form.Group controlId="formName">
                            <Form.Label>姓名</Form.Label>
                            <Form.Control type="text" value={updatedScore.name} onChange={e => setUpdatedScore({ ...updatedScore, name: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formChinese">
                            <Form.Label>语文成绩</Form.Label>
                            <Form.Control type="number" value={updatedScore.chinese} onChange={e => setUpdatedScore({ ...updatedScore, chinese: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formMath">
                            <Form.Label>数学成绩</Form.Label>
                            <Form.Control type="number" value={updatedScore.math} onChange={e => setUpdatedScore({ ...updatedScore, math: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formEnglish">
                            <Form.Label>英语成绩</Form.Label>
                            <Form.Control type="number" value={updatedScore.english} onChange={e => setUpdatedScore({ ...updatedScore, english: e.target.value })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">提交</Button>
                        <Button variant="secondary" onClick={() => setShowUpdateForm(false)}>取消</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}