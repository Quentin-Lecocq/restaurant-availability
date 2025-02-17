# Restaurant Table Availability Checker

A simple utility to check table availability in a restaurant system.

## Features

- Synchronous table availability check
- Asynchronous table availability check with simulated API delay
- Error handling with HTTP-like status codes
- Comprehensive test suite

## Functions

### `checkTableAvailability(allTables)`

Synchronously finds the first available table.

```javascript
const tables = [
{ available: false },
{ available: true }
];

const index = checkTableAvailability(tables); // Returns 1
```

### `checkTableAvailabilityAsync(allTables)`

Asynchronously finds the first available table with a simulated API delay.

```javascript
const tables = [
{ available: false },
{ available: true }
];

const index = await checkTableAvailabilityAsync(tables); // Returns 1 after 1s
```

## Error Handling

The async version handles various error cases:

- 400: Bad Request (Invalid input)
- 404: Not Found (No available tables)
- 408: Request Timeout
- 500: Internal Server Error

## Testing

Run the tests with:
`npm run test:watch`

Tests cover:

- Basic table availability
- No available tables
- Tables with null values
- Async operation timing

## Installation

`npm install`

## Development

This project uses:

- ES Modules for imports/exports
- Nodemon for development watching
