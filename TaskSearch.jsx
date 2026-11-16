const TaskSearch = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search tasks..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
        w-full
        border
        rounded-xl
        px-4
        py-2.5 text-sm
        dark:bg-slate-800
        outline-none
      "
    />
  );
};

export default TaskSearch;