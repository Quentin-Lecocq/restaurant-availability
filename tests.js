import checkTableAvailability from "./script.js";

const tables = [
  { available: false },
  { available: true },
  { available: false },
  { available: true }
];

console.log('Test 1: Finding first available table');
const result = checkTableAvailability(tables);
console.log('Expected result:', 1);
console.log('Actual result:', result);
console.log('Test 1:', result === 1 ? '✅ PASS' : '❌ FAIL');

console.log('Test 2: No available tables');
const noAvailableTables = [
  { available: false },
  { available: false }
];
const result2 = checkTableAvailability(noAvailableTables);
console.log('Expected result:', -1);
console.log('Actual result:', result2);
console.log('Test 2:', result2 === -1 ? '✅ PASS' : '❌ FAIL');

console.log('Test 3: Among disabled tables')
const withOffTables = [
  { available: false },
  { available: null },
  { available: true }
]
const result3 = checkTableAvailability(withOffTables);
console.log('Expected result:', 2);
console.log('Actual result:', result3);
console.log('Test 3:', result3 === 2 ? '✅ PASS' : '❌ FAIL');

