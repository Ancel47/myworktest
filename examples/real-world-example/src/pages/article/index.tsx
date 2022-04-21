import {
    useOne,
    useGetIdentity,
    useDelete,
    useNavigation,
} from "@pankod/refine-core";
import router from "@pankod/refine-react-router-v6";
import { useForm } from "@pankod/refine-react-hook-form";

import { IArticle } from "interfaces";
import dayjs from "dayjs";

const { useParams } = router;

export const ArticlePage: React.FC = () => {
    const params = useParams();
    const { data: user } = useGetIdentity();
    const { mutate } = useDelete();
    const { push } = useNavigation();

    const {
        register,
        handleSubmit,
        refineCore: { onFinish },
    } = useForm({
        refineCoreProps: {
            resource: `articles/${params.slug}/comments`,
            redirect: false,
        },
    });

    const { data: item } = useOne<IArticle>({
        resource: "articles",
        id: params.slug,
        metaData: {
            resource: "article",
        },
        queryOptions: {
            enabled: !!params.slug,
        },
    });

    const { data: commentData } = useOne({
        resource: "articles",
        id: params.slug,
        metaData: {
            resource: "comments",
            getComments: true,
        },
        queryOptions: {
            enabled: !!params.slug,
        },
    });

    const handleSubmitComment = (data: {}) => {
        onFinish({ comment: data });
    };

    const deleteArticle = async () => {
        await mutate({
            resource: `articles`,
            id: params.slug,
        });
        push("/");
    };

    return (
        <div className="article-page">
            <div className="banner">
                <div className="container">
                    <h1>{item?.data.title}</h1>

                    <div className="article-meta">
                        <a href="">
                            <img src={item?.data.author.image} />
                        </a>
                        <div className="info">
                            <a href="" className="author">
                                {item?.data.author.username}
                            </a>
                            <span className="date">
                                {dayjs(item?.data.createdAt).format(
                                    "MMM DD, YYYY",
                                )}
                            </span>
                        </div>

                        {user &&
                        user?.username === item?.data.author.username ? (
                            <>
                                <button className="btn btn-outline-secondary btn-sm">
                                    <i className="ion-edit"></i>
                                    &nbsp; Edit Article
                                </button>
                                &nbsp;
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => {
                                        deleteArticle();
                                    }}
                                >
                                    <i className="ion-trash-a"></i>
                                    &nbsp; Delete Article
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-sm btn-outline-secondary">
                                    <i className="ion-plus-round"></i>
                                    &nbsp; Follow {item?.data.author.username}
                                </button>
                                &nbsp;
                                <button className="btn btn-sm btn-outline-primary">
                                    <i className="ion-heart"></i>
                                    &nbsp; Favorite Post{" "}
                                    <span className="counter">
                                        {item?.data.favoritesCount}
                                    </span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <p>{item?.data.body}</p>
                        <ul className="tag-list">
                            {item?.data.tagList &&
                                item?.data.tagList.map((tag, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="tag-default tag-pill tag-outline"
                                        >
                                            {tag}
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="article-actions">
                    <div className="article-meta">
                        <a href="profile.html">
                            <img src={item?.data.author.image} />
                        </a>
                        <div className="info">
                            <a href="" className="author">
                                {item?.data.author.username}
                            </a>

                            <span className="date">
                                {dayjs(item?.data.createdAt).format(
                                    "MMM DD, YYYY",
                                )}
                            </span>
                        </div>

                        {user &&
                        user?.username === item?.data.author.username ? (
                            <>
                                <button className="btn btn-outline-secondary btn-sm">
                                    <i className="ion-edit"></i>
                                    &nbsp; Edit Article
                                </button>
                                &nbsp;
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => {
                                        deleteArticle();
                                    }}
                                >
                                    <i className="ion-trash-a"></i>
                                    &nbsp; Delete Article
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-sm btn-outline-secondary">
                                    <i className="ion-plus-round"></i>
                                    &nbsp; Follow {item?.data.author.username}
                                </button>
                                &nbsp;
                                <button className="btn btn-sm btn-outline-primary">
                                    <i className="ion-heart"></i>
                                    &nbsp; Favorite Post{" "}
                                    <span className="counter">
                                        {item?.data.favoritesCount}
                                    </span>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <form
                            onSubmit={handleSubmit(handleSubmitComment)}
                            className="card comment-form"
                        >
                            <div className="card-block">
                                <textarea
                                    {...register("body")}
                                    className="form-control"
                                    placeholder="Write a comment..."
                                    rows={3}
                                ></textarea>
                            </div>
                            <div className="card-footer">
                                <img
                                    src={user?.image}
                                    className="comment-author-img"
                                />
                                <button className="btn btn-sm btn-primary">
                                    Post Comment
                                </button>
                            </div>
                        </form>

                        <div className="card">
                            {commentData?.data.map((item: any) => {
                                return (
                                    <>
                                        <div className="card-block">
                                            <p className="card-text">
                                                {item?.body}
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <a
                                                href=""
                                                className="comment-author"
                                            >
                                                <img
                                                    src={item?.author.image}
                                                    className="comment-author-img"
                                                />
                                            </a>
                                            &nbsp;
                                            <a
                                                href=""
                                                className="comment-author"
                                            >
                                                {item?.author.username}
                                            </a>
                                            <span className="date-posted">
                                                {item?.createdAt}
                                            </span>
                                            {item.author.username ===
                                                user?.username && (
                                                <span className="mod-options">
                                                    <i
                                                        className="ion-trash-a"
                                                        onClick={() => {
                                                            mutate({
                                                                resource: `articles/${params.slug}/comments`,
                                                                id: item.id,
                                                            });
                                                        }}
                                                    />
                                                </span>
                                            )}
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
