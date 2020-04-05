import React from "react";

const MovieFavoriteUserListComponent =(props) =>
{
  const {userList} = props;
  return (
    <div>
    {
    	userList.length == 0 && <p>None of the current users liked this movie</p>
    }
    {
    	userList.length >0 &&
    	<div>
    	<p>Liked By:</p>
    	<ul>
    	{
    		userList.map((user,index)=>{
          	return (
              <li key={index}>{user.name}</li>
          	)
    		})
		}
		</ul>
		</div>
    }

	</div>
  )
}

export default MovieFavoriteUserListComponent;