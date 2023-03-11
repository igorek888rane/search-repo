export const githubApi = async (search) => {
    const {items} = await fetch(`https://api.github.com/search/repositories?q=${search}`)
        .then(res => res.json())
    return items
}