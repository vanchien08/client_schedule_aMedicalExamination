import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {GetAllCodesApi,createUserApi} from '../../services/crudLearnService'
import {toast} from 'react-toastify'
import CommonUtils from "../../utils/CommonUtils"

class ProductManage extends Component {

    constructor(props){ // giúp lấy giữ liệu từ lớp father
        super(props);
        this.state={
            arrGender:[],
            arrRole:[],
            arrPosition:[],
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            phonenumber:'',
            address:'',
            gender:'',
            position:'',
            role:'',
            image:''
        }
       }

    async componentDidMount () {
     try {
     let arrGender= await GetAllCodesApi('GENDER');
     let arrRole= await GetAllCodesApi('ROLE');
     let arrPosition= await GetAllCodesApi('POSITION');
     let arrGender1=arrGender.data.data;
     let arrRole1=arrRole.data.data;
     let arrPosition1=arrPosition.data.data;
   
      this.setState({
        arrGender:arrGender1,
        arrRole:arrRole1,
        arrPosition:arrPosition1,
        gender:arrGender1[0].key,
        position:arrPosition1[0].key,
        role:arrRole1[0].key
      })
       //  this.props.getGenderStart()
     } catch (error) {
        console.log("error from didmout,",error)
     }
    }
    handelOnChageText=(event,id)=>{
      let cpstate ={...this.state}
      cpstate[id]=event.target.value;
      this.setState({
        ...cpstate
      },()=>{          })
    }
   
    handleOnClickSignIn=async(event)=>{
     
     // let base64= await CommonUtils.getBase64(file1);
    //  console.log("console ",base64);
    console.log(this.state)
    try {
      await createUserApi(this.state);
      console.log("create success!")
    } catch (error) {
      console.log("create user fail (from event click)")
    }
   
    toast.success('create success!')
   
    }
    handelOnChangeImage=(event)=>{
      let file=event.target.files;
     let file1=file[0];
      
       let objectURL =URL.createObjectURL(file1);
      // console.log("focus image");

      this.setState({
        image:objectURL
      })
     // console.log("file", objectURL)
    }

    render() {
       // console.log("arrgender",this.state.gender)
        let arrgender=this.state.arrGender;
        let arrrole=this.state.arrRole;
        let arrposition=this.state.arrPosition;
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
      onChange={(event)=>this.handelOnChageText(event,'email')}
      />
    </div>
    <div class="col-3">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" 
      value={this.state.password}
      onChange={(event)=>this.handelOnChageText(event,'password')}
      />
    </div>
    <div class="col-3">
      <label for="inputEmail4">FirstName</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="FirstName" 
      value={this.state.firstname}
      onChange={(event)=>this.handelOnChageText(event,'firstname')}
      />
    </div>
    <div class="col-3">
      <label for="inputPassword4">LastName</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="LastName" 
      value={this.state.lastname}
      onChange={(event)=>this.handelOnChageText(event,'lastname')}
      />
    </div>
    <div class="col-3">
    <label for="inputAddress">PhoneNumber</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="+00"
    value={this.state.phonenumber}
      onChange={(event)=>this.handelOnChageText(event,'phonenumber')}
    />
    </div>
    <div class="col-9">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" 
    value={this.state.address}
      onChange={(event)=>this.handelOnChageText(event,'address')}
    />
    </div>

    <div class="form-group col-3">
      <label for="inputState">Gender</label>
      <select id="inputState" class="form-control"
      value={this.state.gender}
      onChange={(event)=>this.handelOnChageText(event,'gender')}
     >
       {arrgender.map((it,id)=>{

return(<option key={id} value={it.key}>{it.valuevi}</option>)

})
}
        
      
      </select>
    </div>
    <div class="form-group col-3">
      <label for="inputState">Position</label>
      <select id="inputState" class="form-control"
      value={this.state.position}
      onChange={(event)=>this.handelOnChageText(event,'position')}
      >
        {arrposition.map((it,id)=>{

return(<option key={id} value={it.key}>{it.valuevi}</option>)

})
}
       
      </select>
    </div>
    <div class="form-group col-3">
      <label for="inputState">Role</label>
      <select id="inputState" class="form-control"
      value={this.state.role}
      onChange={(event)=>this.handelOnChageText(event,'role')}>
    
      {arrrole.map((it,id)=>{

        return(<option key={id} value={it.key}>{it.valuevi}</option>)
        
      })
      }
      </select>
    </div>

    <div class="col-3">
    <label for="inputAddress">Avatar</label>
    <div>
    <input id="previewImg" type="file" hidden
    onChange={(event)=>this.handelOnChangeImage(event)}
    ></input>
    <label className="UpLoadImg" htmlFor="previewImg">Up Load <i class="fas fa-upload"></i></label>
    <div className="preview-image"
    ></div>
    </div>
    
    </div>
  
  <button type="submit" class="btn btn-primary"

  onClick={(event)=>this.handleOnClickSignIn(event)}
  >Sign in</button>

                </div>
            </div>
            
            </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      genderRedux:state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
     // getGenderStart:()=> dispatch(action.fetchGenderStart()),
      // processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
