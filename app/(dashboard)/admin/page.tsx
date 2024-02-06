import { authOptions } from "@/app/_lib/auth";
import { getServerSession } from "next-auth";
import router from "next/router";

const Page = async () => {

    const session = await getServerSession(authOptions);

    if(session?.user) {
       return <h2 className="text-2xl">
            Admin page - welcome back {session?.user.username}
        </h2>
    }
    
    return <h2 className="text-2xl">Admin page - you are not logged in</h2>
}
 
export default Page;