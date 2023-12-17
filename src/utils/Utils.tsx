export function calculateSalesTotal(itemsCount:number, pricePerItem: number, taxRate?: number) {
    const invoice = {subTotal : '0', tax: '0', total: '0'};
    invoice.subTotal = formatPrice(itemsCount * pricePerItem);
    if(taxRate){
        invoice.tax = formatPrice(parseFloat(invoice.subTotal) * (taxRate / 100));
    }
    invoice.total = formatPrice(parseFloat(invoice.subTotal) + parseFloat(invoice.tax));
    return invoice;
}

function formatPrice( price: number ) {
    return (Math.round(price * 100) / 100).toFixed(2);
}