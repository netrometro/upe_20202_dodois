import { Component } from "react";
import Link from "next/link";

export default class Home extends Component {

  render(){
    return (
      <div>
       <Link href="/cadastro/passo1">Acesse página de cadastro/passo1</Link>
      </div>
    )
  }
}
