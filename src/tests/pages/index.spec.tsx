import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import GalleryImages from "../../components/galleryImages";
import Index from "../../pages/index"
import App from "../../pages/_app";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe("Index page", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  it("should render", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <GalleryImages />;
      </Provider>)
    expect(screen.getByText("Section:")).toBeInTheDocument();
    expect(screen.getByText("Sort:")).toBeInTheDocument();
    expect(screen.getByText("Window::")).toBeInTheDocument();
  });
});