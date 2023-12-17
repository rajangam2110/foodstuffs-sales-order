import React from 'react'
import './styles.scss';

export default function SalesOrder() {
  return (
    <div className="sales-order">
        <div className="sales-order-header">Sales Order</div>
        <div className="order-inputs">
            <div className="order-input">
                <div className="items-name">How many items</div>
                <div className="items-value"><input type="text" name="itemCount" id="" /></div>
            </div>
            <div className="order-input">
                <div className="items-name">Price per item</div>
                <div className="items-value"><input type="text" name="itemPrice" id="" /></div>
            </div>
            <div className="order-input">
                <div className="items-name">Region code</div>
                <div className="items-value">
                    <select name="regionCode">
                        <option value="AUK">AUK</option>
                        <option value="WLG">WLG</option>
                    </select>
                </div>
            </div>            
        </div>
        <div className="submit-button">
            <input type="button" value="Calculate Total Price" />
        </div>
    </div>
  )
}
