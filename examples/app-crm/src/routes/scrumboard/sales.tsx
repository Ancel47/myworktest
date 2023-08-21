import { useMemo } from "react";
import {
    useCreate,
    useDelete,
    useList,
    useUpdate,
    useUpdateMany,
} from "@refinedev/core";
import { DragEndEvent } from "@dnd-kit/core";
import { DeleteOutlined, EditOutlined, ClearOutlined } from "@ant-design/icons";
import { Deal, DealStage } from "../../interfaces/graphql";
import { DealKanbanCardMemo, FullScreenLoading, Text } from "../../components";
import {
    KanbanBoard,
    KanbanColumnMemo,
    KanbanItem,
    KanbanAddStageButton,
    KanbanAddCardButton,
} from "../../components/kanban";
import { currencyNumber } from "../../utilities";
import { MenuProps } from "antd";
import { DealKanbanWonLostDrop } from "../../components/deal-kanban-won-lost-drop";

const dealsFragment = [
    "id",
    "title",
    "value",
    "createdAt",
    {
        company: ["id", "name"],
    },
    {
        dealOwner: ["id", "name"],
    },
];

export const SalesPage = () => {
    const { data: unassignedStage, isLoading: isLoadingUnassignedStage } =
        useList<Deal>({
            resource: "stages",
            pagination: {
                mode: "off",
            },
            filters: [
                {
                    field: "stage.id",
                    operator: "null",
                    value: null,
                },
            ],
            meta: {
                operation: "deals",
                fields: dealsFragment,
            },
        });

    const { data: dealStages, isLoading: isLoadingDealStages } =
        useList<DealStage>({
            resource: "stages",
            pagination: {
                mode: "off",
            },
            meta: {
                operation: "dealStages",
                fields: [
                    "id",
                    "title",
                    {
                        dealsAggregate: [
                            {
                                sum: ["value"],
                            },
                        ],
                    },
                    {
                        deals: dealsFragment,
                    },
                ],
            },
        });

    const { mutate: updateDeal } = useUpdate();
    const { mutate: updateManyDeal } = useUpdateMany();
    const { mutate: createStage } = useCreate();
    const { mutate: deleteStage } = useDelete();

    const { unassignedStageTotalValue } = useMemo(() => {
        let unassignedStageTotalValue = 0;

        unassignedStage?.data?.forEach((deal) => {
            unassignedStageTotalValue += deal.value || 0;
        });

        return {
            unassignedStageTotalValue,
        };
    }, [unassignedStage]);

    const { allStages, stageLost, stageWon } = useMemo(() => {
        if (!dealStages?.data) {
            return {
                stageWon: null,
                stageLost: null,
                allStages: [],
            };
        }

        const won = dealStages?.data.find((stage) => stage.title === "WON");
        const lost = dealStages?.data.find((stage) => stage.title === "LOST");

        return {
            stageWon: won,
            stageLost: lost,
            allStages: dealStages?.data.filter(
                (stage) => stage.title !== "WON" && stage.title !== "LOST",
            ),
        };
    }, [dealStages]);

    const handleOnDragEnd = (event: DragEndEvent) => {
        let stageId = event.over?.id as undefined | string | null;
        const dealId = event.active.id;
        const dealStageId = event.active.data.current?.stageId;

        if (dealStageId === stageId) {
            return;
        }

        if (stageId === "won") {
            stageId = stageWon?.id;
        }

        if (stageId === "lost") {
            stageId = stageLost?.id;
        }

        if (stageId === "unassigned") {
            stageId = null;
        }

        updateDeal({
            resource: "stages",
            meta: {
                operation: "deal",
            },
            id: dealId,
            values: {
                stageId: stageId,
            },
            successNotification: false,
        });
    };

    const handleAddStage = () => {
        const title = prompt("Enter stage title");
        createStage({
            resource: "stages",
            meta: {
                operation: "dealStage",
            },
            values: {
                title,
            },
        });
    };

    const handleEditStage = (args: { stageId: string }) => {
        alert("not implemented [stageId]: " + args.stageId);
    };

    const handleDeleteStage = (args: { stageId: string }) => {
        deleteStage({
            resource: "stages",
            meta: {
                operation: "dealStage",
            },
            id: args.stageId,
        });
    };

    const handleAddCard = (args: { stageId: string }) => {
        alert("not implemented [stageId]: " + args.stageId);
    };

    const handleClearCards = (args: { dealsIds: string[] }) => {
        updateManyDeal({
            resource: "stages",
            meta: {
                operation: "deals",
            },
            ids: args.dealsIds,
            values: {
                stageId: null,
            },
            successNotification: false,
        });
    };

    const getContextMenuItems = ({ column }: { column: DealStage }) => {
        const hasItems = column.deals.length > 0;

        const items: MenuProps["items"] = [
            {
                label: "Edit status",
                key: "1",
                icon: <EditOutlined />,
                onClick: () => handleEditStage({ stageId: column.id }),
            },
            {
                label: "Clear all cards",
                key: "2",
                icon: <ClearOutlined />,
                disabled: !hasItems,
                onClick: () =>
                    handleClearCards({
                        dealsIds: column.deals.map((deal) => deal.id),
                    }),
            },
            {
                danger: true,
                label: "Delete status",
                key: "3",
                icon: <DeleteOutlined />,
                disabled: hasItems,
                onClick: () => handleDeleteStage({ stageId: column.id }),
            },
        ];

        return items;
    };

    const loading = isLoadingDealStages || isLoadingUnassignedStage;

    if (loading) {
        return <FullScreenLoading />;
    }

    return (
        <KanbanBoard onDragEnd={handleOnDragEnd}>
            <KanbanColumnMemo
                id={"unassigned"}
                title={"unassigned"}
                count={unassignedStage?.data?.length || 0}
                description={
                    <Text size="md" disabled={unassignedStageTotalValue === 0}>
                        {currencyNumber(unassignedStageTotalValue)}
                    </Text>
                }
                onAddClick={() => handleAddCard({ stageId: "unassigned" })}
            >
                {unassignedStage?.data?.map((deal) => {
                    return (
                        <KanbanItem
                            key={deal.id}
                            id={deal.id}
                            data={{ ...deal, stageId: "unassigned" }}
                        >
                            <DealKanbanCardMemo
                                id={deal.id}
                                key={deal.id}
                                title={deal.title}
                                company={{ name: deal.company.name }}
                                user={{ name: deal.dealOwner.name }}
                                date={deal.createdAt}
                                price={currencyNumber(deal.value || 0)}
                            />
                        </KanbanItem>
                    );
                })}
                {!unassignedStage?.data?.length && (
                    <KanbanAddCardButton
                        onClick={() => handleAddCard({ stageId: "unassigned" })}
                    />
                )}
            </KanbanColumnMemo>
            {allStages.map((column) => {
                const sum = column.dealsAggregate?.[0]?.sum?.value || 0;
                const contextMenuItems = getContextMenuItems({ column });

                return (
                    <KanbanColumnMemo
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        description={
                            <Text size="md" disabled={sum === 0}>
                                {currencyNumber(sum)}
                            </Text>
                        }
                        count={column.deals.length}
                        contextMenuItems={contextMenuItems}
                        onAddClick={() => handleAddCard({ stageId: column.id })}
                    >
                        {column.deals.map((deal) => {
                            return (
                                <KanbanItem
                                    key={deal.id}
                                    id={deal.id}
                                    data={{ ...deal, stageId: column.id }}
                                >
                                    <DealKanbanCardMemo
                                        id={deal.id}
                                        key={deal.id}
                                        title={deal.title}
                                        company={{ name: deal.company.name }}
                                        user={{ name: deal.dealOwner.name }}
                                        date={deal.createdAt}
                                        price={currencyNumber(deal.value || 0)}
                                    />
                                </KanbanItem>
                            );
                        })}
                        {!column.deals.length && (
                            <KanbanAddCardButton
                                onClick={() =>
                                    handleAddCard({ stageId: column.id })
                                }
                            />
                        )}
                    </KanbanColumnMemo>
                );
            })}
            <KanbanAddStageButton onClick={handleAddStage} />
            {stageWon && (
                <KanbanColumnMemo
                    key={stageWon.id}
                    id={stageWon.id}
                    title={stageWon.title}
                    description={
                        <Text
                            size="md"
                            disabled={
                                stageWon.dealsAggregate?.[0]?.sum?.value === 0
                            }
                        >
                            {currencyNumber(
                                stageWon.dealsAggregate?.[0]?.sum?.value || 0,
                            )}
                        </Text>
                    }
                    count={stageWon.deals.length}
                    variant="solid"
                >
                    {stageWon.deals.map((deal) => {
                        return (
                            <KanbanItem
                                key={deal.id}
                                id={deal.id}
                                data={{ ...deal, stageId: stageWon.id }}
                            >
                                <DealKanbanCardMemo
                                    id={deal.id}
                                    key={deal.id}
                                    title={deal.title}
                                    company={{ name: deal.company.name }}
                                    user={{ name: deal.dealOwner.name }}
                                    date={deal.createdAt}
                                    price={currencyNumber(deal.value || 0)}
                                    variant="won"
                                />
                            </KanbanItem>
                        );
                    })}
                </KanbanColumnMemo>
            )}
            {stageLost && (
                <KanbanColumnMemo
                    key={stageLost.id}
                    id={stageLost.id}
                    title={stageLost.title}
                    description={
                        <Text
                            size="md"
                            disabled={
                                stageLost.dealsAggregate?.[0]?.sum?.value === 0
                            }
                        >
                            {currencyNumber(
                                stageLost.dealsAggregate?.[0]?.sum?.value || 0,
                            )}
                        </Text>
                    }
                    count={stageLost.deals.length}
                    variant="solid"
                >
                    {stageLost.deals.map((deal) => {
                        return (
                            <KanbanItem
                                key={deal.id}
                                id={deal.id}
                                data={{ ...deal, stageId: stageLost.id }}
                            >
                                <DealKanbanCardMemo
                                    id={deal.id}
                                    key={deal.id}
                                    title={deal.title}
                                    company={{ name: deal.company.name }}
                                    user={{ name: deal.dealOwner.name }}
                                    date={deal.createdAt}
                                    price={currencyNumber(deal.value || 0)}
                                    variant="lost"
                                />
                            </KanbanItem>
                        );
                    })}
                </KanbanColumnMemo>
            )}
            <DealKanbanWonLostDrop />
        </KanbanBoard>
    );
};
