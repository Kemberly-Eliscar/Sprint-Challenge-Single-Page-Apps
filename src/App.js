import React from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import EpisodeList from './components/EpisodeList.js';


export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Route path='/' component={TabNav} />
      <Route path="/" component={EpisodeList} />
    </main>
  );
};
