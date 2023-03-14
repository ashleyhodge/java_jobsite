import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { GrAdd } from 'react-icons/gr'


const initial = { profile: "", exp: 0, techs: [], desc:"" };

const AddPost = () => {
  const skills = [
    "Java",
    "Python",
    "Spring",
    "JavaScript",
    "React"
  ]

  const navigate = useNavigate();
  const [form, setForm] = useState(initial)
  // const [other, setOther] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/post', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    setForm(initial)
    navigate('/');
  }

  const { profile, exp, desc } = form;

  const handleChange = (e) => {
    setForm({...form , techs : [...form.techs, e.target.value]});
  }

  const handleOther = (e) => {
      skills.push(e.target.other)
  }
  return(
    <div className="m-5">
    <h1 className="text-center font-bold text-gray-600 text-[32px]">Create New Listing</h1>
    <Link to='/' className="text-gray-600 hover:text-gray-500">View Current Openings</Link>
    <div className="grid place-content-center">
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="flex flex-col">
          <label className="flex flex-col text-gray-500 m-2 text-[20px]">
            Job Title
            <input 
              type='text' 
              className="border-2 p-1 rounded-md"
              onChange={(e) => setForm({ ...form, profile: e.target.value })}
              value={profile}
            />
          </label>
          <div className="text-center">
            <label className="text-gray-500 m-2 text-[20px]">
              Experience: 
              <input 
                type='number' 
                className="border-2 p-1 rounded-md w-1/6 mx-2"
                onChange={(e) => setForm({ ...form, exp: e.target.value })}
                value={exp}
              />
              years
            </label>
          </div>
          <label className="flex flex-col text-gray-500 m-2 text-[20px]">
            Job Description:
            <textarea 
              type='text' 
              className="border-2 p-1 rounded-md"
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              value={desc}
            />
          </label>
          <div className="ml-2">
            <h1 className="text-gray-500 text-[20px]">Skills Needed:</h1>
            <div className="grid grid-cols-2 gap-2 text-center">
              {skills.map((skill, index) => {
                return(
                  <div key={index} className='text-gray-400 text-[20px]'>
                    <input
                      id={index}
                      type="checkbox"
                      name={skill}
                      value={skill}
                      onChange={handleChange}
                    />
                    <label className="pl-2">{skill}</label>
                  </div>
                )
              })}
              {/* <div className='text-gray-500 text-[20px] flex justify-center'>
                <input 
                  type='text' 
                  placeholder="Other..."
                  className="border-2 pl-1 rounded-md w-3/6"
                  onChange={(e) => setOther(e.target.value)}
                  value={other}
                />
                <GrAdd className="cursor-pointer" onClick={handleOther} />
              </div> */}
            </div>
          </div>
          <div className="text-center font-bold text-gray-600 text-[30px] bg-blue-200 hover:bg-blue-300 mx-2 my-4 rounded-md">
            <button className="drop-shadow-sm">
              Add New Listing
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddPost;