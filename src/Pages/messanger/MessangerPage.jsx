import SearchInput from "../../Components/SearchInput/SearchInput";
import './MessangerPage.scss'


const MessangerPage = ()=>{


return (
    <div className="messanger-page">
        <div className="messanger-page-main-div">
           <div className="messanger-page-header">
               <div>
                 <h1>Message Center</h1>
               </div>
               <div styleName="button-box-div">
                <SearchInput/>
               </div>
           </div>
        </div>
    </div>
)
}


export default MessangerPage;