import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCode,creatNewUser} from '../../../services/userService'
import * as action from '../../../store/actions'
import './Product.scss'
import UserManage from '../../System/UserManage'
import {toast} from 'react-toastify'
import CommonUtils from '../../../utils/CommonUtils';
class ProductManage extends Component {

    constructor(props){ // giúp lấy giữ liệu từ lớp father
        super(props);
        this.state={
            gender:[],
            role:[],
            position:[],
            previewImg:'',
            agender:'',
            arole:'',
            aposition:'',
            email:'',
            password:'',
            lastname:'',
            firstname:'',
            phonenumber:'',
            address:'',
            loadUserManager:true
        }
       }

    async componentDidMount() {
      this.props.getGenderStart();
    
        try {
        //    let datagender=await getAllCode('gender');
       //     let datagender=await getAllCode('GENDER');
            let datarole =await getAllCode('ROLE');
            let dataposition= await getAllCode('POSITION')
         //   let gender=datagender.data.data;
            let role=datarole.data.data;
            let position= dataposition.data.data;
            this.setState({
           //     gender:gender,
                role:role,
                position:position,
          //      agender:gender[0].key,
                arole:role[0].key,
                aposition:position[0].key
            })
            //console.log('gender>>',gender)
        } catch (error) {
            console.log(error)
        }

      //  this.props.getGenderStart()
    }
    componentDidUpdate=(prevProps,prevState,snapshot)=>{
      if(prevProps.learn !== this.props.learn){  // update neu trung state redux
          this.setState({
            gender:this.props.learn
          }
            )
          
      }
    }
    handleUpLoadImg=async(event)=>{
        let file=event.target.files;
        let file1=file[0]
        let base64= await CommonUtils.getBase64(file1)
       // console.log("base64image",base64)
       // let objectURL=URL.createObjectURL(file1)
        this.setState({
          previewImg:base64
        })
      //  console.log('fileeg',objectURL);
     
    }

    handleChangeInput=(event,id)=>{
      let cpstate={...this.state};
      cpstate[id]=event.target.value;
      this.setState({
        ...cpstate
      },()=>{
       // console.log('updateState',this.state)
    //   console.log("testgender",event.target)
      })
     
     // console.log('updateState',event.target.value)
    }
    handleClickSingIn=async(event)=>{
     let respon= await creatNewUser(this.state);
     this.setState({
      loadUserManager:false
     })
     this.setState({
      previewImg:'',
            agender:'',
            arole:'',
            aposition:'',
            email:'',
            password:'',
            lastname:'',
            firstname:'',
            phonenumber:'',
            address:'',
            loadUserManager:true
     
     })
     toast.success('create success!')
      console.log("responn>>",respon)
    }

    render() {
      console.log("genderredux in render",this.props.genderRedux)
        let gender=this.state.gender;
    //  let gender=this.state.learn;
        let role=this.state.role;
        let position=this.state.position;
        return (
            <div className="User-redux-container" >
            <div className="tittle">
                Chanel
            </div>

              <div className="user-redux-body" >

            <div className="container">
                <div className="row">
            
   
    <div class="col-3">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" value={this.state.email}
        onChange={(event)=>this.handleChangeInput(event,'email')}
      />
    </div>
    <div class="col-3">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" value={this.state.password}
        onChange={(event)=>this.handleChangeInput(event,'password')}
      />
    </div>
    <div class="col-3">
      <label for="inputEmail4">FirstName</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="FirstName" value={this.state.firstname}
        onChange={(event)=>this.handleChangeInput(event,'firstname')}
      />
    </div>
    <div class="col-3">
      <label for="inputPassword4">LastName</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="LastName" value={this.state.lastname}
        onChange={(event)=>this.handleChangeInput(event,'lastname')}
      />
    </div>
    <div class="col-3">
    <label for="inputAddress">PhoneNumber</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="+00" value={this.state.phonenumber}
      onChange={(event)=>this.handleChangeInput(event,'phonenumber')}
    />
    </div>
    <div class="col-9">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.address}
      onChange={(event)=>this.handleChangeInput(event,'address')}
    />
    </div>

    <div class="form-group col-3">
      <label for="inputState">Gender</label>
      <select id="inputState" class="form-control"
      onChange={(event)=>this.handleChangeInput(event,'agender')}>
      {gender.map((it,id)=>{
        return(
          
            <option key={id} value={it.key}>{it.valuevi}</option>
        )
      })}
        
      
      </select>
    </div>
    <div class="form-group col-3">
      <label for="inputState">Position</label>
      <select id="inputState" class="form-control"
      onChange={(event)=>this.handleChangeInput(event,'aposition')}>
        
        {position.map((it,id)=>{
          return(<option key={id} value={it.key}>{it.valuevi}</option>)
        })}
      </select>
    </div>
    <div class="form-group col-3">
      <label for="inputState">Role</label>
      <select id="inputState" class="form-control" 
      onChange={(event)=>this.handleChangeInput(event,'arole')}>
      {role.map((it,id)=>{
        return(
          <option key={id} value={it.key} >{it.valuevi}</option>
        )
      })}
       
    
      </select>
    </div>

    <div class="col-3">
    <label for="inputAddress">Avatar</label>
    <div>
    <input id="previewImg" type="file" hidden
    onChange={(event)=>this.handleUpLoadImg(event)}></input>
    <label className="UpLoadImg" htmlFor="previewImg">Up Load <i class="fas fa-upload"></i></label>
    <div className="preview-image"
    style={{backgroundImage:`url(${this.state.previewImg})`}}></div>
    </div>
    
    </div>
  
  <button type="submit" class="btn btn-primary"
  onClick={(event)=>{this.handleClickSingIn(event)}}>Sign in</button>

                </div>
            </div>
            
            </div>
           {this.state.loadUserManager && <UserManage/>} 
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      genderRedux:state.admin.genders,
      learn:state.learnredux.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getGenderStart:()=> dispatch(action.fetchGenderStart()),
      // processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
