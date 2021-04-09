import React from "react";
import { render } from "@test";

import { userFriendlySecond } from "@definitions";
import { NotificationProgress } from "./";

const notificationDispatch = jest.fn();

const mockNotifications = {
    id: "1",
    resource: "posts",
    cancelMutation: () => Promise.resolve(),
    seconds: 5000,
    isRunning: true,
};

jest.useFakeTimers();

describe("Cancel Notification", () => {
    it("should render cancel notification successfully", () => {
        const { getByText } = render(
            <NotificationProgress
                dispatch={notificationDispatch}
                notificationItem={mockNotifications}
            />,
        );
        const formattedSeconds = userFriendlySecond(mockNotifications.seconds);

        getByText(formattedSeconds.toString());
        expect(notificationDispatch).not.toBeCalled();
    });

    it("should render cancel notification successfully", () => {
        render(
            <NotificationProgress
                dispatch={notificationDispatch}
                notificationItem={mockNotifications}
            />,
        );

        jest.runAllTimers();

        expect(notificationDispatch).toBeCalled();
    });
});
