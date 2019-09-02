export const getFilters = (cards) => {
  const filtersCount = {
    all: cards.length,
    watchlist: 0,
    watched: 0,
    favorites: 0,
  };

  cards.forEach(({isWatchlist, isWatched, isFavorite}) => {
    filtersCount.watchlist += isWatchlist;
    filtersCount.watched += isWatched;
    filtersCount.favorites += isFavorite;
  });

  return filtersCount;
};
