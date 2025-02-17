const checkTableAvailability = (allTables) => {
  const index = allTables.findIndex(
    ({ available }) => available
  );

  return index;
};

module.exports = checkTableAvailability;
