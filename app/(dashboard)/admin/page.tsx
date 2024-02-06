import { authOptions } from "@/app/_lib/auth";
import { getServerSession } from "next-auth";

const Page = async () => {
    const session = await getServerSession(authOptions);

    return ( 
        <h1>Welcome to admin</h1>
     );
}
 
export default Page;