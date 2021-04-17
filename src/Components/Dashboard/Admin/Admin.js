import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AddService from './AddService/AddService';
import ManageOrder from './ManageOrder/ManageOrder';
import AddAdmin from './AddAdmin/AddAdmin';
import ManageService from './ManageService/ManageService';
library.add(fas)
const Admin = () => {
    const [menu, setMenu] = useState('Manage Order')
    return (
        <main className='dashboard'>
            <div className="sidebar">
                <li><span onClick={() => setMenu('Manage Order')}>
                    <FontAwesomeIcon className="icon active-icon" icon={['fas', 'cart-plus']}></FontAwesomeIcon>
                Manage Order</span></li>
                <li>
                    <span onClick={() => setMenu('Add Service')}>
                        <FontAwesomeIcon className="icon active-icon" icon={['fas', 'plus-square']}></FontAwesomeIcon>
                    Add Service
                    </span></li>

                <li><span onClick={() => setMenu('Add Admin')}>
                    <FontAwesomeIcon className="icon active-icon" icon={['fas', 'user-plus']}></FontAwesomeIcon> Add Admin</span></li>
                <li><span onClick={() => setMenu('Manage Service')}>
                    <FontAwesomeIcon className="icon active-icon" icon={['fas', 'cart-plus']}></FontAwesomeIcon>
                Manage Service</span></li>
            </div>
            <div className='body'>
                <h2>{menu}</h2>
                {
                    menu === 'Add Service' ?
                        <AddService></AddService>
                        : menu === 'Manage Order' ? <ManageOrder></ManageOrder>
                            : menu === 'Add Admin' ? <AddAdmin></AddAdmin>
                                : <ManageService></ManageService>
                }
            </div>
        </main>
    );
};

export default Admin;