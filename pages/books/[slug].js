import { useRouter } from "next/router";
export default function Books() {
    const route=useRouter();
   
    return (
       
    <div>The route is {route.query.push}</div>
  )
}
