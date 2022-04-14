import { ReactNode } from "react";

export * from "./components";
export * from "./hooks";

export {
    IAuthContext as AuthProvider,
    Pagination,
    IDataContextProvider as DataProvider,
    ILiveContext as LiveProvider,
    LiveEvent,
    ITranslationContext as TranslationProvider,
    IAccessControlContext as AccessControlProvider,
    INotificationContext as NotificationProvider,
    I18nProvider,
    MutationMode,
    IResourceComponents,
    IResourceComponentsProps,
    ILoginForm,
    HttpError,
    LayoutProps,
    TitleProps,
    CrudFilter,
    CrudFilters,
    LogicalFilter,
    ConditionalFilter,
    CrudOperators,
    CrudSorting,
    CrudSort,
    GetListResponse,
    GetOneResponse,
    GetManyResponse,
    CreateResponse,
    CreateManyResponse,
    UpdateManyResponse,
    UpdateResponse,
    DeleteOneResponse,
    DeleteManyResponse,
    CanParams,
    CanReturnType,
    CustomResponse,
    SuccessErrorNotification,
    IRouterProvider,
    PromptProps,
    ResourceRouterParams,
    IResourceItem,
    BaseRecord,
    BaseKey,
    Option,
    LiveModeProps,
    MetaDataQuery,
    RedirectionTypes,
    MapDataFn,
    OpenNotificationParams,
    ResourceErrorRouterParams,
    ITreeMenu,
    IQueryKeys,
} from "./interfaces";

export {
    parseTableParams,
    parseTableParamsFromQuery,
    stringifyTableParams,
    unionFilters,
    setInitialFilters,
    unionSorters,
    setInitialSorters,
} from "./definitions/table";
export {
    userFriendlyResourceName,
    importCSVMapper,
    handleUseParams,
    routeGenerator,
    createTreeView,
} from "./definitions/helpers";
export { file2Base64 } from "./definitions/upload";

declare module "react-query/types/react/QueryClientProvider" {
    interface QueryClientProviderProps {
        children?: ReactNode;
    }
}
