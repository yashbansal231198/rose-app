import { CallToActionSharp } from "@material-ui/icons";
import React, { useEffect, useState, useCallback } from "react";
import ItemProps from "../types/ItemProps";
const useSearchPosts = (): [
  string,
  ItemProps[],
  boolean,
  (e: React.ChangeEvent) => void
] => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const onChangeSearch = (e: React.ChangeEvent) => {
    setQuery((e.target as HTMLInputElement).value);
    setLoading(true);
    try {
      let q = encodeURIComponent(query);
      fetch(
        `https://newsapi.org/v2/everything?q=${q}&from=2021-08-08&sortBy=publishedAt&language=en&apiKey=e8f88e032eee479b96b08f42b235a13f`
      )
        .then((response) => response.json())
        .then((body) => setPosts(body.articles))
        .then(() => setLoading(false));
    } catch (event) {
      setLoading(false);
    }
  };
  return [query, posts, loading, onChangeSearch];
};

export default useSearchPosts;
