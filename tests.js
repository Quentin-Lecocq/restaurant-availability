import {
  checkTableAvailability,
  checkTableAvailabilityAsync
} from "./script.js";

const tables = [
  { available: false },
  { available: true },
  { available: false },
  { available: true }
];

const noAvailableTables = [
  { available: false },
  { available: false }
];

const withOffTables = [
  { available: false },
  { available: null },
  { available: true }
]

console.log('----------')
console.log('Test 1: Finding first available table');
console.log('----------')

const result = checkTableAvailability(tables);
console.log('Expected result:', 1);
console.log('Actual result:', result);
console.log('Test 1:', result === 1 ? '✅ PASS' : '❌ FAIL');

console.log('----------')
console.log('Test 2: No available tables');
console.log('----------')

const result2 = checkTableAvailability(noAvailableTables);
console.log('Expected result:', -1);
console.log('Actual result:', result2);
console.log('Test 2:', result2 === -1 ? '✅ PASS' : '❌ FAIL');

console.log('----------')
console.log('Test 3: Among disabled tables')
console.log('----------')

const result3 = checkTableAvailability(withOffTables);
console.log('Expected result:', 2);
console.log('Actual result:', result3);
console.log('Test 3:', result3 === 2 ? '✅ PASS' : '❌ FAIL');

console.log('----------')
console.log('Test 4: Finding first available table with Promise');
console.log('----------')
const result4 = await checkTableAvailabilityAsync(tables);
console.log('Expected result:', 1);
console.log('Actual result:', result4);
console.log('Test 4:', result4 === 1 ? '✅ PASS' : '❌ FAIL');

console.log('----------')
console.log('Test 5: No available tables with Promise');
console.log('----------')
const result5 = await checkTableAvailabilityAsync(noAvailableTables);
console.log('Expected result:', -1);
console.log('Actual result:', result5);
console.log('Test 5:', result5 === -1 ? '✅ PASS' : '❌ FAIL');

console.log('----------')
console.log('Test 6: Among disabled tables with Promise')
console.log('----------')

const result6 = await checkTableAvailabilityAsync(withOffTables);
console.log('Expected result:', 2);
console.log('Actual result:', result6);
console.log('Test 6:', result6 === 2 ? '✅ PASS' : '❌ FAIL');

console.log('----------')
console.log('\nTest 7: Testing async delay');
console.log('----------')

console.log('Starting async test...');
const startTime = new Date();

const result7 = await checkTableAvailabilityAsync(tables);

const endTime = new Date();
const duration = endTime - startTime;

console.log('Expected result:', 1);
console.log('Actual result:', result7);
console.log(`Duration: ${duration}ms`);
console.log('Test 7:', result7 === 1 && duration >= 1000 ? '✅ PASS' : '❌ FAIL');


