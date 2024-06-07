import "./App.css";
import Footer from "./components/Footer";
import LinkList from "./components/LinkList";
import ProfilePicture from "./components/ProfilePicture";

function App() {
  return (
    <>
      <section
        id="main"
        className="w-[90%] my-11 mx-auto bg-blue-300 p-10 border-8 rounded-xl border-gray-900 shadow-lg"
      >
        <ProfilePicture />
        <LinkList />
      </section>
      <Footer />
    </>
  );
}

export default App;
