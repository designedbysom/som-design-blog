import { useParams } from 'react-router-dom'

function Article() {
  const { slug } = useParams()

  return (
    <div className="article">
      <h1>Article: {slug}</h1>
      {/* Header (Large Title, Monospace Date, Tags) */}
      {/* Content (The Essay/Note text) */}
      {/* Footer (Simple "Next Post" link) */}
    </div>
  )
}

export default Article

