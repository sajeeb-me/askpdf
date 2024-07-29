import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Page = async() => {
    const router = useRouter();
    const sessionParams = useSearchParams();
    const origin = sessionParams.get("origin") || "/";

    const apiResponse = await fetch ('/api/auth-callback')

    const data = await apiResponse.json()
}

export default Page;