import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
    const router = useRouter();

    const sessionParams = useSearchParams();
    const origin = sessionParams.get("origin") || "/";

    const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            if (success) {
                // user is synced to db
                router.push(origin ? `${origin}` : "/dashboard");
            }
        }
    })
}

export default Page;