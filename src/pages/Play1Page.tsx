import { ContactCard } from "../components/ContactCard";
import { Navbar } from "../components/base/Navbar";
import { Planes1PlayDB } from "../db/db";

export const Play1Page = () => {
  return (
    <>
      <Navbar />
      <ContactCard select_input_items={Planes1PlayDB} />
    </>
  );
};
