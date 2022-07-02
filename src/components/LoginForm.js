import React from 'react';

function LoginForm(){
    return (
        <form>
            <div className="form-inner">
                <h1>Login</h1> {/* Cho biết đăng nhập */}
                {/* Bây giờ tạo một số nhóm biểu mẫu */}{/*Tạo kiểu nhóm biểu mẫu đầu tiên*/}
                <div className="form-group">
                     {/*Tạo nhãn cho tên */}
                    <label htmlFor="name">Name:</label>
                     {/* có đầu vào là dạng văn bản */}
                    <input type="text" name="name" id="name"/>
                </div>

                {/*Tạo kiểu nhóm biểu mẫu thứ 2*/}
                <div className="form-group">
                     {/*Tạo nhãn cho email */}
                    <label htmlFor="email">Email:</label>
                     {/* có đầu vào là email */}
                    <input type="email" name="email" id="email" />
                </div>

                {/*Tạo kiểu nhóm biểu mẫu thứ 3*/}
                <div className="form-group">
                    {/*Tạo nhãn cho password */}
                    <label htmlFor="password">Password:</label>
                    {/* có đầu vào là password */}
                    <input type="password" name="password" id="email" />
             </div>
             {/* Tạo một nút gửi LOGIN cho biểu mẫu*/}
             <input type="submit" value ="LOGIN" />
             </div>
        </form>
    )
}
export default LoginForm;