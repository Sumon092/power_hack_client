import React from 'react';
import ProductModal from '../ProductModal';
import BillingList from './BillingList';

const Home = () => {
    return (
        <div>
            <ProductModal></ProductModal>
            <BillingList></BillingList>
        </div>
    );
};

export default Home;