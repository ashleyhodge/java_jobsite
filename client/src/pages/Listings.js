import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';

const Listings = () => {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAllPosts = async () => {
    await fetch('api/posts')
          .then(response => response.json())
          .then(data => {
          console.log(data)
              setPosts(data);
              setLoading(false);
  })}

  const searchPosts = async () => {
    await fetch(`api/posts/${search}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setLoading(false);
        console.log(data)
      })
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      searchPosts();
    }
  }


  useEffect(() => {
    setLoading(true)
    
    fetchAllPosts();

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="m-5">
      <h1 className="font-bold text-center text-[32px] text-gray-600">Current Openings</h1>
      <div className="flex justify-end items-center">
        <input className="border-2 rounded-md px-1" type='text' placeholder="Search" onChange={(e) => setSearch(e.target.value)} onKeyUp={handleKeyUp}/>
        <BsSearch size={28} className="border-2 rounded-md m-1 p-1 " onClick={() => searchPosts()} />
      </div>
      
      <div className="grid grid-cols-3 gap-5">
        {posts && posts.map((post, index) => {
          return (
          <div className="border-2 border-blue-100 shadow-sm shadow-blue-100 rounded-md p-3 text-center" key={index}>
          <h1 className="font-bold text-[25px] text-gray-600">{post.profile}</h1>
          <p className="text-gray-600 py-2">{post.desc}</p>
          <h3 className="flex justify-center pb-2"><span className="font-semibold pr-2 text-gray-600">Experience: </span><p className="text-gray-500">{post.exp} years</p></h3>
          <div className="font-semibold text-gray-600">Technologies Used:
            <div className="flex flex-wrap justify-center">
              {post.techs.map((tech, index) => {
                return(
                  <div className="font-normal text-gray-500" key={index}>
                    <p className="border border-blue-100 shadow-sm shadow-blue-100 px-1 m-1 rounded-md">{tech}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        )})}
      </div>
    </div>
    
    
  )
}

export default Listings;