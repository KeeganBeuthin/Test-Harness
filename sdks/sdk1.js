// my-sdk/index.js
function executeCreditLeg(amount, account) {
    if (typeof amount !== 'number') throw new Error('Invalid amount');
    return `Credited ${amount} to account ${account}`;
}

function executeDebitLeg(amount, account) {
    if (amount > 500) return 'Insufficient funds'; // Assume this will trigger an overdraft
    return `Debited ${amount} from account ${account}`;
}

async function httpRequest(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return { data: `Data fetched from ${url}` };
    } catch (error) {
        throw new Error('Network error');
    }
}

module.exports = {
    executeCreditLeg,
    executeDebitLeg,
    httpRequest,
    name: "MySDK"
};
