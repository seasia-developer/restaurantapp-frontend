"use client"
import { useRouter } from "next/navigation";
import styles from "./contentTitleCard.module.scss";
import { useDispatch } from "react-redux";
import { setSendSearchName } from "@/store/slices/sendSearchNameSlice";


interface ContentTitleCardProps {
  blog_title: string;
  blog_url: string;
}

const ContentTitleCard:React.FC<ContentTitleCardProps> = ({blog_title, blog_url}) => {

  const router = useRouter();
  const dispatch = useDispatch();


  const handleNext = (blog_url:any) => {
    dispatch(setSendSearchName(blog_url));
    router.push(`${blog_url}`);
  }

  return (
    <div className={styles.contentTitleCard}>
        <p>{blog_title}</p>
        <a onClick={()=>handleNext(blog_url)}>See More</a>
    </div>
  )
}

export default ContentTitleCard