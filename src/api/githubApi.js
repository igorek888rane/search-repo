export const githubApi = async (search) => {
    return  await fetch(`https://api.github.com/search/repositories?q=${search}&per_page=10`)
        .then(res => res.json())

}