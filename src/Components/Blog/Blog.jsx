import { FaRegBookmark } from "react-icons/fa";


const Blog = ({blog}) => {
    const {id,cover,title,author,author_img,posted_date,reading_theme,hashtags,reading_time} = blog
  return (
    <div className="p-4">
        <img src={cover} alt={`Cover Picture Of The Title ${title}`} />
        <div className="flex justify-between mt-8 mb-4">
            <div className="flex items-center gap-5">
                <img  src={author_img} alt="" />
                <div>
                    <h3 className="font-bold text-2xl">{author}</h3>
                    <h4>{posted_date}</h4>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <h3 className="text-xl opacity-90">{reading_time} min read</h3>
                <span className="cursor-pointer">
                <FaRegBookmark />
                </span>
            </div>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="flex gap-2 mt-5 mb-4">
            {hashtags.map(hash => <span>#{hash}</span>)}
        </div>
        <h3 className="border-b-2 leading-4 border-indigo-500 w-24 text-[#6047EC]">Mark as read</h3>

        <hr className="mt-12 mb-4"/>
    </div>
  )
}

export default Blog