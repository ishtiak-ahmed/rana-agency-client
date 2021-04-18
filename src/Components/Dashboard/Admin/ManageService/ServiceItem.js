import React from 'react';

const ServiceItem = ({ service }) => {
    const id = service._id
    const handleDelete = (event) => {
        console.log("deleting product with id : ", id);
        fetch(`https://ranaagency.herokuapp.com/deleteService/${id}`, {
            method: "Delete",
        })
            .then((result) => result.json())
            .then((res) => {
                if (res) {
                    // event.target.parentNode.style.display = "none";
                    alert('item deleted')
                }
            });
    }
    return (
        <tr>
            <td>{service.service}</td>
            <td>{service.description}</td>
            <td><button onClick={handleDelete} className='btn btn-sm btn-danger'>Delete</button></td>
        </tr>
    );
};

export default ServiceItem;