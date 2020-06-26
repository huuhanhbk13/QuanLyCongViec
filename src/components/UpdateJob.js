import React, { Component } from 'react';
class UpdateJob extends Component {
constructor(props) {
        super(props);
        this.state={
            name: [] ,
            status: false,
            statusTaskItem: false
        }
    }
changeHandler = (event) => {   // Lấy giá trị ở ô input
    var target = event.target;
    var name =target.name;
    var value= target.value;
    if(name==='status'){
        value=target.value ==='false' ? false :true;
    } 
    this.setState({
        [name]: value
        });
    }

onReset=()=>{         // reset lại form
        this.setState({
            name: '',
            status: ''
        });
    }

onUpdate=()=>{
    this.props.onUpdate(this.state);
}
render(){
    return (
    <div className="row ml">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <form id='myform' onSubmit={this.onSubmit}>
                <legend>
                   Cập nhật Công Việc
                   <i className="fas fa-times fa-sm aj" onClick={this.props.onOpen}></i>
                </legend>
                <div className="form-group">
                    <label>Tên:</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    name='name' 
                    value={this.state.name}
                    onChange={this.changeHandler}
                    /><br/>
                    <label>Trạng thái:</label>
                    <select 
                     className="form-control"
                     name='status' 
                     value={this.state.status}
                     onChange={this.changeHandler}>
                        <option value={false} >Hidden</option>
                        <option value={true}>Active</option>
                    </select>
                    <div className='PBtn'>
                        <button type="button" className="btn btn-success" onClick={this.onUpdate}>Save</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onReset}>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
}
}
export default UpdateJob;
