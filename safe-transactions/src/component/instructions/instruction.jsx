import React, { useState } from 'react';
import './transactionForm.css'; // Import your custom CSS for styling

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        transactionDate: '',
        cardType: '',
        channel: '',
        transactionType: '',
        transactionTypeGroup: '',
        entryMode: '',
        outletId: '',
        merchantCountry: '',
        merchantActivity: '',
        clientCode: '',
        amountUSD: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="form-container">
            <h2>TRANSACTION DETAILS</h2>
            <form className="custom-form" onSubmit={handleSubmit}>
                <div className="column">
                    <label>
                        Amount USD:
                        <input
                            type="number"
                            name="amountUSD"
                            value={formData.amountUSD}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Card Type:
                        <input
                            type="text"
                            name="cardType"
                            value={formData.cardType}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Channel:
                        <input
                            type="text"
                            name="channel"
                            value={formData.channel}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Transaction Type:
                        <input
                            type="text"
                            name="transactionType"
                            value={formData.transactionType}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Transaction Type Group:
                        <input
                            type="text"
                            name="transactionTypeGroup"
                            value={formData.transactionTypeGroup}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="column">
                    <label>
                        Entry Mode:
                        <input
                            type="text"
                            name="entryMode"
                            value={formData.entryMode}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Outlet ID:
                        <input
                            type="text"
                            name="outletId"
                            value={formData.outletId}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Merchant Country:
                        <input
                            type="text"
                            name="merchantCountry"
                            value={formData.merchantCountry}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Merchant Activity:
                        <input
                            type="text"
                            name="merchantActivity"
                            value={formData.merchantActivity}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Client Code:
                        <input
                            type="text"
                            name="clientCode"
                            value={formData.clientCode}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="column">

                </div>
            </form>
            <div className="btn">
                <button className="btn" type="submit">
                    DETECT !
                </button>
            </div>
        </div>
    );
};

export default TransactionForm;
