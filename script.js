const checkTableAvailability = (allTables) => {
  const index = allTables.findIndex(
    ({ available }) => available
  );

  return index;
};

const checkTableAvailabilityAsync = async (allTables) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const index = allTables.findIndex(
      ({ available }) => available)

    if (index === null) {
      throw {
        code: 404,
        message: 'No available tables found in the system'
      };
    }

    return index;
  } catch (error) {
    switch (error.code) {
      case 400:
        console.error('Bad Request: Invalid table format or parameters', {
          message: 'The request contains invalid table data',
          details: error.message,
          timestamp: new Date().toISOString()
        });
        break;

      case 404:
        console.error('Not Found: No available tables', {
          message: 'Unable to find any available tables',
          details: error.message,
          timestamp: new Date().toISOString()
        });
        break;

      case 408:
        console.error('Request Timeout: Table verification took too long', {
          message: 'The system is currently slow to respond',
          details: error.message,
          timestamp: new Date().toISOString()
        });
        break;

      case 500:
        console.error('Internal Server Error: System malfunction', {
          message: 'An unexpected error occurred',
          details: error.message,
          timestamp: new Date().toISOString()
        });
        break;

      default:
        console.error('Unexpected Error', {
          message: 'An unknown error occurred',
          details: error.message,
          timestamp: new Date().toISOString()
        });
        break;
    }
  }
}

export {
  checkTableAvailability,
  checkTableAvailabilityAsync
};
