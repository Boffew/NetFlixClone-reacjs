const key='6c5920515a26cabca1f67c246b7cdc68'

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestTopTrending:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
}
export default requests