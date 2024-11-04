// customerModel.js
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customers: [
        {
            name: { type: String, required: true },
            id: { type: String, required: true },
        },
    ],
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
