import React, { FC, useRef } from "react";
import Table from "ink-table";
import { Box, Text, TextProps } from "ink";
import { RefinePackageInstalledVersionData } from "src/interfaces";

const columIndex = {
    name: 1,
    current: 2,
    wanted: 3,
    latest: 4,
};

const LAST_COLUMN_INDEX = 4;

const getVersions = (text: string) => {
    const versions = text.split(".");
    return {
        major: versions[0],
        minor: versions[1],
        patch: versions[2],
    };
};

const getColorsByVersionDiffrence = (
    installedVersion: ReturnType<typeof getVersions>,
    nextVersion: ReturnType<typeof getVersions>,
) => {
    const isMajorDiffrence =
        installedVersion.major.trim() !== nextVersion.major.trim();

    if (isMajorDiffrence)
        return {
            major: "red",
            minor: "red",
            patch: "red",
        };

    const isMinorDiffrence =
        installedVersion.minor.trim() !== nextVersion.minor.trim();

    if (isMinorDiffrence)
        return {
            major: "white",
            minor: "yellow",
            patch: "yellow",
        };

    const isPatchDiffrence =
        installedVersion.patch.trim() !== nextVersion.patch.trim();
    if (isPatchDiffrence)
        return {
            major: "white",
            minor: "white",
            patch: "green",
        };

    return {
        major: "white",
        minor: "white",
        patch: "white",
    };
};

interface UpdateWarningTableProps {
    data: RefinePackageInstalledVersionData[];
}

const UpdateWarningTable: FC<UpdateWarningTableProps> = ({ data }) => {
    const cellIndex = useRef(1);
    const packageIndex = useRef(0);

    return (
        <Box width={"100%"} flexDirection="column">
            <Box flexDirection="column" justifyContent="center">
                <Text>
                    <Text color="red">X</Text>.<Text color="yellow">Y</Text>.
                    <Text color="green">Z</Text>
                </Text>
                <Box>
                    <Text color="red">{"<red>"}</Text>
                    <Text>
                        {"    "}:Major Update backward-incompatible updates
                    </Text>
                </Box>
                <Box>
                    <Text color="yellow">{"<yellow>"}</Text>
                    <Text> :Minor Update backward-compatible features</Text>
                </Box>
                <Box>
                    <Text color="green">{"<green>"}</Text>
                    <Text>{"  "}:Patch Update backward-compatible fixes</Text>
                </Box>
            </Box>
            <Box alignItems="center" flexDirection="column" marginTop={1}>
                <Text>Update Available</Text>
                <Table
                    data={data}
                    cell={(props) => {
                        let TextComponent: JSX.Element = (
                            <Text>{props.children}</Text>
                        );

                        const text = props.children?.toString();
                        if (!text) return TextComponent;

                        const installedVersion = getVersions(
                            data[packageIndex.current].current,
                        );

                        if (cellIndex.current === columIndex.wanted) {
                            const wantedVersion = getVersions(text);

                            const colors = getColorsByVersionDiffrence(
                                installedVersion,
                                wantedVersion,
                            );

                            TextComponent = (
                                <VersionText
                                    major={{
                                        color: colors.major,
                                        text: wantedVersion.major,
                                    }}
                                    minor={{
                                        color: colors.minor,
                                        text: wantedVersion.minor,
                                    }}
                                    patch={{
                                        color: colors.patch,
                                        text: wantedVersion.patch,
                                    }}
                                />
                            );
                        }

                        if (cellIndex.current === columIndex.latest) {
                            const latestVersion = getVersions(text);

                            const colors = getColorsByVersionDiffrence(
                                installedVersion,
                                latestVersion,
                            );

                            TextComponent = (
                                <VersionText
                                    major={{
                                        color: colors.major,
                                        text: latestVersion.major,
                                    }}
                                    minor={{
                                        color: colors.minor,
                                        text: latestVersion.minor,
                                    }}
                                    patch={{
                                        color: colors.patch,
                                        text: latestVersion.patch,
                                    }}
                                />
                            );
                        }

                        if (cellIndex.current === LAST_COLUMN_INDEX) {
                            packageIndex.current += 1;
                            cellIndex.current = 1;
                        } else {
                            cellIndex.current += 1;
                        }

                        return TextComponent;
                    }}
                />
                <Text>
                    To upgrade <Text bold>`refine`</Text> packages with the
                    latest version
                </Text>
                <Text>
                    Run to following command{" "}
                    <Text color="yellow">`refine upgrade`</Text>
                </Text>
            </Box>
        </Box>
    );
};

const VersionText = ({
    major,
    minor,
    patch,
}: {
    major: { text: string; color: TextProps["color"] };
    minor: { text: string; color: TextProps["color"] };
    patch: { text: string; color: TextProps["color"] };
}) => {
    return (
        <Text>
            <Text color={major.color}>{major.text}</Text>
            <Text color={minor.color}>.{minor.text}.</Text>
            <Text color={patch.color}>{patch.text}</Text>
        </Text>
    );
};

export default UpdateWarningTable;
