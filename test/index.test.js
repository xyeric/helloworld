// Test for index.js

describe('index.js', () => {
  test('logs "hello, world" to the console', () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log');
    
    // Execute the code in index.js
    require('../src/index.js');
    
    // Check if console.log was called with the correct string
    expect(consoleSpy).toHaveBeenCalledWith('hello, world');
    
    // Restore the original console.log
    consoleSpy.mockRestore();
  });
});