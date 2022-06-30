import React from 'react';
import { useForm } from "react-hook-form";


const ProductModal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log('data added');
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