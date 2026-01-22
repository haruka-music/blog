// import styles from "@";
import { client } from "@/libs/client";
import Link from "next/link";

export default async function Home() {
  // Directly fetch data inside the Server Component
  const data = await client.get({ endpoint: "blog" });
  const now = new Date();

  return (
    // <div className={styles.container}>
    <div>
      <ul>
        {data.contents.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
        Current time: {now.toISOString()}
      </ul>
    </div>
  );
}
