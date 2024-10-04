import Footer from "./footer";
import QuoteForm from "./quoteForm";

export default function Quote() {
  return (
    <>
      {" "}
      <QuoteForm submitUrl={"http://localhost:3001/quotes"} />
      <hr></hr>
      <Footer />
    </>
  );
}
