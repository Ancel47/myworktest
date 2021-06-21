import React from "react";
import { QueryObserverOptions } from "react-query";
import { MutationMode, TitleProps, LayoutProps } from "../../interfaces";

export interface IRefineContext {
    hasDashboard: boolean;
    warnWhen: boolean;
    setWarnWhen: (value: boolean) => void;
    mutationMode: MutationMode;
    warnWhenUnsavedChanges: boolean;
    syncWithLocation: boolean;
    undoableTimeout: number;
    Title: React.FC<TitleProps>;
    Layout: React.FC<LayoutProps>;
    Sider: React.FC;
    Header: React.FC;
    Footer: React.FC;
    OffLayoutArea: React.FC;
    reactQueryClientConfig: QueryObserverOptions;
}

export interface IRefineContextProvider {
    hasDashboard: boolean;
    mutationMode: MutationMode;
    warnWhenUnsavedChanges: boolean;
    syncWithLocation: boolean;
    undoableTimeout: number;
    Title?: React.FC<TitleProps>;
    Layout?: React.FC<LayoutProps>;
    Sider?: React.FC;
    Header?: React.FC;
    Footer?: React.FC;
    OffLayoutArea?: React.FC;
    reactQueryClientConfig?: QueryObserverOptions;
}
