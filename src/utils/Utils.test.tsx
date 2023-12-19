import React from 'react';
import { calculateSalesTotal } from './Utils';

test('calculateSalesTotal function', () => {
  let salesTotal = calculateSalesTotal(12, 23.50, 4.5);
  expect(salesTotal).toEqual( {"subTotal": "282.00", "tax": "12.69", "total": "294.69"});
});
