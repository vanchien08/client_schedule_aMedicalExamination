import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './userManager.scss';
import {getAllUser,creatNewUser,deleteUser, updateUser} from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import {toast} from 'react-toastify'
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUser:[],
            isOpenModal:false,
            isOpenModalEdit:false,
            userEdit:{}
        }

    }
    

    async componentDidMount() {
        await this.getAllUserFromReact();
    }
    getAllUserFromReact=async()=>{
        let response= await getAllUser('ALL');
        let data=response.data;
    //    console.log(">>",data.users)
        if(data && data.errCode ===0){
            this.setState({
                arrUser:data.users
            },()=>{
             //   console.log('user2',this.state.arrUser);
            })
           // console.log('user1',this.state.arrUser);
        }
    }

    handleAddNewUser=()=>{
        //alert("clicked")
        this.setState({
            isOpenModal:true
            
        })
    }
    toggleUserModel=()=>{
        this.setState({
            isOpenModal:!this.state.isOpenModal
        })
    }

    toggleEditUserModel=()=>{
        this.setState({
            isOpenModalEdit:!this.state.isOpenModalEdit
        })

    }

    createNewUser=async (data)=>{
        
        try {
            let respon =await creatNewUser(data);
          console.log(respon)
            if(respon && respon.data.errCode!==0){
                alert(respon.data.errMessage)
            }
            else{
                await this.getAllUserFromReact()
                this.setState({
                    isOpenModal:false
                })
            }
          //  this.getAllUserFromReact();
        } catch (error) {
            console.log(error)
        }
    }

    handleDeleteUser=async(item)=>{
        console.log('item',item.id);
        try {
            await deleteUser(item.id)
            await this.getAllUserFromReact()
            toast.success(' delete success!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
                })
        } catch (error) {
            console.log(error)
        }
        
    }
   handleEditUser=(data)=>{
   // console.log('data>>>',data)
        this.setState({
            isOpenModalEdit:true,
            userEdit:data
            
        })
   }
   handleDoEditUser=async(data)=>{
        //console.log("dataEdit>>",data)
        try {
            let respon= await updateUser(data);
            await this.getAllUserFromReact()
            console.log("responn>>",respon)
            this.setState({
                isOpenModalEdit:false
               
                
            })
        } catch (error) {
            console.log(error)
        }
   }

    // clearDataCreatUser=(a)=>{
    //     a='';
    //     b='';
    //     c='';
    //     d='';
    //     e='';
    // }


    render() {
      //  console.log(this.state.arrUser)
        let arrUser=this.state.arrUser;
        return (
            <div className="user-container">

            <ModalUser
                isOpen={this.state.isOpenModal}
                toggleFromParent={this.toggleUserModel}
                size="lg"
                className={'modal-user-container'}
                createNewUser={this.createNewUser}
              //  clearDataCreatUser={this.clearDataCreatUser}

            />
            {this.state.isOpenModalEdit &&
                <ModalEditUser
                isOpen={this.state.isOpenModalEdit}
                toggleFromParent={this.toggleEditUserModel}
                currentUser={this.state.userEdit}
                editUser={this.handleDoEditUser}

            />
            }
            

                <div className="title text-center">Manager user</div>
                
                <div className="table-user mx-3">

                <div className ="mx-1 btn-add-user">
                    <button className="btn btn-primary" 
                    onClick={()=>this.handleAddNewUser()}>+ Add user</button>
                </div>

                <body>



                    <table id="customers">
                    <tr>
                        <th>Email</th>
                        <th>Firtname</th>
                        <th>Lastname</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    
                        {arrUser&& arrUser.map((item,index)=>{
                            return(
                                <tr>
                                    <td>{item.email}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.address}</td>
                                <td>
                                    <div className="btn-action text-center">
                                        <button className="btn-edit"    
                                        onClick={()=>{this.handleEditUser(item)}}><i class="fas fa-pen-square"></i></button>
                                        <button onClick={()=>{
                                            this.handleDeleteUser(item)
                                        }}><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                </td>
                                
                                </tr>
                            )
                        })};
                        
                    
                   
                    </table>

                    </body>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
