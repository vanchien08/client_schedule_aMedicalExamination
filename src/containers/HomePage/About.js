import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headerhome from './Headerhome';
import './About.scss'
class About extends Component {

    render() {
        

        return (
         //  <div>AboutPage</div>
           <div className="footer">
                <div className="tittle-footer">
                    Truyen thong noi ve Channel IT
                </div>
                <div className="infor-footer">
                    <div className="content-footer-left">
                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/bth3AQSqd7I" title="Lionel Messi  - All 32 Goals For PSG - HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="content-footer-right">
                        <div className="text-footer">Tab Preview Chrome là gì? là tính năng mới trên trình duyệt Chrome phiên bản 75. Tính năng này cho phép hiển thị hình ảnh xem trước về trang web thông qua một pop-up thu nhỏ khi bạn trỏ chuột vào tab mới. Vậy Viettel Store sẽ hướng dẫn bạn cách kích hoạt Tab Preview trên Chrome ngay sau đây nhé!</div>
                    </div>
                    
                </div>
                <div className="sub-footer">
                        <div className="sub-footer-text">©2016 Bản quyền thuộc về nguyenvanchien.vn</div>
                </div>
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
