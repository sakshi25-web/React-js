export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        if (!response.ok) {
            return {
                followers: 0,
                name: 'Hitesh Choudhary',
                avatar_url: 'https://avatars.githubusercontent.com/u/11613311?v=4'
            }
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching GitHub info:', error)
        return {
            followers: 0,
            name: 'Hitesh Choudhary',
            avatar_url: 'https://avatars.githubusercontent.com/u/11613311?v=4'
        }
    }
}
