import nock from "nock";
import zlib from "zlib";

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .post("/v1/account/sessions/anonymous", {})
  .reply(
    201,
    [
      zlib.gzipSync(
        JSON.stringify({
          $id: "63247a00793032289011",
          $createdAt: "2022-09-16T13:28:32.501+00:00",
          userId: "63247a0077f6abb12739",
          expire: "2023-09-16T13:28:32.496+00:00",
          provider: "anonymous",
          providerUid: "",
          providerAccessToken: "",
          providerAccessTokenExpiry: "",
          providerRefreshToken: "",
          ip: "159.146.41.20",
          osCode: "",
          osName: "",
          osVersion: "",
          clientType: "library",
          clientCode: "",
          clientName: "Node Fetch",
          clientVersion: "1.0",
          clientEngine: "",
          clientEngineVersion: "",
          deviceName: "",
          deviceBrand: "",
          deviceModel: "",
          countryCode: "tr",
          countryName: "Turkey",
          current: true,
        }),
      ),
    ],
    [
      "Access-Control-Allow-Credentials",
      "true",
      "Access-Control-Allow-Headers",
      "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-Appwrite-ID, Content-Range, Range, Cache-Control, Expires, Pragma",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin",
      "https://localhost",
      "Access-Control-Expose-Headers",
      "X-Fallback-Cookies",
      "Content-Encoding",
      "gzip",
      "Content-Length",
      "301",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:28:32 GMT",
      "Server",
      "Appwrite",
      "Set-Cookie",
      "a_session_6324555073b9706cb1f5_legacy=eyJpZCI6IjYzMjQ3YTAwNzdmNmFiYjEyNzM5Iiwic2VjcmV0IjoiYjIzZmJhMzEzZDM0YTQ3NDgzMDVhMTU0YWJmZWQzZWNiYmEwYWMyOGQ5MzZlMmJjNTNlYTFhMjgxMjcyOWE0OWY2YzcwNzJhZTI5NzhlZGQzMTEwMTkzYzM4ZDRjMjIxOTQ5ZmUwM2M0YTlmNDgwZGIxMzVlM2I5ODA4ZjMxYjgzODEzYzBjNGYyZTQxZjVkODEwMzVmZDY1MmU4ZDc4MmEwYTc2YjA0OTI4NzdhNWEyMmI2NjFmY2JlMDZlNDkyMzJkNmYzNzcyNjkyNjI1MWU1MDM4NDMxMGNiMmMyNjY2MjUwOGMwYzVjNzQwZGU4NDdkN2M3ZWZmMTZlOGU3OSJ9; expires=Sat, 16-Sep-2023 13:28:32 GMT; path=/; domain=.matej10qa.appwrite.org; secure; httponly",
      "Set-Cookie",
      "a_session_6324555073b9706cb1f5=eyJpZCI6IjYzMjQ3YTAwNzdmNmFiYjEyNzM5Iiwic2VjcmV0IjoiYjIzZmJhMzEzZDM0YTQ3NDgzMDVhMTU0YWJmZWQzZWNiYmEwYWMyOGQ5MzZlMmJjNTNlYTFhMjgxMjcyOWE0OWY2YzcwNzJhZTI5NzhlZGQzMTEwMTkzYzM4ZDRjMjIxOTQ5ZmUwM2M0YTlmNDgwZGIxMzVlM2I5ODA4ZjMxYjgzODEzYzBjNGYyZTQxZjVkODEwMzVmZDY1MmU4ZDc4MmEwYTc2YjA0OTI4NzdhNWEyMmI2NjFmY2JlMDZlNDkyMzJkNmYzNzcyNjkyNjI1MWU1MDM4NDMxMGNiMmMyNjY2MjUwOGMwYzVjNzQwZGU4NDdkN2M3ZWZmMTZlOGU3OSJ9; expires=Sat, 16-Sep-2023 13:28:32 GMT; path=/; domain=.matej10qa.appwrite.org; secure; httponly; samesite=None",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.023688077926636",
      "X-Fallback-Cookies",
      '{"a_session_6324555073b9706cb1f5":"eyJpZCI6IjYzMjQ3YTAwNzdmNmFiYjEyNzM5Iiwic2VjcmV0IjoiYjIzZmJhMzEzZDM0YTQ3NDgzMDVhMTU0YWJmZWQzZWNiYmEwYWMyOGQ5MzZlMmJjNTNlYTFhMjgxMjcyOWE0OWY2YzcwNzJhZTI5NzhlZGQzMTEwMTkzYzM4ZDRjMjIxOTQ5ZmUwM2M0YTlmNDgwZGIxMzVlM2I5ODA4ZjMxYjgzODEzYzBjNGYyZTQxZjVkODEwMzVmZDY1MmU4ZDc4MmEwYTc2YjA0OTI4NzdhNWEyMmI2NjFmY2JlMDZlNDkyMzJkNmYzNzcyNjkyNjI1MWU1MDM4NDMxMGNiMmMyNjY2MjUwOGMwYzVjNzQwZGU4NDdkN2M3ZWZmMTZlOGU3OSJ9"}',
      "X-Ratelimit-Limit",
      "50",
      "X-Ratelimit-Remaining",
      "33",
      "X-Ratelimit-Reset",
      "1663336800",
      "Connection",
      "close",
    ],
  );

nock("https://matej10qa.appwrite.org:443", { encodedQueryParams: true })
  .get(
    "/v1/databases/632455a0b8d017403ce9/collections/632455a55dc72e1aa016/documents/632456bf1eeb69a71a78",
  )
  .reply(
    200,
    [
      zlib.gzipSync(
        JSON.stringify({
          title: "test",
          description: "test desc",
          $id: "632456bf1eeb69a71a78",
          $createdAt: "2022-09-16T10:58:07.126+00:00",
          $updatedAt: "2022-09-16T10:58:07.126+00:00",
          $permissions: [],
          $collectionId: "632455a55dc72e1aa016",
          $databaseId: "632455a0b8d017403ce9",
        }),
      ),
    ],
    [
      "Access-Control-Allow-Credentials",
      "true",
      "Access-Control-Allow-Headers",
      "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-Appwrite-ID, Content-Range, Range, Cache-Control, Expires, Pragma",
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin",
      "https://localhost",
      "Access-Control-Expose-Headers",
      "X-Fallback-Cookies",
      "Content-Encoding",
      "gzip",
      "Content-Length",
      "178",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Fri, 16 Sep 2022 13:28:32 GMT",
      "Server",
      "Appwrite",
      "X-Content-Type-Options",
      "nosniff",
      "X-Debug-Fallback",
      "true",
      "X-Debug-Speed",
      "0.0025720596313477",
      "Connection",
      "close",
    ],
  );
