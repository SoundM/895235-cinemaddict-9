export const getFilters = (tasks) => ({
  get allFilmsNumber() {
    return tasks.length;
  },
  get watchlistNumber() {
    return tasks.filter((task) => task.isWatchlist).length;
  },
  get historyNumber() {
    return tasks.filter((task) => task.isWatched).length;
  },
  get favoriteNumber() {
    return tasks.filter((task) => task.isFavorite).length;
  }
});
