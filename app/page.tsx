import Image from "next/image";
import Header from "./global-components/Header";
import Footer from "./global-components/Footer";
import ListingsPage from "./listings/page";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <ListingsPage></ListingsPage>
      <Footer></Footer>
    </main>


  );
}
