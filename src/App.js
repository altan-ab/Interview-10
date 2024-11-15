import React, { useState } from 'react'
import './styles.css'

const ONE =
  'https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const TWO =
  'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const THREE =
  'https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const FOUR =
  'https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const FIVE =
  'https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const SIX =
  'https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const IMAGES = [ONE, TWO, THREE, FOUR, FIVE, SIX]

function App() {
  return <Captcha />
}

const Captcha = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [targetNumber, setTargetNumber] = useState(null)

  const handleStart = () => {
    // Rastgele bir hedef sayı seç (1-6 arasında)
    const randomNumber = Math.floor(Math.random() * 6) + 1
    setTargetNumber(randomNumber)
    setIsModalOpen(true)
  }

  const handleImageClick = (imageIndex) => {
    if (imageIndex + 1 === targetNumber) {
      alert('Doğru seçim! CAPTCHA tamamlandı.')
      // Başlangıç durumuna dön
      setIsModalOpen(false)
      setTargetNumber(null)
    } else {
      alert('Yanlış seçim! Tekrar deneyin.')
    }
  }

  return (
    <div className="captcha-container">
      {!isModalOpen && (
        <button onClick={handleStart} className="start-button">
          CAPTCHA Başlat
        </button>
      )}
      {isModalOpen && (
        <div className="modal">
          <h3 className="modal-text">
            Lütfen "{targetNumber}" sayısının resmini seçin.
          </h3>
          <div className="images-grid">
            {IMAGES.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Sayı ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className="captcha-image"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
