import SectionHeader from "@/components/shared/marketing/SectionHeader";
import FAQAccordion from "@/components/shared/marketing/FAQAccordion";
import SearchBar from "@/components/shared/marketing/SearchBar";
import { faqData } from "@/utils/web-constants";
import { useState } from "react";

export default function ContactDetails() {
  const [search, setSearch] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqData);

  const handleSearch = () => {
    const q = search.trim().toLowerCase();
    if (!q) {
      setFilteredFaqs(faqData);
      return;
    }
    setFilteredFaqs(
      faqData.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q),
      ),
    );
  };

  return (
    <section className="section-container px-6 py-2 text-primary-foreground">
      <SectionHeader
        bigHeading="HAVE A QUESTION? WE’RE HERE TO HELP"
        description={`Explore our most frequently asked questions below and if you can’t find \n what you’re looking for, we’d love to hear from you.`}
        alignment="center"
        showWhirl={false}
        descriptionStyle="light"
        descriptionColor="text-primary-foreground"
        fontStyleBigHeading="font-cormorant"
        fontStyleDescription="font-sans"
      />

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={handleSearch}
        placeholder="Search Here ..."
      />

      <FAQAccordion faqs={filteredFaqs} />
    </section>
  );
}
