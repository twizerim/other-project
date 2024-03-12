import "./card2.css"
import github from "./assets/github.webp"

const White=()=>{
     return (
        <>
           <div className="card-containerr">
                <div className="inter-card">
                    <div className="heardr">
                        <p className="p">divfinder</p>
                        <h1 className="o">LIGHT</h1>
                    </div>
                    <div className="seachr">
                        <li><p>Seach Github username</p></li>
                        <button>Search</button>
                    </div>
                    <div className="content-cardr">
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
                                    <p className="linee"><span>San Francisco</span></p>
                                    <p className="linee"><span>Not available</span></p>
                                </div>
                                <div className="bottom">
                                <p className="linee"><span>https://gitihub.blog</span></p>
                                <p className="linee"><span>agithub</span></p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
           </div>
        </>
     )
}
export default White