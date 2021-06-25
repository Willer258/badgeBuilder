import { Fragment } from "react";
import Link from "next/link"

export default function Home() {
  return (
    <Fragment>
      <div className="text-center space-y-11">

        <h1 className="text-5xl text-center" >Bienvenue sur mon concepteur de badge <span className="text-indigo-600">PageBuilder</span> </h1>

        <p className="text-blue-600 focus:text-red-500 hover:text-red-300 "><Link href="/badges">Voir les badges concues</Link></p>
      </div>
    </Fragment>

  )
}
