import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const postAPI = {
    getPost(postId: number) {
        return instance.get(`posts/${postId}`)
            .then(res => res.data)
    },
    getPosts() {
        return instance.get(`posts`)
            .then(res => res.data)
    },
    addNewPost(newPost: { userId: number, title: string, body: string }) {
        return instance.post(`posts`, newPost)
            .then(res => res.data)
    },
    deletePost(postId: number){
        return instance.delete(`posts/${postId}`)
            .then(res => res.data)
    },
    updatePostData(postId: number, newPostData: {userId: number, id: number, title: string, body: string}){
        return instance.put(`posts/${postId}`, newPostData)
            .then(res => res.data)
    },
    updatePostTitle(postId: number, title: string){
        return instance.put(`/posts/${postId}`, title)
            .then(res => res.data)
    },
    getPostComments(postId: number) {
        return instance.get(`posts/${postId}/comments`)
            .then(res => res.data);
    },
    getUserPosts(userId: number) {
        return instance.get(`posts/?userId=${userId}`)
            .then(res => res.data);
    }
}

postAPI.getPost(1).then(data => console.log('1. Get post', data));
postAPI.getPosts().then(data => console.log('2. Get all posts', data))

const newPost = {
    userId: 1,
    title: 'New post title',
    body: '05.10.2022 20:55'
}
postAPI.addNewPost(newPost).then(data => console.log('3. Add new post', data))
postAPI.deletePost(1).then(data => console.log('4. Delete post', data))

const newPostData = {
    id: 1,
    userId: 1,
    title: 'Update',
    body: '05.10.2022 21:16 - newPostData'
}
postAPI.updatePostData(1, newPostData).then(data => console.log('5. Update post data', data))
postAPI.updatePostTitle(1, 'Hi!!!!').then(data => console.log('6. Update post title', data))
postAPI.getPostComments(1).then(data => console.log('7. Get post comments', data))
postAPI.getUserPosts(2).then(data => console.log('8. Get user posts', data))

const albumsAPI = {
    getAlbumPhotos(albumId: number) {
        return instance.get(`albums/${albumId}/photos`).then(res => res.data)
    },
}
albumsAPI.getAlbumPhotos(1).then(data => console.log("9. Get all photos of album with ID = 1: ", data));

const usersAPI = {
    getUserAlbums(userId: number) {
        return instance.get(`users/${userId}/albums`)
            .then(res => res.data);
    },
    getUserTodos(userId: number) {
        return instance.get(`users/${userId}/todos`)
            .then(res => res.data);
    },
    getUserPosts(userId: number) {
        return instance.get(`users/${userId}/posts`)
            .then(res => res.data);
    },
    getUsersComments(){
        return instance.get(`comments`)
            .then(res => res.data);
    },
    getCommentById(id: number) {
        return instance.get(`comments/${id}`)
            .then(res => res.data)
    }
};

usersAPI.getUserAlbums(1).then(data => console.log("10. Get all albums of user with ID = 1: ", data));
usersAPI.getUserTodos(1).then(data => console.log("11. Get all todos of user with ID = 1: ", data));
usersAPI.getUserPosts(1).then(data => console.log("12. Get all posts of user with ID = 1 (URI): ", data));
usersAPI.getUsersComments().then(data => console.log('13. Get all comments', data));
usersAPI.getCommentById(1).then(data => console.log('14. Get comment by ID', data));

// just a plug
export default () => {
};