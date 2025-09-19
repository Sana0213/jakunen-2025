import { useState } from 'react'
import { usePost } from './hooks/usePost'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { DetailPage } from './components/DetailPage'
import { NewPostPage } from './components/NewPostPage'

function App() {
  const { filterData,getDetailData,detail,categories,newPost,isLoading,handleChangeText,handleChangeCategory,handleChangeSort } = usePost() 
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home filterData={filterData} handleChangeText={handleChangeText}
         categories={categories} handleChangeCategory={handleChangeCategory} handleChangeSort={handleChangeSort} ></Home>}></Route>
        <Route path='/detail/:id' element={<DetailPage getDetailData={getDetailData} detail={detail} ></DetailPage>}></Route>
        <Route path='/newPost' element={<NewPostPage categories={categories} newPost={newPost} isLoading={isLoading}></NewPostPage>}></Route>
      </Routes>
    </>
  )
}

export default App
