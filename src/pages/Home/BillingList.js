import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Bill from './Bill';
import DeleteModal from './DeleteModal';
import ReactPaginate from 'react-paginate';



const BillingList = () => {
    const [addBill, setAddBill] = useState(null);
    const [query, setQuery] = useState('')
    const [total, setTotal] = useState(0)
    const [deleteBill, setDeleteBill] = useState(null)

    // const [currentItems, setCurrentItems] = useState(null);
    // const [pageCount, setPageCount] = useState(0);
    // const [itemOffset, setItemOffset] = useState(0);



    const { data: billings, isLoading, refetch } = useQuery('billings', () => fetch('https://cryptic-springs-92212.herokuapp.com/billingList', {
        method: 'GET',
    }).then(req => req.json()));



    useEffect(() => {
        let addPaidAmount = [];
        addPaidAmount = billings?.map((sum, index) => {
            return parseFloat(sum.paidAmount);
        })
        let tp = 0;
        addPaidAmount?.forEach((tt) => {
            tp += tt;
        })
        //  setTotal(addPaidAmount);
        // console.log('Paid amount', tp);
        // console.log(billings, 'see out of data');

        setTotal(tp);
    }, [billings]);



    if (isLoading) {
        return <p>Loading...</p>
    }
    const handlePageClick = (data) => {
        console.log(data.selected);
    }

    return (
        <>

            {/* <Items currentItems={currentItems} /> */}


            <div>
                <div className='px-24 flex justify-between'>
                    <p className='text-3xl font-bold'>Paid amount: {total}</p>

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

                    <label
                        for="product-modal"
                        class="btn btn-info"
                        onClick={() => setAddBill(addBill)}
                    >Add New Bill</label>

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
                                    billings.filter((bill) => bill.email?.toLowerCase().includes(query) || bill.name?.toLowerCase().includes(query) || bill.phone?.toLowerCase().includes(query)).map(bill =>
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

            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={15}
                marginPagesDisplayed={3}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={'btn-group justify-center'}
                pageClassName={'btn-group'}
                pageLinkClassName={'btn'}
                previousLinkClassName={'btn'}
                nextClassName={'btn-group'}
                nextLinkClassName={'btn'}
                breakClassName={'btn-group'}
                breakLinkClassName={'btn'}
                activeClassName={'btn btn-active'}
            />
        </>
    );
};

export default BillingList;