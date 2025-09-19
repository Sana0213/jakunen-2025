const api = "http://localhost:3001/api"

//一覧取得
export const getPostData = async () => {
    try {
        const res = await fetch(`${api}/posts`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
        if (!res.ok) {
            throw new Error(`HTTP error! status:${res.status}`)
        }

        const data = await res.json()
        return data

    }
    catch (error) {
        console.error(error);
        throw error
    }
}

//個別ポスト表示
export const soloPost = async (id) => {
    try {
        const res = await fetch(`${api}/posts/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
        if (!res.ok) {
            throw new Error(`HTTP error! status:${res.status}`)
        }

        const data = await res.json()
        return data
    }
    catch (error) {
        console.error(error);
        throw error
    }
}

//投稿作成
export const newPostApi = async (title,content,author,category) => {
    console.log(title,content,author,category);
    
    try {
        const res = await fetch(`${api}/posts`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                title,
                content,
                author,
                category
            })
        })
        if (!res.ok) {
            throw new Error(`HTTP error! status:${res.status}`)
        }

        const data = await res.json()
        console.log(data);
        
        return data

    }
    catch (error) {
        console.error(error);
        throw error
    }
}

//カテゴリー選択
export const selectApi = async () => {
    try{
        const res = await fetch(`${api}/categories`,{
            method:"GET",
            headers:{'Content-Type':'application/json'}
        })
        if (!res.ok) {
            throw new Error(`HTTP error! status:${res.status}`)
        }

        const data = await res.json()
        return data
    }
    catch (error) {
        console.error(error);
        throw error
    }
}