import React from "react";
import { SectionHero } from "./section-hero";
import { SectionFreeStart } from "./section-free-start";
import { SectionBullets } from "./section-bullets";
import { SectionNoConstraints } from "./section-no-constraints";
import { SectionUseCase } from "./section-use-case";

export const Landing: React.FC = () => {
    return (
        <main id="landing_main">
            <div className="hidden lg:block snap-start" />
            <SectionHero />
            <SectionFreeStart />
            <SectionBullets />
            <SectionNoConstraints />
            <SectionUseCase />
        </main>
    );
};
