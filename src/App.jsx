import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Note title="My Notes" content="This is first Note" />
      <Note title="Rahul's Notes" content="This is second Note" />
      <Note title="Ankit's Notes" content="This is second Note" />
      <Note title="Ananya's Notes" content="This is your Notes" />
      <Note title="Sujata's Notes" content="This is your Notes" />

      <Footer />
    </main>
  );
}
