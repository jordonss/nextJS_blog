import Link from "next/link";
import Image from "next/image";

import styles from "./PostItem.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

	const imgPath = `/images/posts/${slug}/${image}`
	const linkPath= `/posts/${slug}`

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image src={imgPath} alt={title} width={300} height={200} layout="responsive" />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
