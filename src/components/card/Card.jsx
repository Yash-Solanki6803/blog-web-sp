import Image from "next/image";
// import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div key={key}>
      {item.img && (
        <div>
          <Image src={item.img} alt="" fill />
        </div>
      )}
      <div>
        <div>
          <span>{item.createdAt.substring(0, 10)} - </span>
          <span>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
