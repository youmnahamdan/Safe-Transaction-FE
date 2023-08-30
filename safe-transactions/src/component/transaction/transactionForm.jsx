import React, { useState } from 'react';
import './transactionForm.css'; // Import your custom CSS for styling

const TransactionForm = () => {
    const [formData, setFormData] = useState({
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


    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if any of the required fields are empty
        const requiredFields = [
            'cardType', 'channel', 'transactionType', 'transactionTypeGroup',
            'entryMode', 'outletId', 'merchantCountry', 'merchantActivity',
            'clientCode', 'amountUSD'
        ];

        const isEmptyField = requiredFields.some((fieldName) => !formData[fieldName]);
        if (isEmptyField) {
            alert('Please fill in all required fields.');
            return;
        }

        const newTransaction = {
            transactionDate: formData.transactionDate,
            cardType: formData.cardType,
            channel: formData.channel,
            transactionType: formData.transactionType,
            transactionTypeGroup: formData.transactionTypeGroup,
            entryMode: formData.entryMode,
            outletId: formData.outletId,
            merchantCountry: formData.merchantCountry,
            merchantActivity: formData.merchantActivity,
            clientCode: formData.clientCode,
            amountUSD: formData.amountUSD,
        };

        try {
            const response = await fetch('http://localhost:3002/transaction/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTransaction),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Transaction created successfully:', responseData.message);
                // You can reset the form data or provide success feedback to the user
                setFormData({
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
            } else {
                console.error('Error creating transaction:', response.statusText);
                // Handle error and provide feedback to the user

            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle error and provide feedback to the user
        }

    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
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
                                placeholder='amount..'
                                required
                            />
                        </label>
                        <label>
                            Card Type:
                            <input
                                type="text"
                                name="cardType"
                                value={formData.cardType}
                                onChange={handleInputChange}
                                placeholder='card Type..'
                                required
                            />
                        </label>
                        <label>
                            Channel:
                            <input
                                type="text"
                                name="channel"
                                value={formData.channel}
                                onChange={handleInputChange}
                                placeholder='channel..'
                                required
                            />
                        </label>
                        <label>
                            Transaction Type:
                            <input
                                type="text"
                                name="transactionType"
                                value={formData.transactionType}
                                onChange={handleInputChange}
                                placeholder='transaction Type..'
                                required

                            />
                        </label>
                        <label>
                            Transaction Type Group:
                            <input
                                type="text"
                                name="transactionTypeGroup"
                                value={formData.transactionTypeGroup}
                                onChange={handleInputChange}
                                placeholder='transaction Type Group..'
                                required

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
                                placeholder='entry Mode..'
                                required

                            />
                        </label>
                        <label>
                            Outlet ID:
                            <input
                                type="text"
                                name="outletId"
                                value={formData.outletId}
                                onChange={handleInputChange}
                                placeholder='outletId..'
                                required
                            />
                        </label>
                        <label>
                            Merchant Country:
                            <input
                                type="text"
                                name="merchantCountry"
                                value={formData.merchantCountry}
                                onChange={handleInputChange}
                                placeholder='merchant Country..'
                                required

                            />
                        </label>
                        <label>
                            Merchant Activity:
                            <input
                                type="text"
                                name="merchantActivity"
                                value={formData.merchantActivity}
                                onChange={handleInputChange}
                                placeholder='merchant Activity..'
                                required

                            />
                        </label>
                        <label>
                            Client Code:
                            <input
                                type="text"
                                name="clientCode"
                                value={formData.clientCode}
                                onChange={handleInputChange}
                                placeholder='client Code..'
                                required
                            />
                        </label>
                    </div>
                    <div className="column">

                    </div>
                </form>
                <div className="btn">
                    <button className="btn" type="submit" onClick={handleSubmit}>
                        DETECT !
                    </button>
                </div>
            </div>
            {/* <div className="result">
                result :
            </div> */}
        </>
    );
};

export default TransactionForm;
