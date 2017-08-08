const SERVER_ROOT = "http://localhost:3001"
const API = {
  AUTHORS: `${SERVER_ROOT}/authors`,
  POSTS: `${SERVER_ROOT}/posts`
}
const REQUEST = {
  getAllAuthors: () => fetch(API.AUTHORS).then(resp => resp.json()),
  getAllPosts: () => fetch(API.POSTS).then(resp => resp.json()),
}
const BIZ_ASSIS = {
  buildAuthorTable: (authors, posts) => {
    let authorTable = {}
    authors.forEach(author => {
      authorTable[author.name] = {
        age: author.age
      }
    })
    posts.forEach(post => {
      authorTable[post.author].postTitle = post.title 
    })
    return authorTable
  }
}
const BIZ_FLOW = {
  getAuthorTable: async () => {
    let [authors, posts] = await Promise.all([REQUEST.getAllAuthors(), REQUEST.getAllPosts()])
    return BIZ_ASSIS.buildAuthorTable(authors, posts)
  }
}

BIZ_FLOW.getAuthorTable().then(res => console.log(res))
