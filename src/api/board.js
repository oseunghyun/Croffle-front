// 커뮤니티 게시판 조작과 관련된 CRUD API 함수 파일

import { board } from "./index";

// 커뮤니티 게시글 작성
function createPost(postData) {
  return board.post(postData);
}

// 커뮤니티 게시글 전체 조회
function fetchPosts() {
  return board.get();
}

// 커뮤니티 특정 게시글 조회
function fetchPost(postId) {
  return board.get(postId);
}

// 커뮤니티 게시글 삭제
function deletePost(postId) {
  return board.delete(postId);
}

// 커뮤니티 게시글 수정
function editPost(postId, postData) {
  return board.put(postId, postData);
}

export { createPost, fetchPosts, fetchPost, deletePost, editPost };
