import React from 'react';

const Bill = ({ bill }) => {
    const { billingId, fullName, email, paidAmount, phone } = bill;
    return (
        <tr>
            <th>{billingId}</th>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{paidAmount}</td>

            <td><button className='btn btn-xs'>Edit</button>||<button className='btn btn-xs'>Delete</button></td>
        </tr>
    );
};

export default Bill;