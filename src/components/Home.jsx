import { Ackolove } from "./AckoLove";
import { CompanyLogs } from "./CompanyLogs";
import { Reviews } from "./Reviews";
import {Footer} from "./Footer"

export function Home(){
    return  <div>
        <Reviews></Reviews>
        <CompanyLogs></CompanyLogs>
        <Ackolove></Ackolove>
        <Footer></Footer>
    </div>
}