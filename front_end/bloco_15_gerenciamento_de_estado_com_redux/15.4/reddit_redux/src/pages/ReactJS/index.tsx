import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchPosts } from '../../redux/actions';
import { APIResponse, AplicationState } from '../../redux/types';

interface Props {
  posts: APIResponse[];
  fetchPosts: (a: string) => void;
}

// eslint-disable-next-line no-shadow
function ReactJS({ posts, fetchPosts }: Props) {
  useEffect(() => {
    console.log('Entrei no Use Effect do React Compnente');
    fetchPosts('reactjs');
  }, []);

  console.log('React Component');
  return (
    <div>
      {posts.map(({ data }, i) => (
        <div key={i}>
          <h3>{data.title}</h3>
          <h2>{data.author__fullname}</h2>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (globalState: AplicationState) => ({
  posts: globalState.reactSubreddit.posts,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, unknown, Action>,
) => ({
  fetchPosts: (a: string) => dispatch(fetchPosts(a)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactJS);
