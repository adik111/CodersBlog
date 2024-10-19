import { useRouter } from "next/router"

export default function Post(){
    const router = useRouter();
    const {sno} =router.query;

    return <p>Post : {sno}</p>
}