import React, { Component } from "react";
import MovieFavoriteUserListComponent from './MovieFavoriteUserListComponent'
import MovieCardComponent from './MovieCardComponent'

class MovieListComponent extends Component
{
  
 render()
 {
   const {movies,profiles,users} = this.props;
   const movieList = Object.keys(movies).map(id=>{
     
   		const userListByFavoritedMovie = profiles.filter(profile=>profile.favoriteMovieID == id).map(item=>{
            return users[item.userID];
    	});
		return(
         <div>
          <MovieCardComponent movie={movies[id]} />
          <MovieFavoriteUserListComponent userList={userListByFavoritedMovie} />
		 </div>
		)
      });
   
    return (
      <div>
      {
      movieList
      }
      </div>
  	)
 }
}

export default MovieListComponent;