function CalculateBill (bill, vatRate, tipRate) {

  vatRate = +vatRate / 100 * +bill;

  tipRate = +tipRate / 100 * +bill;


  return '£' + (+bill + vatRate + tipRate).toFixed(2);

}

// take the bil
// calculate the VAT to be added (VAT / 100 * bill
// caluclate the tip to be added (tiprate / 100 * bill
// add all together
// format to 2 decimal places
// add the £ sign
// return it


// set the result variable to a string
//  set vat and tip rates
// take the bill and multipy it by vatRate and tipRate
// return the total

module.exports = CalculateBill;