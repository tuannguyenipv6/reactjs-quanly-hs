import React, { useEffect } from "react";
import './style.css';
import { userState$ } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function NotFound() { 

	const userState = useSelector(userState$);
	const history = useHistory();

	useEffect(() => {
        if(!userState.checkLogin) {
            history.push('/login');
        }
    }, [userState, history])

	const renderCheckUser = () => {
		let result = null;
		if (userState.checkLogin) {
			result = (<>
				<h1>Xin lỗi! Không thể tìm thấy trang bạn đang tìm kiếm</h1>
				<p className="w3lstext">Có thể bạn đã nhấp sai địa chỉ liên kết. Vui lòng kiểm tra url hoặc <Link to='/login'>Về Trang chủ</Link> </p>
				<div className="w3top-nav-right">	
					<ul>
						<li><Link to='/thoi-khoa-bieu'>Truy cập TKB</Link></li>
						<li><Link to='/thong-bao'>Truy cập bảng thông báo</Link></li>
					</ul> 
				</div>	
			</>)
		}else {
			result = (<>
				<h1>Xin lỗi! Không thể tìm thấy trang bạn đang tìm kiếm</h1>
				<p className="w3lstext">Có thể bạn đã nhấp sai địa chỉ liên kết. Hoặc chưa đăng nhập tài khoản vui lòng đăng nhập tại
					<Link to='/login'> Login</Link>
				</p>
			</>)
		}
		return result;
	}

    return (<>
	<div style={{fontFamily: 'Open Sans, sans-serif'}}>
		<div className="agileits-main"> 
			<div className="agileinfo-row">
					
				<div className="w3layouts-errortext">
					<h2>4<span>0</span>4</h2>
					
					{renderCheckUser()}
				</div>	
			</div>	
		</div>	
		<div className="copyright w3-agile">
			<p>© 2021 Phần mềm quản lý học sinh | Design web by NQT <a href="https://www.facebook.com/NQT.TuanNguyen.ipv6" rel = "noreferrer" target="_blank">FB:NQT</a></p>
		</div>
	</div>
    </>)
}

export default NotFound;
