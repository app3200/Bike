import { Ackolove } from "./AckoLove";
import { CompanyLogs } from "./CompanyLogs";
import { Reviews } from "./Reviews";

export function Home(){
    return  <div>
        <Reviews></Reviews>
        <CompanyLogs></CompanyLogs>
        <Ackolove></Ackolove>
    </div>
}