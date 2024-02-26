import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        initialIsFollowing: false,
    },
    {
        userName: 'pheralb',
        name: 'Javier Praders',
        initialIsFollowing: false,
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        initialIsFollowing: true,
    }
]

export function App () {
    const midudev = { initialIsFollowing: true , userName: "midudev" } //not the best practice
    return (
        <section className='App'>
            {
                users.map(({ userName, name, initialIsFollowing }) => (
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={initialIsFollowing}>
                       {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}
