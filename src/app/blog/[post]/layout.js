const BlogLayout = ({children})=>{
return children;
}

export default BlogLayout;

export async function generateMetaData({params}){
    return {
        title:params?.post.split("-").join(' ')
    }
}