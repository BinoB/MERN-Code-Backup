



// customerController.js

import Customer from "../Models/customerModel.js";

// Add a new customer
export const addCustomer = async (req, res) => {
    try {
        const customers = req.body; // Expecting an array of customers
        const newCustomers = await Customer.create({ customers });
        res.status(201).json(newCustomers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all customers
export const getCustomers = async (req, res) => {
    try {
        const customerRecords = await Customer.find();
        // Flatten the customers array for easier access
        // const allCustomers = customerRecords.flatMap(record => record.customers);
        res.status(200).json(customerRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a customer
export const updateCustomer = async (req, res) => {
    const { customerId } = req.params;
    const { name, phoneno } = req.body;

    try {
        // Find the customer record
        const customerRecord = await Customer.findOne({ "customers._id": customerId });

        if (!customerRecord) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Update the customer
        const customerToUpdate = customerRecord.customers.id(customerId);
        if (name) customerToUpdate.name = name;
        if (phoneno) customerToUpdate.phoneno = phoneno;

        await customerRecord.save();
        res.status(200).json(customerToUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a customer
export const deleteCustomer = async (req, res) => {
    const { customerId } = req.params;

    try {
        const customerRecord = await Customer.findOne({ "customers._id": customerId });

        if (!customerRecord) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Remove the customer using the pull method
        customerRecord.customers.pull({ _id: customerId });
        await customerRecord.save();

        res.status(204).send("Deleted customer successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};










/* // customerController.js

import Customer from "../Models/customerModel.js";
// customerController.js

// Add a new customer
export const addCustomer = async (req, res) => {
	try {
        const customers = req.body; // Expecting an array of customers
        const newCustomers = await Customer.create({ customers });
        res.status(201).json(newCustomers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all customers
export const getCustomers = async (req, res) => {
    try {
        const customerRecords = await Customer.find();
        // Flatten the customers array for easier access
        const allCustomers = customerRecords.flatMap(record => record.customers);
        res.status(200).json(allCustomers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const UpdateCustomers = async (req, res) => {
	const { customerId } = req.params;
    const { name, phoneno } = req.body;

    try {
        // Find the customer record
        const customerRecord = await Customer.findOne({ "customers._id": customerId });

        if (!customerRecord) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Update the customer
        const customerToUpdate = customerRecord.customers.id(customerId);
        if (name) customerToUpdate.name = name;
        if (phoneno) customerToUpdate.phoneno = phoneno;

        await customerRecord.save();
        res.status(200).json(customerToUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const DeleteCustomers = async (req, res) => {
    const { customerId } = req.params;

    try {
        const customerRecord = await Customer.findOne({ "customers._id": customerId });

        if (!customerRecord) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Use the pull method to remove the customer
        customerRecord.customers.pull({ _id: customerId });
        await customerRecord.save();

        res.status(204).send("Deleted customer successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 */