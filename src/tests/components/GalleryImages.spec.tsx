import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GalleryImages from "../../components/galleryImages";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getImagesData } from "../../state/actions/galleryActions";
import galleryDataReducer from "../../reducers/galleryDataReducer"
import hotTopDayMock from "../../mock/hotTopDayMock.json"

describe("Index page", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  it("Gallery renders screen correctly", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <GalleryImages />;
      </Provider>
    )
    expect(screen.getByText("Section:")).toBeInTheDocument();
    expect(screen.getByText("Sort:")).toBeInTheDocument();
    expect(screen.getByText("Window:")).toBeInTheDocument();
    var sectionDiv = screen.getByTestId("sectionDiv");
    expect(sectionDiv).toBeInTheDocument();
  });

  it('Should return the initial state', () => {
    expect(galleryDataReducer(undefined, {})).toEqual({
      "galleryData": [],
      "loading": true})
  });

  it('Gallery data should handle return getImages type', () => {
    expect(getImagesData(hotTopDayMock.data).type).toBe("getImages");
  });
});

