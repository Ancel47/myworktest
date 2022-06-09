import { Client } from "../client";
import { ISession } from "../interfaces";

class Auth {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async login(data: {
        email?: string;
        password?: string;
        provider?: string;
    }): Promise<ISession | void> {
        const { email, password, provider } = data;
        if (email && password) {
            return await this.client.call({
                method: "post",
                url: "/auth/login",
                data: {
                    email,
                    password,
                },
            });
        }

        if (provider) {
            const baseUrl = this.client.getBaseUrl();
            const clientId = this.client.getClientId();

            return window.location.replace(
                `${baseUrl}/oauth/${provider}?applicationClientId=${clientId}`,
            );
        }
    }

    async register(data: {
        name: string;
        email: string;
        password: string;
    }): Promise<ISession> {
        return await this.client.call({
            method: "post",
            url: "/auth/register",
            data,
        });
    }

    async getSessionByToken(token: string): Promise<ISession> {
        return await this.client.call({
            method: "get",
            url: "/auth/me",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async session(): Promise<ISession> {
        return await this.client.call({
            method: "get",
            url: "/auth/me",
        });
    }

    async getSessionFromUrl(): Promise<void> {
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get("accessToken");
        const refreshToken = urlParams.get("refreshToken");

        if (accessToken && refreshToken) {
            window.localStorage.setItem("refine-sdk-access-token", accessToken);
            window.localStorage.setItem(
                "refine-sdk-refresh-token",
                refreshToken,
            );
        }
    }

    async logout(): Promise<void> {
        window.localStorage.removeItem("refine-sdk-access-token");
        window.localStorage.removeItem("refine-sdk-refresh-token");
    }
}

export { Auth };
