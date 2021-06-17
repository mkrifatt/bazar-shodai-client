import React from 'react';
import remove from '../Home/img/Group 33150.png'
const ManageProductTable = ({product}) => {
    const {name, weight, price,_id} = product
console.log(product);
    const handleDelete = (id,event) => {
        fetch(`https://aqueous-headland-21885.herokuapp.com/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                event.target.parentNode.style.display="none"
            }
        })
        window.alert("Successfully Deleted This Product Form Our Database")
    }
    
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                 <img style={{width:"25px", height:"25px"}} onClick={(event)=>handleDelete(_id,event)} src={remove} alt=".." /> 
            </tr>
        </tbody>
        
    );
};

export default ManageProductTable;