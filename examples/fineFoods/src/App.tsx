import { Refine, Resource } from "@pankod/refine";
import "styles/antd.less";
import jsonServerDataProvider from "@pankod/refine-json-server";
import { authProvider } from "authProvider";
import { DashbaordPage } from "./pages/dashboard";
import { OrderList } from "./pages/orders";
import { UserList } from "./pages/users";
import { useTranslation } from "react-i18next";
import { Header, Title } from "components";
import "i18n";

const App: React.FC = () => {
    const API_URL = "https://api.finefoods.refine.dev";
    const dataProvider = jsonServerDataProvider(API_URL);

    const { t, i18n } = useTranslation();

    const i18nProvider = {
        translate: (key: string, params: object) => t(key, params),
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    };

    return (
        <Refine
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            Header={Header}
            Title={Title}
            DashboardPage={DashbaordPage}
        >
            <Resource
                options={{
                    label: t("orders:title"),
                }}
                name="orders"
                list={OrderList}
            />
            <Resource
                options={{
                    label: t("users:title"),
                }}
                name="users"
                list={UserList}
            />
            <Resource
                options={{
                    label: t("products:title"),
                }}
                name="products"
            />
            <Resource name="stores" />
        </Refine>
    );
};

export default App;
