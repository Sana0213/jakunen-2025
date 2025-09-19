
import React, { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

export const DetailPage = ({ getDetailData, detail }) => {
    const { id } = useParams()
    useEffect(() => {
        getDetailData(id)
    }, [id])
    console.log(detail.comments);


    return (
        <>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">タイトル:{detail.title}</h5>
                    <p className="card-text">内容:{detail.content}</p>
                    <div className="card-text"><small className="text-body-secondary">
                        <div className="post-main">
                            <div className="post-middle1">
                                <p className="post-author" >投稿者:{detail.author}</p>
                                <p className="post-category" >カテゴリー:{detail.category}</p>
                            </div>
                            <div className="post-middle2">
                                <p className="post-id" >id:{detail.id}</p>
                                <p className="post-likes">いいね数:{detail.likes}</p>
                                <p className="post-comment">コメント数:{detail.commentCount}</p>
                            </div>
                        </div>
                    </small>
                    </div>
                </div>
                <img src={detail.imageUrl} className="card-img-bottom" alt="gazo" />
            </div>
            {detail.comments?.map(comment => {
                return <div className="card">
                    <p className='comment-author'>{comment.author}</p>
                    <p className='comment-createdAt'>{comment.createdAt}</p>
                    <p className='comment-content'>{comment.content}</p>
                </div>
            })
            }
            <Link to={`/`}><button>戻る</button></Link>
        </>
    )
}
