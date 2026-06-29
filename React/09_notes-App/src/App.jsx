import React, { useCallback, useEffect, useMemo, useState } from 'react'

const NoteCard = React.memo(function NoteCard({ note, onView, onDelete, onTogglePin }) {
  const { title, body, pinned } = note
  return (
    <div className='relative h-52 w-40 rounded-2xl bg-white p-3 overflow-hidden hover:shadow-lg transform hover:scale-105 transition'>
      <div className='absolute right-2 top-2 flex gap-1'>
        <button onClick={(e)=>{e.stopPropagation(); onTogglePin(note.id)}} title={pinned? 'Unpin' : 'Pin'} className='text-sm'>
          {pinned ? '📌' : '📍'}
        </button>
        <button onClick={(e)=>{e.stopPropagation(); onDelete(note.id)}} title='Delete' className='text-sm'>
          🗑️
        </button>
      </div>
      <button onClick={() => onView(note)} className='text-left w-full h-full'>
        <h3 className='font-bold text-black text-sm'>{title}</h3>
        <p className='text-xs text-gray-800 mt-2 line-clamp-6'>{body}</p>
      </button>
    </div>
  )
})

const App = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [editing, setEditing] = useState(false)
  const [editTitle, setEditTitle] =  useState('')
  const [editBody, setEditBody] = useState('')

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault()
      if (!title.trim() && !body.trim()) return
      setNotes((prev) => [{ id: Date.now(), title: title.trim() || 'Untitled', body: body.trim(), pinned: false }, ...prev])
      setTitle('')
      setBody('')
    },
    [title, body]
  )
  useEffect(() => {
    try {
      const raw = localStorage.getItem('notes_v1')
      if (raw) setNotes(JSON.parse(raw))
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('notes_v1', JSON.stringify(notes))
    } catch (e) {}
  }, [notes])

  const deleteNote = useCallback((id) => setNotes((prev) => prev.filter((p) => p.id !== id)), [])

  const togglePin = useCallback((id) => setNotes((prev) => prev.map(n => n.id===id?{...n, pinned: !n.pinned}:n)), [])

  const openNote = useCallback((note) => {
    setSelected(note)
    setEditTitle(note.title)
    setEditBody(note.body)
    setEditing(false)
  }, [])

  const closeModal = useCallback(() => {
    setSelected(null)
    setEditing(false)
  }, [])

  const saveEdit = useCallback(() => {
    if (!selected) return
    setNotes(prev => prev.map(n => n.id===selected.id?{...n, title: editTitle, body: editBody}:n))
    setSelected(prev => prev?{...prev, title: editTitle, body: editBody}:null)
    setEditing(false)
  }, [selected, editTitle, editBody])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const list = q ? notes.filter(n => (n.title + ' ' + n.body).toLowerCase().includes(q)) : notes
    // pinned first
    return [...list].sort((a,b)=> (b.pinned?1:0) - (a.pinned?1:0))
  }, [notes, search])

  const noteItems = useMemo(() => filtered.map((n) => <NoteCard key={n.id} note={n} onView={openNote} onDelete={deleteNote} onTogglePin={togglePin} />), [filtered, openNote, deleteNote, togglePin])

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded resize-none'
          placeholder='Write Details'
        />
        <button type='submit' className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>
          Add Note
        </button>
        <div className='w-full mt-2'>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search notes...' className='px-3 py-2 rounded w-full text-black' />
        </div>
      </form>
      <div className='lg:w-1/2 gap-5 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap mt-5 gap-5 overflow-auto h-full'>
          {notes.length ? noteItems : Array.from({ length: 5 }).map((_, i) => <div key={i} className='h-52 w-40 rounded-2xl bg-white' />)}
        </div>
      </div>
      {selected && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-4' onClick={closeModal}>
          <div className='bg-white text-black rounded-lg max-w-xl w-full p-6' onClick={(e)=>e.stopPropagation()}>
            {!editing ? (
              <>
                <div className='flex justify-between items-start gap-4'>
                  <h2 className='text-xl font-bold'>{selected.title}</h2>
                  <div className='flex gap-2'>
                    <button onClick={() => { setEditing(true) }} className='px-3 py-1 bg-gray-200 rounded'>Edit</button>
                    <button onClick={() => { deleteNote(selected.id); closeModal() }} className='px-3 py-1 bg-red-400 text-white rounded'>Delete</button>
                  </div>
                </div>
                <p className='mt-4 whitespace-pre-wrap text-sm text-gray-800'>{selected.body}</p>
              </>
            ) : (
              <>
                <input value={editTitle} onChange={e=>setEditTitle(e.target.value)} className='w-full px-3 py-2 border rounded' />
                <textarea value={editBody} onChange={e=>setEditBody(e.target.value)} className='w-full mt-3 px-3 py-2 border rounded h-40' />
                <div className='mt-3 flex gap-2 justify-end'>
                  <button onClick={()=>{setEditing(false)}} className='px-3 py-1 bg-gray-200 rounded'>Cancel</button>
                  <button onClick={saveEdit} className='px-3 py-1 bg-blue-600 text-white rounded'>Save</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App