// customerModel.js
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customers: [
        {
            name: { type: String},
            phoneno: { type: String},
        },
    ],
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
