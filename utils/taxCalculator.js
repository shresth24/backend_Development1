
const taxRules = {
    PA: { minPrice: 1000, maxPrice: 5000, percentage: 0.12 },
    PB: { minPrice: 5000, percentage: 0.18 },
    PC: { flatTax: 200 },
    SA: { minPrice: 1000, maxPrice: 8000, percentage: 0.10 },
    SB: { minPrice: 8000, percentage: 0.15 },
    SC: { flatTax: 100 },
  };
  
  const calculateTax = (price, itemType) => {
    if (itemType === 'product') {
      if (price > taxRules.PA.minPrice && price <= taxRules.PA.maxPrice) {
        return price * taxRules.PA.percentage;
      } else if (price > taxRules.PB.minPrice) {
        return price * taxRules.PB.percentage;
      } else {
        return taxRules.PC.flatTax;
      }
    } else if (itemType === 'service') {
      if (price > taxRules.SA.minPrice && price <= taxRules.SA.maxPrice) {
        return price * taxRules.SA.percentage;
      } else if (price > taxRules.SB.minPrice) {
        return price * taxRules.SB.percentage;
      } else {
        return taxRules.SC.flatTax;
      }
    }
    return 0;
  };
  
  module.exports = { calculateTax };
  