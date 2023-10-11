import matter from "gray-matter";
import path from "path";
import fs from 'fs';

const postsDirectory = path.join(process.cwd(), './public/static/Blog/posts')

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName: string) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        }
    });
}

export function getPostData(id: any) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    console.log(fullPath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    const blogPost: BlogPost = {
        id,
        title : matterResult.data.title,
        date: matterResult.data.date,
    }

    return blogPost;
}
