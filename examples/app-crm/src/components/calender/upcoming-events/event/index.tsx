import React from "react";
import dayjs from "dayjs";

import { Text } from "../../../text";
import { Event } from "../../../../interfaces/graphql";

import styles from "./index.module.css";
import { Skeleton } from "antd";

type CalendarUpcomingEventProps = {
    item: Event;
    isLoading?: boolean;
};

export const CalendarUpcomingEvent: React.FC<CalendarUpcomingEventProps> = ({
    item,
    isLoading,
}) => {
    const { id, title, startDate, endDate, color } = item;
    const isToday = dayjs.utc(startDate).isSame(dayjs.utc(), "day");
    const isTomorrow = dayjs
        .utc(startDate)
        .isSame(dayjs.utc().add(1, "day"), "day");
    const isAllDayEvent =
        dayjs.utc(startDate).startOf("day").isSame(startDate) &&
        dayjs.utc(endDate).endOf("day").isSame(endDate);

    const renderDate = () => {
        if (isToday) {
            return `Today`;
        }

        if (isTomorrow) {
            return `Tomorrow`;
        }

        return dayjs(startDate).format("MMM DD");
    };

    const renderTime = () => {
        if (isAllDayEvent) {
            return "All day";
        }

        return `${dayjs(startDate).format("HH:mm")} - ${dayjs(endDate).format(
            "HH:mm",
        )}`;
    };

    return (
        <div key={id} className={styles.container}>
            <Skeleton
                loading={isLoading}
                active
                avatar
                paragraph={{
                    rows: 0,
                }}
                style={{
                    padding: 0,
                }}
            >
                <div className={styles.date}>
                    <span
                        className={styles.icon}
                        style={{
                            backgroundColor: color,
                        }}
                    />

                    <Text size="xs">{`${renderDate()}, ${renderTime()}`}</Text>
                </div>
                <Text strong className={styles.title}>
                    {title}
                </Text>
            </Skeleton>
        </div>
    );
};
