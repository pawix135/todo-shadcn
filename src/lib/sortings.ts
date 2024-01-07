// Todos sorting
export const sortByDone = (todos: Todo[]): Todo[] => {
  // Spread array to avoid mutation
  return [...todos]
    .sort((a, b) => {
      if (a.updated_at === b.updated_at) return 0;
      return a.updated_at > b.updated_at ? -1 : 1;
    })
    .sort((a, b) => {
      return a.done === b.done ? 0 : a.done ? 1 : -1;
    });
};
