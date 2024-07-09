import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss'
class Headerhome extends Component {

    render() {
        

        return (
            <React.Fragment>
           <div className="home-header-container">
                    <div className="home-header-content">
                            <div className="left-content">
                            <i class="fas fa-bars"></i>
                                    <div className="logo-header"></div>
                            </div>
                            <div className="center-content">
                                    <div className="child-content">
                                            <div><b>Chuyên khoa</b></div>
                                            <div className="sub-tittle">Tìm bác sĩ theo chuyên khoa</div>
                                    </div>
                                    <div className="child-content">
                                            <div><b>Cở sở y tế</b></div>
                                            <div className="sub-tittle">chọn bệnh viện phòng khám</div>
                                    </div>
                                    <div className="child-content">
                                            <div><b>Bác sĩ</b></div>
                                            <div className="sub-tittle">Chọn bác sĩ giỏi</div>
                                    </div>
                                    <div className="child-content">
                                            <div><b>Gói khám</b></div>
                                            <div className="sub-tittle">Khám sức khỏe tổng quát</div>
                                    </div>
                            </div>
                            <div className="right-content">
                                <div className="support">
                                <i class="far fa-question-circle"></i> Hỗ trợ

                                </div>
                                <div className="language-vi">VN</div>
                                <div className="language-en">EN</div>
                            
                            </div>
                    </div>
           </div>
           {/* banner */}
           <div className="home-header-banner">
                <div className="content-up">
                    <div className="tittle-banner1">
                            NỀN TẢNG Y TẾ
                    </div>
                    <div className="tittle-banner2">
                            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
                    </div>
                    <div className="search-banner">
                    <i class="fas fa-search"></i><input className="input-search" type="text" placeholder='Tìm kiếm'/>
                    </div>
                </div>
                
                
                <div className="content-down">
                         <div className="options">

                                <div className="options-child"> 
                                    <div className="icon-option">
                                        <i class="fas fa-hospital-alt"></i>
                                    </div>
                                    <div className="text-option">
                                            Khám chuyên khoa
                                    </div>
                                </div>

                                <div className="options-child"> 
                                    <div className="icon-option">
                                        <i class="fas fa-hospital-alt"></i>
                                    </div>
                                    <div className="text-option">
                                            Khám từ xa
                                    </div>
                                </div>

                                <div className="options-child"> 
                                    <div className="icon-option">
                                        <i class="fas fa-hospital-alt"></i>
                                    </div>
                                    <div className="text-option">
                                            khám tổng quát
                                    </div>
                                </div>

                                <div className="options-child"> 
                                    <div className="icon-option">
                                        <i class="fas fa-hospital-alt"></i>
                                    </div>
                                    <div className="text-option">
                                           xét nghiệm y học
                                    </div>
                                </div>

                                <div className="options-child"> 
                                    <div className="icon-option">
                                        <i class="fas fa-hospital-alt"></i>
                                    </div>
                                    <div className="text-option">
                                            sức khỏe tinh thần
                                    </div>
                                </div>

                                <div className="options-child"> 
                                    <div className="icon-option">
                                        <i class="fas fa-hospital-alt"></i>
                                    </div>
                                    <div className="text-option">
                                            khám nha khoa
                                    </div>
                                </div>
                        </div>
                </div>
           </div>


           <div className="body-slide">
           <div className='body-specialty'>
           <div className='header-specialty'>
                <div className='tittle-special'>
                    Chuyên khoa
                </div>
                <button className='button-see-more'>
                    see more
                </button>
             </div>
             <div className='body-specialty-element'>
             
                <div className='specialty-image' style={{backgroundImage: `url("https://i.pinimg.com/564x/8f/33/7c/8f337c20c2409774126d7d0469054e58.jpg")`}}>

                </div>

                <div className='sub-specialty'>
                    chuyeen khoa a
                </div>
             </div>
           </div>

           <div className='doctor-infor'>
           <div className='header-specialty'>
                <div className='tittle-special'>
                    Bác sĩ
                </div>
                <button className='button-see-more'>
                    see more
                </button>
             </div>
             <div className='body-specialty-element'>
             
                <div className='specialty-image' style={{backgroundImage: `url("https://i.pinimg.com/564x/22/ef/f7/22eff76598bdc86094e0f2c7eacf02e0.jpg")`}}>

                </div>

                <div className='sub-specialty'>
                    Bác sĩ T
                </div>
             </div>
           </div>
           </div>
           </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Headerhome);
