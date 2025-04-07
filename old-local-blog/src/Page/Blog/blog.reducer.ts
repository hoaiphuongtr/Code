import { createAction, createReducer, current, nanoid } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

type BlogState = {
  postList: Post[]
  editingPost: Post | null
}
const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}
export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>) {
  return { payload: { ...post, id: nanoid() } }
})
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<string>('blog/startEditingPost')
export const cancelEditingPost = createAction('blog/cancelEditingPost')
export const saveEditingPost = createAction<Post>('blog/saveEditingPost')
const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const newPost = action.payload
      state.postList.push(newPost)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const deletedPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (deletedPostIndex !== -1) {
        state.postList.splice(deletedPostIndex, 1)
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload
      const postItem = state.postList.find((post) => post.id === postId) || null
      state.editingPost = postItem
    })
    .addCase(cancelEditingPost, (state) => {
      state.editingPost = null
    })
    .addCase(saveEditingPost, (state, action) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      state.editingPost = null
    })
    .addMatcher(
      (action) => action.type.includes('cancel'),
      (state, action) => {
        console.log(current(state))
      }
    )
})
export default blogReducer
