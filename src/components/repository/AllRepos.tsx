import React from 'react'
import TableHeading from './TableHeading'
import RepoInfo from './RepoInfo'

type PropType = {
    repositoryInfo: []
    reposHead: string[]
}

const AllRepos: React.FC<PropType> = (props) => {
    const AllTableHeading = props.reposHead.map(x => <TableHeading name={x} />)
    const RepoInfoAbout = props.repositoryInfo.map((x: any) => 
    <RepoInfo name={x.name}
            html_url={x.html_url}
            forks={x.forks}
            watchers={x.watchers}
            stargazers_count={x.stargazers_count} />)
    return (
        <table>
            <thead>
                <tr>
                    {AllTableHeading}
                </tr>
            </thead>
            <tbody>
                {RepoInfoAbout}
            </tbody>
        </table>
    )
}
export default AllRepos