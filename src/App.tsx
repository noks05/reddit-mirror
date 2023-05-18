import React from "react";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore } from "redux";
import { rootReducer } from "./store";
import "./shared/main.global.less";

function AppComponent() {
  const store = legacy_createStore(rootReducer, composeWithDevTools());

  return (
    <Provider store={store}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
