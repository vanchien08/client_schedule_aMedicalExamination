import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {
   constructor(props){ // giúp lấy giữ liệu từ lớp father
    super(props);
    this.state={
        email:'',
        password:'',
        firstname:'',
        lastname:'',
        address:''

    }
   }

    componentDidMount() {
        // Các logic khởi tạo có thể được đặt ở đây
    }
    toggle=()=>{
     //   console.log(this.state)
       this.props.toggleFromParent();
     
    } 
    handleOnChangeInput=(event,id)=>{
      //  console.log("event , id",event.target.value,id)
      let copystate={...this.state};
      copystate[id]=event.target.value;
      this.setState({
        ...copystate
      })
     // console.log("copystate",copystate)

    }
    checkValidateInput=()=>{
        let isValid=true;
        let arrInput=['email','password','firstname','lastname','address']
        for(let i=0;i<arrInput.length;i++)
        {
            if(!this.state[arrInput[i]])
            {
                isValid=false;
                alert("missing parameter "+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleGetNewUser=()=>{
        let valid=this.checkValidateInput();
        if(valid===true)
        {
            console.log(this.state)
            this.props.createNewUser(this.state);
            this.setState({
                email:'',
                password:'',
                firstname:'',
                lastname:'',
                address:''
               })
        }
        //console.log(this.state)
        
       // this.props.clearDataCreatUser(this.)
       
    }


    render() {
    //    const { modal, toggle, args } = this.props; // Giả sử những props này được truyền từ component cha
          //  console.log("check child props",this.props)
        return (
            <Modal isOpen={this.props.isOpen} toggle={()=>this.toggle()} className={'abcClassName'}>
                <ModalHeader toggle={()=>this.toggle()}>Creat new User</ModalHeader>
                <ModalBody>
                        <div className="creat-user-form">

                         
                        <div className="input-container">
                                <label>
                                    Email
                                </label>
                                <input type="text" value={this.state.email}
                                onChange={(event)=>this.handleOnChangeInput(event,"email")}></input>
                        </div>
                        <div className="input-container">
                                <label>
                                    Password
                                </label>
                                <input className="input" value={this.state.password} type="text" onChange={(event)=>this.handleOnChangeInput(event,"password")}></input>
                        </div>
                        <div className="input-container">
                                <label>
                                    FirstName
                                </label>
                                <input className="input" type="text" value={this.state.firstname} onChange={(event)=>this.handleOnChangeInput(event,"firstname")}></input>
                        </div>
                        <div className="input-container">
                                <label>
                                    LastName
                                </label>
                                <input className="input" type="text" value={this.state.lastname} onChange={(event)=>this.handleOnChangeInput(event,"lastname")}></input>
                        </div>
                        <div className="input-container max-witdh">
                                <label>
                                    Address
                                </label>
                                <input className="input" value={this.state.address} type="text" onChange={(event)=>this.handleOnChangeInput(event,"address")}></input>
                        </div>

                        </div>
                        
                   
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>this.handleGetNewUser()}> 
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={()=>this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}   //toggle : click ra ngoài công tắt

const mapStateToProps = (state) => {
    return {
        // Ánh xạ state thành props nếu cần thiết
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // Ánh xạ dispatch thành props nếu cần thiết
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
