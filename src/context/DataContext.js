import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";



const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
 
 

  const { data, isLoading} = useAxiosFetch('http://localhost:3503/posts');

   useEffect(() => {
    setPosts(data);
   }, [data])

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

 
 
  return (
    <DataContext.Provider value={{
      search, setSearch,
      searchResults, setSearchResults, isLoading,
      posts, setPosts, 
    }}>
      {children}
   </DataContext.Provider>
  )
}

export default DataContext;