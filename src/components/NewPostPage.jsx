import { useRef, useState } from "react"


export const NewPostPage = ({ categories, newPost, isLoading }) => {
    const titleRef = useRef(null)
    const contentRef = useRef(null)
    const authorRef = useRef(null)
    const categoryRef = useRef(null)
    const imageRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const handleChange = () => {
        const title = titleRef.current.value
        const content = contentRef.current.value
        const author = authorRef.current.value
        const category = categoryRef.current.value

        if (title !== "" & content !== "" & author !== "" & category !== "") {
            setIsActive(true)
        }
    }

    return (
        <div className="newpost">
            <div className="card">


                <div>
                    <span>タイトル（必須）</span><input type="text" onChange={handleChange} ref={titleRef} required />
                </div>
                <div>
                    <span>投稿内容（必須）</span><input type="text" onChange={handleChange} ref={contentRef} required />
                </div>
                <div>
                    <span>投稿者名（必須）</span><input type="text" onChange={handleChange} ref={authorRef} required />
                </div>
                <div>
                    <span>カテゴリー（必須）</span>
                    <select onChange={handleChange} ref={categoryRef} required >
                        {categories.map(category => {
                            return <option value={category.name}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <span>画像URL（任意）</span><input type="file" ref={imageRef} />
                </div>
                <div><button disabled={isLoading || !isActive} onClick={() => newPost(titleRef.current.value,
                    contentRef.current.value, authorRef.current.value,
                    categoryRef.current.value, imageRef.current.value)}>{isLoading ? "投稿中…" : "投稿送信"}</button></div>
            </div>
        </div>
    )
}