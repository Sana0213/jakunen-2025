import { useEffect,useState } from "react";
import { getPostData, newPostApi, selectApi, soloPost } from "../Api/postApi";
import { useNavigate } from "react-router-dom";



export const usePost =  () =>{

    const [post,setPost] = useState([])
    const [detail,setDetail] = useState({})
    const [categories,setCategories] = useState([])
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false)
    const [serch,setSerch] = useState("")
    const [select,setSelect] = useState("")
    const [sort,setSort] = useState("")
    const [filterData,setFilterData] = useState([])

    const dataGet = async () =>{
        const data = await getPostData()
        setPost(data)
        setFilterData(data)

    }

    const getDetailData = async (id) => {
        const data = await soloPost(id)
        setDetail(data)
        
    }

    const newPost = async (title,content,author,category) => {
        setIsLoading(true)
        const data = await newPostApi(title,content,author,category)
        if (data) {
            window.alert("投稿が作成されました")
            navigate("/")
        }
        setIsLoading(false)
    }

    const selectCategories = async () => {
        const data = await selectApi()
        setCategories(data)

    }

    const handleChangeText = (e) => {
        setSerch(e.target.value)
        
    }

    const handleChangeCategory = (e) =>{        
        setSelect(e.target.value)
    }

    const handleChangeSort = (e) =>{        
        setSort(e.target.value)
    } 

    useEffect(() => {
        dataGet()
        selectCategories()
    },[])

    useEffect(() => {
        const filter = post.filter(item => {
            const matchSerch = item.title.includes(serch)||item.content.includes(serch)
            const matchSelect = item.category == select||select == ""
            return matchSerch && matchSelect
        })
        if (sort == "") {
            const sortData = filter.sort((a,b) => a.createdAt - b.createdAt)
            setFilterData(sortData)
        }
        else {
            const sortData = filter.sort((a,b) => b.likes - a.likes)
            setFilterData(sortData)
        }
    },[serch,select,sort])

    return{
        filterData,
        getDetailData,
        detail,
        newPost,
        categories,
        isLoading,
        handleChangeText,
        handleChangeCategory,
        handleChangeSort,
    }
}
