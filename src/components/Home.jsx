import { PostCard } from "./PostCard"
import { Link } from "react-router-dom"


export const Home = ({ filterData, handleChangeText, categories, handleChangeCategory, handleChangeSort }) => {

    return (

        <div className="home">
            <input className="textbox" type="text" onChange={handleChangeText} />
            <select className="カテゴリー" onChange={handleChangeCategory} >
                <option value="">すべて</option>
                {categories.map(category => {
                    return <option value={category.name}>{category.name}</option>
                })}
            </select>
            <select className="sort" onChange={handleChangeSort} >
                <option value="">新着順</option>
                <option value="likes">いいね数順</option>
            </select>
            <Link to={`/newPost`}><button className="btn btn-primary">新規投稿</button></Link>
            {filterData.length != 0 ?

                filterData.map((item) => {
                    return <PostCard item={item} />

                })
                : <h1>検索結果が見つかりませんでした</h1>
            }
        </div>

    )


}