import { Link } from "react-router-dom"

export const PostCard = ({ item }) => {

    return (
        <>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">タイトル:{item.title}</h5>
                    <p className="card-text">内容:{item.content}</p>
                    <div className="card-text"><small className="text-body-secondary">
                        <div className="post-main">
                            <div className="post-middle1">
                                <p className="post-author" >投稿者:{item.author}</p>
                                <p className="post-category" >カテゴリー:{item.category}</p>
                            </div>
                            <div className="post-middle2">
                                <p className="post-id" >id:{item.id}</p>
                                <p className="post-likes">いいね数:{item.likes}</p>
                                <p className="post-comment">コメント数:{item.commentCount}</p>
                            </div>
                        </div>
                    </small>
                    </div>
                    <Link to={`/detail/${item.id}`}><button>詳細はこちら</button></Link>
                </div>
                <img src={item.imageUrl} className="card-img-bottom" alt="gazo"/>
            </div>
        </>
    )
}