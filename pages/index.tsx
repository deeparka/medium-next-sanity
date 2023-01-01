import type { NextPage } from "next";
import Head from "next/head";
import mImage from "../images/M.png";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";

interface Props {
    posts: [Post];
}

const Home: NextPage<Props> = ({ posts }) => {
    // console.log(posts);
    return (
        <div className="max-w-4xl mx-auto">
            <Head>
                <title>Medium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
                <div className="px-10 space-y-5">
                    <h1 className="text-7xl max-w-xl font-serif">
                        <span className="underline decoration-black decoration-4">
                            Medium
                        </span>{" "}
                        is a place to write, read and connect
                    </h1>
                    <h2>
                        It's easy and free to post your thinking on any topic
                        and connect with millions of readers
                    </h2>
                </div>
                <img
                    className="hidden md:inline-flex h-24 lg:h-32"
                    src={mImage.src}
                    alt="M"
                />
            </div>
            {/* Posts */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 
            md:gap-6 p-2 md:p-6"
            >
                {posts.map((post) => (
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                        <div className="border rounded-lg group cursor-pointer overflow-hidden">
                            {post.mainImage && (
                                <img
                                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                                    src={urlFor(post.mainImage).url()}
                                    alt="post"
                                />
                            )}
                            <div className="flex justify-between p-5 bg-white">
                                <div>
                                    <p className="text-lg font-bold">
                                        {post.title}
                                    </p>
                                    <p className="text-sm font-light">
                                        {post.description} by {post.author.name}
                                    </p>
                                </div>
                                {post.author.image && (
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src={urlFor(post.author.image).url()}
                                        alt={post.author.name}
                                    />
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;

export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name,
    image
    },
    description,
    mainImage,
    slug
    }`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        },
    };
};
