/* eslint-disable react/prop-types */

import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {
  console.log(props.response)
  return (
    <>
    <section>
    <h1 className='title'>Suggested Recipe:</h1>
    </section>
    <section className="suggested-recipe">
      <ReactMarkdown>{props.response}</ReactMarkdown>
    </section>
    </>
  )
}
