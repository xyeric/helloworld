// Test for the hello world message
const assert = require('assert');

// Capture console.log output
let consoleOutput = '';
const originalLog = console.log;
console.log = function(message) {
  consoleOutput += message;
  originalLog.apply(console, arguments);
};

// Run the code
require('../src/index.js');

// Test that the output contains "hello, world" and not "hello, word"
try {
  assert.strictEqual(consoleOutput, 'hello, world');
  console.log('✅ Test passed: Output is correctly "hello, world"');
} catch (error) {
  console.error('❌ Test failed:', error.message);
}

// Restore original console.log
console.log = originalLog;