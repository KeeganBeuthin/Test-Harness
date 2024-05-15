
describe('Comprehensive Tests for MySDK', () => {
  const SDK = require('../sdks/sdk1'); // adjust the path accordingly
  const sdkConfig = {
      testParams: {
          creditAmount: 100,
          account: '123-456',
          overdraftAmount: 1000, // triggers overdraft
          apiUrl: 'https://api.example.com'
      }
  };

  test('executeCreditLeg should credit the correct amount', () => {
      expect(SDK.executeCreditLeg(100, '123-456')).toBe('Credited 100 to account 123-456');
  });

  test('executeDebitLeg should debit the correct amount', () => {
      expect(SDK.executeDebitLeg(100, '123-456')).toBe('Debited 100 from account 123-456');
  });

  test('executeCreditLeg should handle invalid amounts gracefully', () => {
      expect(() => SDK.executeCreditLeg('invalid', '123-456')).toThrow('Invalid amount');
  });

  test('executeDebitLeg should not allow overdraft', () => {
      expect(SDK.executeDebitLeg(1000, '123-456')).toBe('Insufficient funds');
  });

  test('httpRequest should fetch data correctly', async () => {
      // Mock fetch to simulate successful API call
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          json: () => Promise.resolve({ data: 'Data fetched from https://api.example.com' })
      }));
      const data = await SDK.httpRequest('https://api.example.com');
      expect(data).toEqual({ data: 'Data fetched from https://api.example.com' });
  });

  test('httpRequest should handle network errors', async () => {
      // Mock fetch to simulate network error
      global.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Network error')));
      await expect(SDK.httpRequest('https://api.example.com')).rejects.toThrow('Network error');
  });
});

