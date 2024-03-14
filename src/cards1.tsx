import "./card1.css"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import github from "./assets/github.webp"
// import {useState ,useEffect} from "react";
// import data from "./assets/data.json"



const Card1=()=>{
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // useEffect(()=>{
    //     const results=data.filter(items=>{
    //        items.names.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    //     })
    //     setSearchResults(results)
    // },[searchTerm])

//     useEffect(() => {
//         const results = data.filter(item =>
//          item.names.toLowerCase().includes(searchTerm.toLowerCase())
//        );
//        setSearchResults(results);
//      }, [searchTerm]);

//      const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };

   
     return (
        <>
                <div className="card-container">
                <div className="inter-card">
                    <div className="heard">
                        <p>divfinder</p>
                        <h1>LIGHT<i><BrightnessHighIcon/></i></h1>
                    </div>
                     <form action="" className="search">
                        <label htmlFor=""><ZoomInIcon/><input type="text"  placeholder="Search Github username"/></label>
                        <button>Search</button>
                     </form>
                     {/* {searchResults.map(item =>( */}
                           <div className="content-card">
                           <img src={github} alt="github" />
                           <div className="content">
                               <div className="firstdiv">
                                   <div className="left">
                                       <h1 className="octos">The octocact</h1>
                                       <p className="link">octocat</p>
                                       <span>This profile has no bio</span>
                                   </div>
                                   <div className="rigth">Joined 25 Jan 2011</div>
                               </div>
                               <div className="number">
                                   <li>Repos<p>3</p></li>
                                   <li>Followers<p>3589</p></li>
                                   <li>Followings<p>9</p></li>
                               </div>
                               <div className="local-link">
                                   <div className="top">
                                       <p className="linee"><AddLocationIcon/><span>San Francisco</span></p>
                                       <p className="linee"><span>Not available</span></p>
                                   </div>
                                   <div className="bottom">
                                   <p className="linee"><span>https://gitihub.blog</span></p>
                                   <p className="linee"><span>agithub</span></p>
                                   </div>
                               </div>
                              
                           </div>
                       </div>
                     {/* ))} */}
                   
                </div>
           </div>
        </>
     )
}
export default Card1