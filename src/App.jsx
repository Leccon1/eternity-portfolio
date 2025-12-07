import { animate } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import Intro from './components/Intro/Intro'

const App = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    if (!isIntroFinished) return
    if (!containerRef.current) return

    const page = containerRef.current.querySelector(`#page`)
    if (!page) return

    animate(page, {
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutQuad',
      duration: 600,
    })
  }, [isIntroFinished])

  return (
    <div className="app" ref={containerRef}>
      {!isIntroFinished && <Intro onFinish={() => setIsIntroFinished(true)} />}

      {isIntroFinished && (
        <div id="page">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, alias nesciunt! Nulla
            dolorum rerum similique praesentium fuga suscipit architecto recusandae, exercitationem
            natus earum ratione esse eum quaerat quas voluptas expedita nihil officiis quia rem
            voluptate a, nemo optio accusamus amet? Nemo doloremque veniam dolorem distinctio rem
            quo quaerat hic aperiam dignissimos qui similique ducimus unde eligendi neque
            voluptatum, animi sint corporis quisquam amet necessitatibus. Molestiae sapiente quaerat
            quisquam nemo tenetur enim corporis illum alias nostrum adipisci error, in eligendi
            pariatur fugit voluptatibus porro. Cupiditate officiis eum neque, debitis mollitia dicta
            facere, quibusdam quam necessitatibus non doloremque accusantium molestias, vero modi.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
