import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred } = useContext(
    GithubContext
  ) as any;

  return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;
