import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Bill from './Bill';
import DeleteModal from './DeleteModal';

const BillingList = () => {
    const [query, setQuery] = useState('')
    const [total, setTotal] = useState(0)
    const [deleteBill, setDeleteBill] = useState(null)
    const { data: billings, isLoading, refetch } = useQuery('billings', () => fetch('https://cryptic-springs-92212.herokuapp.com/billingList', {
        method: 'GET',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // },

    }).then(req => req.json()));
    useEffect(() => {
        let addPaidAmount = [];
        addPaidAmount = billings.map((sum, index) => {
            return parseFloat(sum.paidAmount);
        })
        let tp = 0;
        addPaidAmount.forEach((tt) => {
            tp += tt;
        })
        //  setTotal(addPaidAmount);
        console.log('Paid amount', tp);
        console.log(billings, 'see out of data');

        setTotal(tp);
    }, []);
    console.log(total);


    console.log(billings, "data")
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <>
            <div className='px-24 flex justify-between'>
                <p>Paid amount: {total}</p>

                <p className='mb-5'>
                    <label className='text-xl'>Search Bill</label>
                    <input
                        className='ml-5 p-3'
                        type="search"
                        name="search"
                        placeholder='search'
                        id=""
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </p>

                <p className='text-right mr-0 mb-5'><button className='btn btn-success'>Add New Bill</button></p>
            </div>
            <div className='px-24 '>
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
                                billings.map(bill =>
                                    <Bill
                                        key={bill._id}
                                        bill={bill}
                                        setDeleteBill={setDeleteBill}
                                    >
                                    </Bill>)
                            }
                        </tbody>
                        {
                            deleteBill && <DeleteModal
                                deleteBill={deleteBill}
                                setDeleteBill={setDeleteBill}
                                refetch={refetch}
                            ></DeleteModal>
                        }

                    </table>
                </div>
            </div>
        </>
    );
};

export default BillingList;