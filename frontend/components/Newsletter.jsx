export default function Newsletter({ link, archivedDate, archivedLink }) {
  console.log('lllinkkkk', link)

  if (!link) {
    return (
      <div
        style={{
          width: '100%',
          height: '300px',
          // backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '1.2rem',
        }}
      >
        No newsletter available
      </div>
    )
  }
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '141.4286%',
          paddingBottom: 0,
          // boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform',
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src={`${link}?embed`}
          // src="https://www.canva.com/design/DAGeJvmyQXo/sQA9RwG84mUQQZ7w2yYVcQ/view?embed"
          // https://www.canva.com/design/DAGeJvmyQXo/sQA9RwG84mUQQZ7w2yYVcQ/view
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      {archivedDate && archivedLink && (
        <>
          <div className="font-[Convergence] text-xl py-8">
            Archived Newsletters
          </div>
          <a href={archivedLink}>&#9654; {archivedDate}</a>
        </>
      )}
    </>
  )
}
