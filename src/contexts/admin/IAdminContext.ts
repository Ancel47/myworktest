import { MutationMode } from "@interfaces";

export interface IAdminContext {
    mutationMode: MutationMode;
    warnWhenUnsavedChanges: boolean;
    warnWhen: boolean;
    setWarnWhen: (value: boolean) => void;
}
