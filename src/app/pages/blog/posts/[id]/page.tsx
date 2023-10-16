import { getSortedPostsData, getPostData } from "../../post"
import { notFound } from "next/navigation"
import Link from "next/link"
import BlogLayout from "@/app/components/BlogLayout/BlogLayout"

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { id: string } }) {

    const posts = getSortedPostsData()
    const postId = params['id']

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
    return BlogLayout(title, date, contentHtml);
}