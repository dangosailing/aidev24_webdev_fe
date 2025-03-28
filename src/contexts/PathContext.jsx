import React, { useState } from "react";
import PathContext from "./PathContextBase";

const PathProvider = ({ children }) => {
  const [route, setRoute] = useState([]);
  const [title, setTitle] = useState("");
  const [distance, setDistance] = useState(1000);
  const [position, setPosition] = useState(null);
  const [savedTime, setSavedTime] = useState(0);

  return (
    <PathContext.Provider
      value={{
        route,
        setRoute,
        title,
        setTitle,
        distance,
        setDistance,
        position,
        setPosition,
        savedTime,
        setSavedTime,
      }}
    >
      {children}
    </PathContext.Provider>
  );
};

export default PathProvider;
