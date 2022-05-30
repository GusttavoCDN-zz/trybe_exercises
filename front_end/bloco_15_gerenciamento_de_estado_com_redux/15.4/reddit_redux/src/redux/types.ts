export interface APIResponse {
  data: {
    author__fullname: string,
    title: string,
  };
}

export interface AplicationState {
  reactSubreddit: {
    posts: APIResponse[];
  };
}
