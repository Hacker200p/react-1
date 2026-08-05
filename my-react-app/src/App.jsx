import { useState } from 'react'
import './App.css'

const galleryThemes = [
  'City lights',
  'Forest trail',
  'Ocean view',
  'Desert road',
  'Mountain air',
  'Night market',
  'Studio still life',
  'Golden hour',
]

function createGalleryItems() {
  return Array.from({ length: 8 }, (_, index) => {
    const seed = Math.floor(Math.random() * 1_000_000)
    const theme = galleryThemes[index % galleryThemes.length]

    return {
      id: `${seed}-${index}`,
      seed,
      title: theme,
      description: `Random photo ${index + 1} from an online image source.`,
    }
  })
}

function App() {
  const [photos, setPhotos] = useState(() => createGalleryItems())

  const handleShuffle = () => setPhotos(createGalleryItems())

  return (
    <main className="gallery-shell">
      <section className="gallery-hero">
        <div>
          <p className="eyebrow">Mini React project</p>
          <h1>Random Photo Gallery</h1>
          <p className="description">
            A fast Vite + React gallery that pulls a fresh set of random online photos whenever you
            shuffle.
          </p>
        </div>

        <button className="primary-button" onClick={handleShuffle}>
          Shuffle photos
        </button>
      </section>

      <section className="gallery-grid" aria-label="Random photo gallery">
        {photos.map((photo, index) => (
          <article
            className={`photo-card ${index === 0 ? 'featured' : ''}`}
            key={photo.id}
          >
            <img
              src={`https://picsum.photos/seed/${photo.seed}/800/600`}
              alt={photo.title}
              loading="lazy"
            />
            <div className="photo-overlay">
              <p className="photo-index">0{index + 1}</p>
              <h2>{photo.title}</h2>
              <p>{photo.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
