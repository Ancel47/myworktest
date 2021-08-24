import React from "react";

import styles from "./styles.module.css";

const backends = [
    {
        src: "/icons/backends/nodejs.png",
        srcset: "/icons/backends/nodejs@2x.png 768w",
        alt: "nodejs",
    },
    {
        src: "/icons/backends/java.png",
        srcset: "/icons/backends/java@2x.png 768w",
        alt: "java",
    },
    {
        src: "/icons/backends/dotnet.png",
        srcset: "/icons/backends/dotnet@2x.png 768w",
        alt: "dotnet",
    },
    {
        src: "/icons/backends/strapi.png",
        srcset: "/icons/backends/strapi@2x.png 768w",
        alt: "strapi",
    },
    {
        src: "/icons/backends/airtable.png",
        srcset: "/icons/backends/airtable@2x.png 768w",
        alt: "airtable",
    },
    {
        src: "/icons/backends/json-api.png",
        srcset: "/icons/backends/json-api@2x.png 768w",
        alt: "json-api",
    },
    {
        src: "/icons/backends/nest.png",
        srcset: "/icons/backends/nest@2x.png 768w",
        alt: "nest",
    },
    {
        src: "/icons/backends/python.png",
        srcset: "/icons/backends/python@2x.png 768w",
        alt: "python",
    },
];

const features = [
    {
        src: "/icons/features/zero.png",
        srcset: "/icons/features/zero@2x.png 768w",
        title: "Zero-configuration",
        description:
            "One-line setup with superplate. It takes less than a minute to start a project.",
    },
    {
        src: "/icons/features/decoupled.png",
        srcset: "/icons/features/decoupled@2x.png 768w",
        title: "Decoupled UI",
        description:
            "UI components are exposed directly without encapsulation. You have full control on UI elements.",
    },
    {
        src: "/icons/features/box.png",
        srcset: "/icons/features/box@2x.png 768w",
        title: "Out-of-the-box",
        description:
            "Routing, networking, authentication, state management, i18n and UI.",
    },
    {
        src: "/icons/features/powerful.png",
        srcset: "/icons/features/powerful@2x.png 768w",
        title: "Powerful Default UI",
        description:
            "Works seamlessly with integrated Ant Design System. (Support for multiple UI frameworks is on the Roadmap)",
    },
    {
        src: "/icons/features/native.png",
        srcset: "/icons/features/native@2x.png 768w",
        title: "Native Typescript Core",
        description: "You can always opt out for plain Javascript.",
    },
    {
        src: "/icons/features/boilerplate.png",
        srcset: "/icons/features/boilerplate@2x.png 768w",
        title: "Boilerplate-free Code",
        description: "Keeps your codebase clean and readable.",
    },
];

export const KeyFeatures = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.mainTitle}>Backend Agnostic</h2>
                <p className={styles.description}>
                    <strong>Connects to any custom backend.</strong> <br />
                    Built-in support for REST API, Strapi, NextJS and Airtable.
                </p>
                <div className="row row--justify--center">
                    <div className="col col--8">
                        <div className={styles.supportContainer}>
                            {backends.map(({ srcset, src, alt }, index) => (
                                <img
                                    key={index}
                                    srcSet={srcset}
                                    src={src}
                                    alt={alt}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col col--10">
                        <h2 className={styles.mainFeatureTitle}>
                            Other key features
                        </h2>
                        <div className={styles.featuresContainer}>
                            {features.map(
                                (
                                    { srcset, src, title, description },
                                    index,
                                ) => (
                                    <div className={styles.feature} key={index}>
                                        <img
                                            srcSet={srcset}
                                            src={src}
                                            alt={title}
                                        />
                                        <div>
                                            <p className={styles.featureTitle}>
                                                {title}
                                            </p>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
