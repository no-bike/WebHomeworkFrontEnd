## 登录页面
**路径：src/component/Login/Login.jsx**

需改变量 api，后面改成后端api

向后端发送POST请求，json，三个数据：

{ username，password，mode }
都是字符串

mode的内容只有'student' or 'teacher'

需要后端返回成功或者失败。


## 成绩查询页面
**路径：src/component/ScoreSearch/Scoresearch**

需改变量 api，后面改成后端api

进入页面后会直接向后端发送一个GET请求，附带数据params=exam，但要求返回考试数组。

### 成绩显示

useEffect

每次下拉列表选项改变时，向后端发送一个GET请求，附带数据option=‘某一次考试’，要求返回该次考试的数据。要二维数组格式的，其中小数组的格式为[学号，姓名，语文成绩，数学成绩，英语成绩，总分，排名]，要求按总分降序排序。

### 添加学生成绩

handleAdd

首先会向后端发送一个POST请求，附带一个数组数据，不要求返回任何内容。该数据的格式为

[ name: '', chinese: '', math: '', english: ''，考试名]

之后再向后端发送一个GET请求，附带数据option=考试名，要求把添加该学生后的数据重新排序后再返回，返回格式同上。（其实这个请求和成绩显示的请求是一样的）

### 修改学生成绩数据

handleUpdate

会向后端发送一个PUT请求，数据格式为 

学号sno + 数组[ name: '', chinese: '', math: '', english: ''，考试名]

之后会发送和上面成绩显示格式一样的一个GET请求。发送格式也一样

### 删除学生成绩数据

handleDelete

会向后端发送一个DELETE请求，附带数据为 sno学号，option考试（两个字符串）

随后还是那个GET请求。。


### 增加考试

handleAddExam

像后端发送一个POST请求，数据类型如下：

{ exam: newExam }
（给你添加考试用的数据）

随后会发送一个GET请求，附带数据params=exam，要求返回考试列表。（只有所有考试）



