import axios from "axios";

export const MainApi = {
  takeAmountofRep(findGitName: string) {
    return axios.get<any>(`https://api.github.com/orgs/${findGitName}`)
      .then((response) => {
        return response.data
      })
  },
  takeRepInfo(findGitName: string, currentPage: number) {
    return axios.get<any>(`https://api.github.com/orgs/${findGitName}/repos?per_page=10&page=${currentPage}`)
      .then((response) => {
        return response.data
      })
  }
} 