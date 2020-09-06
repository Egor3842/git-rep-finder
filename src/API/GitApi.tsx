import axios from "axios";

export const GitApi = {
  takeAmountofRep(findGitName: string) {
    return axios.get<any>(`https://api.github.com/orgs/${findGitName}`)
      .then((response) => {
        return response.data
      })
  },
  takeRepInfo(findGitName: string,countOfRepInPage:number, currentPage: number) {
    return axios.get<any>(`https://api.github.com/orgs/${findGitName}/repos?per_page=${countOfRepInPage}&page=${currentPage}`)
      .then((response) => {
        return response.data
      })
  }
} 