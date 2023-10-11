import {getAllPostIds, getPostData} from '../../post';


export default function Post({ postData }: any) {
    return (
        <h1>
            {postData.title}
        </h1>
    );
}

  
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}


export async function getInitialProps({ params }: any) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
