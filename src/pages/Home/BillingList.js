import React from 'react';
import { useQuery } from 'react-query';
import Bill from './Bill';

const BillingList = () => {
    const { data: billings, isLoading, refetch } = useQuery('billings', () => fetch('http://localhost:5000/billingList', {
        method: 'GET',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // },

    }).then(req => req.json()));
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className='px-24'>
            <h2>This is billing list</h2>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Billing Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            billings.map(bill => <Bill key={bill._id} bill={bill}></Bill>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BillingList;