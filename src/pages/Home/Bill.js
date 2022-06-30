import React from 'react';

const Bill = ({ bill, setDeleteBill }) => {
    const { billingId, fullName, email, paidAmount, phone } = bill;
    return (
        <tr>
            <th>{billingId}</th>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{paidAmount}</td>

            <td><button className='btn btn-xs btn-info text-white'>Edit</button>||<span class="card-actions justify-end">
                <label onClick={() => setDeleteBill(bill)} for="delete-modal" class="btn btn-error text-white btn-xs">Delete</label>

            </span></td>
        </tr>
    );
};

export default Bill;