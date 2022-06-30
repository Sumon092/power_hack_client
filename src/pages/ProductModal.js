import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const ProductModal = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const billing = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            pAmount: data.pAmount
        }

        fetch('http://localhost:5000/add-billing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(billing)
        })
            .then(res => res.json())
            .then(insert => {
                if (insert.insertedId) {
                    toast.success('bill added successfully');
                    reset()
                }
                else {
                    toast.error('Failed to add a bill')
                }
                // console.log('doctor', insert);
            })


        console.log(data);
    }
    return (
        <div className='flex justify-center items-center flex-col'>
            <input type="checkbox" id="product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div class="modal-action ml-0">
                        <label for="product-modal" class="btn btn-xs">X</label>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone no. required'
                                    },
                                    minLength: {
                                        value: 11,
                                        message: 'Mobile Number must be 11 digit'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Paid Amount</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Paid Amount"
                                className="input input-bordered w-full max-w-xs"
                                {...register("pAmount", {
                                    required: {
                                        value: true,
                                        message: 'Paid Amount required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.pAmount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pAmount.message}</span>}

                            </label>
                        </div>


                        <input className='btn btn-info btn-outline hover:text-white w-full max-w-xs text-white' type="submit" value="Add Bill" />

                    </form>
                </div>
            </div>



        </div>
    );
};

export default ProductModal;