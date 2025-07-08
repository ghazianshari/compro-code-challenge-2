import Footer from "@/components/Footer";
import BlogList from "./_components/BlogList";
import Jumbotron from "./_components/Jumbotron";
import Navbar from "@/components/Navbar";

export default function BlogsList() {
  return (
    <main className="container min-h-screen mx-auto px-4 bg-black text-white">
      <Navbar />
      <Jumbotron />
      <BlogList />
      <Footer />
    </main>
  );
}
