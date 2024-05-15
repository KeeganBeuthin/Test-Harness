function executeCreditLeg(amount, account) {
    console.log(`SDK2: Crediting ${amount} to account ${account}`);
    return `Credited ${amount}`;
  }
  
  function executeDebitLeg(amount, account) {
    console.log(`SDK2: Debiting ${amount} from account ${account}`);
    return `Debited ${amount}`;
  }
  
  async function httpRequest(url) {
    console.log(`SDK2: Fetching data from ${url}`);
    return { data: "Data from SDK2" };
  }
  
  module.exports = {
    executeCreditLeg,
    executeDebitLeg,
    httpRequest,
    name: "SDK2"
  };
  