/**
 * Returns the given collection sorted by display order.
 *
 * @param {Array} collection The unsorted collection.
 * @returns {Array} the sorted collection
 */
module.exports = (collection) =>
  collection.sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
