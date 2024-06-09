import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: 200,
    height: 100,
  },
});

export const PDFGenerate = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>¡Hola, mundo!</Text>
          <Text>Esta es una tabla:</Text>
          <View>
            <Text>Nombre | Edad</Text>
            <Text>-----------------</Text>
            <Text>John | 30</Text>
            <Text>Jane | 25</Text>
          </View>
        </View>
        <View style={styles.section}>
        </View>
      </Page>
    </Document>
  );
};
