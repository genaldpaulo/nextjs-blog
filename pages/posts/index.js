import Link from 'next/link';
import Layout from '../../components/layout';

export default function Post() {
    return (
        <Layout>
            <h1>Index Post</h1>
            <h2>
                <Link href="/posts/first-post">Go to the first post</Link>
            </h2>
        </Layout>
    );
}