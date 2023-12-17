import React, { useState } from 'react'
import { Regions } from './Regions';
import './styles.scss';
import { calculateSalesTotal } from '../../utils/Utils';

export default function SalesOrder() {
    const [itemsCount, setItemsCount] = useState<number>(0);
    const [pricePerItem, setPricePerItem] = useState<number>(0.0);
    const [taxRate, setTaxRate] = useState<number>(Regions.AUK);
    const [invoice, setInvoice] = useState<any>();

    function calculateTotal(): void {     
        console.log(taxRate);   
        const invoice = calculateSalesTotal(itemsCount, pricePerItem, taxRate);
        setInvoice(invoice);
        console.log(invoice);
    }

    return (
        <div className="sales-order">
            <div className="sales-order-header">Sales Order</div>
            <div className="order-inputs">
                <div className="order-input">
                    <div className="items-name">How many items</div>
                    <div className="items-value"><input type="number" name="itemsCount" value={itemsCount} onChange={e => setItemsCount(parseInt(e.target.value))}/></div>
                </div>
                <div className="order-input">
                    <div className="items-name">Price per item</div>
                    <div className="items-value"><input type="number" step="0.1" name="pricePerItem" value={pricePerItem} onChange={e => setPricePerItem(parseFloat(e.target.value))}/></div>
                </div>
                <div className="order-input">
                    <div className="items-name">Region code</div>
                    <div className="items-value">
                        <select name="regionCode" value={taxRate} onChange={e => setTaxRate(parseFloat(e.target.value))}>
                            {(Object.keys(Regions) as Array<keyof typeof Regions>).map((key) => {return <option value={Regions[key]}>{key as string}</option>})}
                            
                        </select>
                    </div>
                </div>            
            </div>
            <div className="submit-button">
                <input type="button" value="Calculate Total Price" onClick={calculateTotal} />
            </div>

            {invoice && 
                <div className="invoice-content">                    
                    <div className="invoice-item invoice-sub-total">
                        <div className="invoice-label">Sub Total: </div>
                        <div className="invoice-value">${invoice.subTotal}</div>
                    </div>
                    <div className="invoice-item invoice-sub-Tax">
                    <div className="invoice-label">Tax ({taxRate}%): </div>
                        <div className="invoice-value">${invoice.tax}</div>
                    </div>
                    <div className="invoice-item invoice-total">
                    <div className="invoice-label">Total: </div>
                        <div className="invoice-value">${invoice.total}</div>
                    </div>
                </div>
            }
        </div>
    )
}
