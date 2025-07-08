import Navbar from "@/components/Navbar";
import BlogList from "./_components/BlogList";
import Jumbotron from "./_components/Jumbotron";
import Footer from "@/components/Footer";

export default function BlogsList() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow px-6 md:px-16 lg:px-24 pt-24 pb-12">
        <Jumbotron />
        <BlogList />
      </main>

      <Footer />
    </div>
  );
}
