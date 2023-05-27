import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/store";
import { useToken } from "./hooks/useToken";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPosts } from "./shared/RoutesPosts";
import { CardsList } from "./shared/CardsList";
import "./shared/main.global.less";

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useToken(store);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <UserContextProvider>
            <PostsContextProvider>
              <RoutesPosts
                Layout={
                  <Layout>
                    <Header />
                    <Content>
                      <CardsList />
                    </Content>
                  </Layout>
                }
              />
            </PostsContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
