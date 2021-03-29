import nock from "nock";

nock("https://readmin-fake-rest.pankod.com:443", { encodedQueryParams: true })
    .get("/posts")
    .query({ _end: "10", _order: "desc", _sort: "id", _start: "0" })
    .reply(
        200,
        [
            {
                id: 1000,
                title:
                    "Omnis repellat maiores eligendi fugiat voluptatem consectetur.",
                slug: "velit-aut-quaerat",
                content:
                    "Officia pariatur fuga laudantium qui sit rerum non libero. Nemo pariatur eveniet nesciunt pariatur est rerum voluptatem. Expedita laboriosam officia rerum voluptatibus aut cum magni et ullam. Ex possimus dignissimos autem aut tempora ducimus beatae ea temporibus. Mollitia ullam aspernatur blanditiis. Laudantium reprehenderit doloribus eum dolor minus et id. Molestiae beatae amet doloribus a explicabo ut debitis consequatur. Ut sunt totam maxime quod nemo esse possimus sit ut. Officiis non aperiam autem sit repellat quia qui hic beatae. Qui animi maiores corrupti.",
                categoryId: 29,
                status: "draft",
                userId: 20,
                tags: [9, 21, 42],
                image: [],
            },
            {
                id: 999,
                title: "Quae ducimus impedit enim quis.",
                slug: "tempora-illo-quia",
                content:
                    "Odit consequatur temporibus architecto consequatur qui ipsum eveniet non. Voluptas aperiam optio a mollitia. Veritatis occaecati voluptatibus accusamus provident ex in. Ad sunt molestiae qui ipsa aut recusandae eligendi quaerat. Velit eligendi inventore nihil doloribus atque. Dolorem non vero aut. Quam vel facere nihil deserunt vel aut id nihil doloribus. Numquam magnam mollitia expedita. Qui voluptas ab exercitationem voluptatem. Dolor facilis minima molestiae animi est natus doloribus.",
                categoryId: 7,
                status: "draft",
                userId: 27,
                tags: [17, 29, 47],
                image: [],
            },
            {
                id: 998,
                title:
                    "Rem cupiditate neque quibusdam eos ipsam voluptas amet.",
                slug: "exercitationem-sequi-rerum",
                content:
                    "Ad libero praesentium harum eligendi est necessitatibus deleniti et doloribus. Animi voluptas aut mollitia enim harum officia. Non est ab consequatur. Id maiores ut et aspernatur eos placeat. Ipsam omnis libero totam et. Aliquid mollitia quis velit ducimus laboriosam. Nulla id dignissimos. Voluptatem inventore ipsum eum. A doloribus sequi quisquam et aut nam aut. Non est est animi laudantium quia est voluptates autem.",
                categoryId: 5,
                status: "active",
                userId: 44,
                tags: [10, 25, 44],
                image: [],
            },
            {
                id: 997,
                title: "Ut suscipit consequatur beatae deleniti repellat.",
                slug: "sapiente-aspernatur-aperiam",
                content:
                    "At ut omnis recusandae omnis dolor recusandae quae fugit consequatur. Rerum quisquam facilis deleniti qui id animi. Veniam sit veritatis omnis asperiores. Culpa quia cupiditate possimus. Iusto rerum minus nesciunt sed sed magni. Accusamus qui consectetur corporis quibusdam est corrupti. Tempore magnam non dolorem et pariatur. Saepe assumenda totam ratione. Architecto voluptates veniam et. Distinctio placeat soluta voluptatibus quod iure repudiandae.",
                categoryId: 5,
                status: "active",
                userId: 2,
                tags: [20, 22, 47],
                image: [],
            },
            {
                id: 996,
                title:
                    "Consequatur amet non perspiciatis architecto doloribus blanditiis.",
                slug: "perspiciatis-expedita-quo",
                content:
                    "Laborum officiis ullam culpa aut iure voluptatem. Voluptatum et qui quos. Consectetur est libero ut id corrupti non architecto repellendus. Sint provident quae dolorem impedit odio magni voluptas dolores. Recusandae et accusamus explicabo ea deleniti culpa nobis. Sed et totam doloremque repellendus qui dolorem atque dolorum illum. Saepe in aut ducimus ea perferendis repellendus. Sapiente cum minima cum dolorum numquam adipisci. Officiis dolorem cum facilis nulla dolor. Recusandae eum fuga sapiente in.",
                categoryId: 5,
                status: "draft",
                userId: 31,
                tags: [17, 37, 44],
                image: [],
            },
            {
                id: 995,
                title: "Consectetur maxime et.",
                slug: "qui-ut-voluptatibus",
                content:
                    "Ipsa ut temporibus nihil veritatis maiores. Laborum dolores eos omnis dolorum ut at quas qui nam. Corrupti dolorem perspiciatis optio exercitationem incidunt. Magni sunt ipsa. Tempora qui ut vel saepe incidunt sequi. Tempore doloribus quibusdam. Harum ipsum magnam consectetur et deserunt debitis. Accusamus deleniti adipisci quos numquam eaque possimus voluptatem omnis. Quidem cum beatae reprehenderit aut nesciunt. Quibusdam sed placeat nesciunt ut quidem quasi autem esse.",
                categoryId: 11,
                status: "draft",
                userId: 44,
                tags: [5, 33, 42],
                image: [],
            },
            {
                id: 994,
                title: "Earum corporis et eum unde recusandae et deserunt.",
                slug: "ut-debitis-aut",
                content:
                    "Consectetur at tempora excepturi assumenda quibusdam itaque voluptatem. Ab ipsam explicabo exercitationem explicabo ab minus. Quod placeat amet fugiat. Explicabo placeat nesciunt et. Qui sit aut. Qui veniam quisquam tempora et dolore numquam tenetur nemo. Ut cumque beatae excepturi quis dolorem error repudiandae reiciendis. Minima sint sit ratione officia reprehenderit officia mollitia. Et commodi temporibus sed facere sit velit aspernatur voluptas. Harum aut beatae ea dolorem.",
                categoryId: 50,
                status: "active",
                userId: 15,
                tags: [9, 37, 49],
                image: [],
            },
            {
                id: 993,
                title: "Reprehenderit similique similique.",
                slug: "nam-repellendus-ea",
                content:
                    "Voluptates quia eaque quibusdam alias dolores dolorum facere aut. Excepturi saepe est iusto suscipit id sed ratione aut aut. Iure numquam aut maxime. Deleniti doloribus sint quia nemo et. Nam illum debitis. Voluptate consequatur officia aut quasi consequuntur quia et libero. Sapiente aliquam explicabo placeat eos nulla qui est vero. Tempora aut ducimus ut est perspiciatis sed fugit facere aut. Culpa nisi dolorem et accusantium magnam. Ut omnis harum.",
                categoryId: 1,
                status: "active",
                userId: 20,
                tags: [13, 22, 48],
                image: [],
            },
            {
                id: 992,
                title: "Illo maxime tenetur vel voluptate voluptate vero.",
                slug: "repellendus-id-porro",
                content:
                    "Voluptatem nesciunt animi mollitia accusantium. Dignissimos id quo. Optio omnis occaecati eveniet hic quod voluptatibus. Architecto id quaerat voluptas dolores eum autem. Praesentium omnis quis aspernatur dignissimos. Laborum neque tenetur odio id. Voluptatum doloribus non natus. Nihil assumenda blanditiis ea. Quia aspernatur aliquam voluptas libero quas magni excepturi commodi. Praesentium a dolores provident et quis voluptatem.",
                categoryId: 7,
                status: "draft",
                userId: 9,
                tags: [2, 37, 47],
                image: [],
            },
            {
                id: 991,
                title: "Tenetur ullam consequuntur et iste.",
                slug: "voluptatem-itaque-nihil",
                content:
                    "Accusantium ex quasi voluptatem praesentium est labore quo natus quis. Et et necessitatibus ducimus. Nemo itaque expedita necessitatibus odit aliquam nihil recusandae. Quo odit ipsa voluptatum quo qui ut voluptatem. Fugit officia dolor. Eum quia sint rerum doloribus est suscipit neque minus. Nobis est nulla. Sed suscipit et ut. Est reprehenderit tenetur minus accusamus maiores aut sint. Provident ipsam perspiciatis nam sint temporibus molestiae assumenda eum reprehenderit.",
                categoryId: 39,
                status: "draft",
                userId: 17,
                tags: [9, 39, 41],
                image: [],
            },
        ],
        [
            "Server",
            "nginx/1.17.10",
            "Date",
            "Mon, 29 Mar 2021 19:29:52 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "7466",
            "Connection",
            "close",
            "Vary",
            "Accept-Encoding",
            "X-Powered-By",
            "Express",
            "Vary",
            "Origin, Accept-Encoding",
            "Access-Control-Allow-Credentials",
            "true",
            "Cache-Control",
            "no-cache",
            "Pragma",
            "no-cache",
            "Expires",
            "-1",
            "X-Total-Count",
            "1000",
            "Access-Control-Expose-Headers",
            "X-Total-Count",
            "X-Content-Type-Options",
            "nosniff",
            "ETag",
            'W/"1d2a-fyIOyF1DBLcDjDCDKhwNCNUhSQQ"',
        ],
    );
