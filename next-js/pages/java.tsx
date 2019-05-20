import * as React from 'react'
import fetch from 'isomorphic-unfetch';
import {NextPage} from 'next';
import Link from "next/link";

const Java: NextPage<any> = (props) => {
  return (
    <>
      <pre>{JSON.stringify(props.data)}</pre>
      <p><Link href='/'><a>Go home</a></Link></p>
    </>
  )
};

Java.getInitialProps = async () => {
  // Example for including initial props in a Next.js function compnent page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const request = await fetch('http://localhost:8080');
  const data = await request.json();
  return {data};
  // return {data: 'lll'}
};

export default Java;
