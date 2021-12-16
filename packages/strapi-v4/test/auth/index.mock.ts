import nock from "nock";

nock("http://localhost:1337", { encodedQueryParams: true })
    .post("/api/auth/local", {
        identifier: "demo@refine.dev",
        password: "demodemo",
    })
    .reply(
        200,
        {
            jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NDgxNjgzLCJleHAiOjE2NDIwNzM2ODN9.yqfuYb-Mr7I_VDxd2pe6elDROGiA6vqvChY_xNIIPu8",
            user: {
                id: 1,
                username: "demo@refine.dev",
                email: "demo@refine.dev",
                provider: "local",
                confirmed: true,
                blocked: false,
                createdAt: "2021-12-13T09:19:29.694Z",
                updatedAt: "2021-12-13T09:19:29.694Z",
            },
        },
        [
            "Content-Security-Policy",
            "connect-src 'self' https:;img-src 'self' data: blob:;media-src 'self' data: blob:;default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline'",
            "X-DNS-Prefetch-Control",
            "off",
            "Expect-CT",
            "max-age=0",
            "X-Frame-Options",
            "SAMEORIGIN",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Download-Options",
            "noopen",
            "X-Content-Type-Options",
            "nosniff",
            "X-Permitted-Cross-Domain-Policies",
            "none",
            "Referrer-Policy",
            "no-referrer",
            "Vary",
            "Origin",
            "X-RateLimit-Limit",
            "10",
            "X-RateLimit-Remaining",
            "8",
            "X-RateLimit-Reset",
            "1639481722",
            "Content-Type",
            "application/json; charset=utf-8",
            "X-Powered-By",
            "Strapi <strapi.io>",
            "Content-Length",
            "348",
            "Date",
            "Tue, 14 Dec 2021 11:34:43 GMT",
            "Connection",
            "close",
        ],
    );

nock("http://localhost:1337", { encodedQueryParams: true })
    .get("/api/users/me")
    .reply(
        200,
        {
            id: 1,
            username: "demo@refine.dev",
            email: "demo@refine.dev",
            provider: "local",
            confirmed: true,
            blocked: false,
            createdAt: "2021-12-13T09:19:29.694Z",
            updatedAt: "2021-12-13T09:19:29.694Z",
        },
        [
            "Content-Security-Policy",
            "connect-src 'self' https:;img-src 'self' data: blob:;media-src 'self' data: blob:;default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline'",
            "X-DNS-Prefetch-Control",
            "off",
            "Expect-CT",
            "max-age=0",
            "X-Frame-Options",
            "SAMEORIGIN",
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
            "X-Download-Options",
            "noopen",
            "X-Content-Type-Options",
            "nosniff",
            "X-Permitted-Cross-Domain-Policies",
            "none",
            "Referrer-Policy",
            "no-referrer",
            "Vary",
            "Origin",
            "Content-Type",
            "application/json; charset=utf-8",
            "X-Powered-By",
            "Strapi <strapi.io>",
            "Content-Length",
            "193",
            "Date",
            "Tue, 14 Dec 2021 11:37:10 GMT",
            "Connection",
            "close",
        ],
    );
