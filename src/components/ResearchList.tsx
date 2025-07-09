"use client";

import Bilicho from "@data/bilicho.json";
import EyezonReport from "@data/eyezon-report.json";
import NlpReport from "@data/npl-report.json";
import MyGerd from "@data/my-gerd.json";
import Research, { iResearch } from "./common/Research";

const ResearchList = ({
  research,
  showAll = true,
  showTitle = true,
}: {
  research?: iResearch;
  showAll?: boolean;
  showTitle?: boolean;
}) => {
  const researches = [Bilicho, EyezonReport, NlpReport, MyGerd];
  const maxItems = 3;

  return (
    <div className="relative px-4 md:px-10 lg:px-24">
      <div className="mx-auto max-w-screen-2xl py-10 lg:py-20">
        {showTitle && (
          <h2
            className={`text-gray-1 mx-auto max-w-md text-center text-xl leading-snug font-bold lg:max-w-none lg:text-5xl ${
              showTitle ? "mb-10 lg:mb-24" : "mb-0"
            }`}
          >
            With a{" "}
            <span className="text-green-1 pulse-glow-animation">growing</span>{" "}
            collection of research projects and collaborations, this is where
            Chapa shapes the future.
          </h2>
        )}
        <div className="grid grid-cols-1 gap-x-5 gap-y-15 sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-20">
          {researches
            .filter((r) => r.id !== research?.id)
            .slice(0, showAll ? undefined : maxItems)
            .map((research, i) => (
              <Research
                key={research.id}
                {...research}
                title={`${researches.length < 10 ? "0" : ""}${i + 1} ${
                  research.title
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchList;
