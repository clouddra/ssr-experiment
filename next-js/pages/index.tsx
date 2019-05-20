import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import {NextPage} from 'next';

const IndexPage: NextPage<any> = (props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <pre>{JSON.stringify(props.data)}</pre>
      <p><Link href='/about'><a>About</a></Link></p>
      <p><Link href='/java'><a>Java</a></Link></p>
    </Layout>
  )
};

IndexPage.getInitialProps = async () => {
  // Example for including initial props in a Next.js function compnent page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await request.json();
  return {data}
}

export default IndexPage;
