"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/marketing/SectionHeader";
import ToggleButton from "@/components/shared/marketing/ToggleButton";
import Button from "@/components/shared/Button";
import {
  addOnsFeatures,
  bookSizeTabs,
  copyTypeTabs,
  coverFinishTabs,
  images,
  pagesCountTabs,
  pagesStructure,
  paperTypeTabs,
} from "@/utils/web-constants";

export default function BookCustomizer() {
  const [bookSize, setBookSize] = useState("6x6");
  const [copyType, setCopyType] = useState("soft");
  const [paperType, setPaperType] = useState("standard");
  const [coverFinish, setCoverFinish] = useState("matte");
  const [pagesCount, setPagesCount] = useState("40");

  return (
    <section className="bg-primary overflow-hidden">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
          {/* Left Column - Images & Pages Structure */}
          <div className="mt-8 h-full">
            <div className="h-full flex flex-col">
              {/* Three Book Images */}
              <div className="p-4 sm:p-6 lg:p-8">
                <Image
                  src={images.CreateYourBookStepThreeFirstImage}
                  alt="Book Preview 1"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <Image
                  src={images.CreateYourBookStepThreeSecondImage}
                  alt="Book Preview 2"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <Image
                  src={images.CreateYourBookStepThreeThirdImage}
                  alt="Book Preview 3"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Pages Structure Section */}
              <div className="p-4 sm:p-6 lg:p-8 h-full">
                <div className="bg-primary-border/40 p-4 pr-4 sm:p-6 sm:pr-12 md:p-8 md:pr-20 lg:p-8 lg:pr-32 h-full">
                  <h3 className="font-cormorant font-semibold pl-2 sm:pl-4 lg:pl-6 text-xl md:text-2xl text-primary-foreground mb-8">
                    Pages Structure:
                  </h3>
                  <ul className="font-sans space-y-4 pl-4 sm:pl-6 lg:pl-10">
                    {pagesStructure.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary-foreground -mt-1">•</span>
                        <p className="text-xs text-primary-foreground">
                          <span className="font-bold">{item.title} - </span>
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Customization Options */}
          <div className="bg-white px-4 pt-8 pb-6 sm:px-6 sm:pt-12 md:px-10 md:pt-16 lg:pl-14 lg:pr-18 lg:pt-28 h-full">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-cormorant text-lg text-primary-foreground font-semibold">
                4.6
              </span>
              <span className="text-sans text-sm text-primary-foreground/70">
                300+ Reviews
              </span>
            </div>

            {/* Heading */}
            <SectionHeader
              bigHeading="CLASSIC LOVE STORIES PHOTO BOOK"
              alignment="left"
              bigHeadingColor="text-primary-foreground"
              className="mb-6!"
              fontStyleBigHeading="font-cormorant"
              fontStyleSmallHeading="font-cormorant"
            />

            {/* Description */}
            <div className="mb-8 pr-0 md:mb-10 md:pr-4 lg:mb-12 lg:pr-12">
              <h4 className="font-cormorant font-bold text-3xl text-primary-foreground mb-2">
                Description
              </h4>
              <p className="font-sans text-xs text-primary-foreground/80 leading-relaxed">
                Your memories deserve to be shared and enjoyed – not lost in the
                endless scroll. Spoken Heirloom is here to help you print what
                matters most.
              </p>
            </div>

            {/* Book Size */}
            <ToggleButton
              tabs={bookSizeTabs}
              activeTab={bookSize}
              onTabChange={setBookSize}
              heading="Book Size"
              className="mb-4!"
              fullWidth={true}
            />

            {/* Book Size Preview */}
            <div className="mb-18">
              <div className="inline-flex flex-col items-center border border-primary-foreground/30 bg-gray-200 p-4 rounded">
                <div
                  className="border border-primary-foreground/50 bg-white"
                  style={{
                    width:
                      bookSize === "6x6" ? 60 : bookSize === "8x8" ? 80 : 100,
                    height:
                      bookSize === "6x6" ? 60 : bookSize === "8x8" ? 80 : 100,
                  }}
                />
                <span className="text-xs text-primary-foreground mt-2">
                  {bookSize.replace("x", " x ")}
                </span>
              </div>
            </div>

            {/* Soft Copy / Hard Copy */}
            <ToggleButton
              tabs={copyTypeTabs}
              activeTab={copyType}
              onTabChange={setCopyType}
              heading="Soft Copy/Hard Copy"
              isRadioButton={true}
              className="mb-8! md:mb-12! lg:mb-18!"
              fullWidth={true}
            />

            {/* Paper Type */}
            <ToggleButton
              tabs={paperTypeTabs}
              activeTab={paperType}
              onTabChange={setPaperType}
              heading="Paper Type"
              className="mb-8! md:mb-12! lg:mb-18!"
              fullWidth={true}
            />

            {/* Cover Finish */}
            <ToggleButton
              tabs={coverFinishTabs}
              activeTab={coverFinish}
              onTabChange={setCoverFinish}
              heading="Cover Finish"
              className="mb-8! md:mb-12! lg:mb-18!"
              fullWidth={true}
            />

            {/* Pages Count */}
            <ToggleButton
              tabs={pagesCountTabs}
              activeTab={pagesCount}
              onTabChange={setPagesCount}
              heading="Pages Count"
              isRadioButton={true}
              className="mb-8! md:mb-12! lg:mb-18!"
              fullWidth={true}
            />

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-cormorant font-bold text-2xl md:text-3xl text-primary-foreground">
                Start from $150.00
              </h3>
            </div>

            <hr />
            <br />

            {/* Add-ons & Premium Features */}
            <div className="mb-8 pr-0 lg:pr-24">
              <h4 className="font-cormorant font-semibold text-2xl text-primary-foreground mb-4">
                Add-ons & Premium Features:
              </h4>
              <ul className="font-sans space-y-2 mb-10">
                {addOnsFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">•</span>
                    <p className="text-sm text-primary-foreground/80">
                      <span className="font-semibold text-primary-foreground">
                        {item.title}
                      </span>{" "}
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
              <Button
                text="Get Started Now"
                className="w-full md:w-full border-primary-foreground/50 text-md font-cormorant "
                type="button"
                textColor="text-primary-foreground"
                borderColor="border-primary-foreground"
                backgroundColor="bg-transparent"
                hoverBgColor="hover:bg-primary-foreground"
                hoverTextColor="hover:text-white"
                navigateTo="/create-your-book/stepfour"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
