import { getSortedPostsData, getPostData } from "../../post"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { id: string } }) {

    const posts = getSortedPostsData()
    const postId = params['id']

    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(postId)

    return (
        <div>
            <h1>
                {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: {contentHtml}.contentHtml}}>

            </div>
        </div>
    );
}