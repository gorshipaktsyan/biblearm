import * as React from "react";
import { useEffect, useState } from "react";
import DataController from "../../libs/controllers/DataController";
import useAppState from "./../../libs/hooks/useAppState";
import { actions } from "../../store/store";
import { Box, ScrollView } from "native-base";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "../../shared/components/Modal";
import ListView from "./ListView";
import GridView from "./GridView";

export default function Books({ navigation }) {
  const [isListView, setIsListView] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const { state, dispatch } = useAppState();

  useEffect(() => {
    async function getBooks() {
      const data = await DataController.getBooks();
      const books = data.map((book) => {
        const chapters = [...Array(book.chapters + 1).keys()];
        chapters.shift();
        return {
          title: book.name,
          abbreviation: book.abbreviation,
          chapters: book.chapters,
          code: book.code,
          fullName: book.full_name,
          name: book.name,
          subject: book.subject,
          content: chapters,
        };
      });
      dispatch({
        type: actions.SET_BOOKS,
        payload: books,
      });
    }

    getBooks();
  }, []);

  function handlePress(book) {
    setSelectedBook(book);
    setShowModal(true);
  }

  return (
    <Box style={{ flex: 1 }}>
      <Header />
      <ScrollView _contentContainerStyle={{ px: "15px", mb: "14", mt: "14" }}>
        {isListView ? (
          <ListView books={state.home.books} handlePress={handlePress} />
        ) : (
          <GridView books={state.home.books} handlePress={handlePress} />
        )}
      </ScrollView>
      <Footer setIsListView={setIsListView} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedBook={selectedBook}
        navigation={navigation}
      />
    </Box>
  );
}
