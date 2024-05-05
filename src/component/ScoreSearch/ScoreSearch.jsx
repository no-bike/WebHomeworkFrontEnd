import React from 'react';

export default function ScoreSearch() {
    return (
        <div className="score-search">
            <div className="score-search-title">
                <h1>成绩查询</h1>
            </div>
            <div className="score-search-content">
                <div className="score-search-form">
                    <div className="score-search-form-item">
                        <label>学号:</label>
                        <input type="text" placeholder="请输入学号" />
                    </div>
                    <div className="score-search-form-item">
                        <label>姓名:</label>
                        <input type="text" placeholder="请输入姓名" />
                    </div>
                    <div className="score-search-form-item">
                        <label>课程:</label>
                        <input type="text" placeholder="请输入课程" />
                    </div>
                    <div className="score-search-form-item">
                        <label>成绩:</label>
                        <input type="text" placeholder="请输入成绩" />
                    </div>
                    <div className="score-search-form-item">
                        <button>查询</button>
                    </div>
                </div>
                <div className="score-search-result">
                    <table>
                        <thead>
                            <tr>
                                <th>学号</th>
                                <th>姓名</th>
                                <th>课程</th>
                                <th>成绩</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1001</td>
                                <td>张三</td>
                                <td>数学</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>1002</td>
                                <td>李四</td>
                                <td>英语</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>1003</td>
                                <td>王五</td>
                                <td>语文</td>
                                <td>70</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}