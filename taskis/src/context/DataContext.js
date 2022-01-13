import { useState, createContext, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  //MODALS //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  //TASK INFO
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [categories, setCategories] = useState("");

  //SEARCH AND FILTER
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  //DATA
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3010/tasks"
  );

  useEffect(() => {
    setTasks(data);
  }, [data]);

  // MODALS
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  return (
    <DataContext.Provider
      value={{
        tasks,
        setTasks,
        taskDescription,
        setTaskDescription,
        categories,
        setCategories,

        fetchError,
        isLoading,

        isModalOpen,
        handleOpenModal,
        handleCloseModal,

        isEditModalOpen,
        handleOpenEditModal,
        handleCloseEditModal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
