import React from 'react';
import { toast } from 'react-toastify';


const DeleteModal = ({ deleteBill, setDeleteBill, refetch }) => {
    console.log(deleteBill);
    const handleDelete = () => {


        fetch(`http://localhost:5000/deleteBilling/${deleteBill._id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount === 1) {
                    toast.success(`delete successful`)
                    refetch()
                    setDeleteBill(null)
                }
            })



    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{deleteBill.fullName}</h3>
                    {/* <h3 class="font-bold text-lg">{deleteBill._id}</h3> */}
                    <p class="py-4">If you delete this you will lost this product</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(deleteBill._id)} class="btn btn-error btn-sm text-white">Delete</button>
                        <label for="my-modal-6" class="btn btn-sm btn-primary">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;