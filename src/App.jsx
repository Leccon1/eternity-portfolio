import { animate } from 'animejs'
import { useEffect, useRef, useState } from 'react'

import Intro from './components/Intro/Intro'

const App = () => {
  const containerRef = useRef(null)
  const [isIntroTextFinished, setIsIntroTextFinished] = useState(false)

  const pageRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return

    if (isIntroTextFinished) {
      animate(pageRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutQuad',
        duration: 800,
      })
    }
  }, [isIntroTextFinished])

  return (
    <div className="app" ref={containerRef}>
      <div id="page" ref={pageRef} style={{ opacity: 0 }}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, alias nesciunt! Nulla
          dolorum rerum similique praesentium fuga suscipit architecto recusandae, exercitationem
          natus earum ratione esse eum quaerat quas voluptas expedita nihil officiis quia rem
          voluptate a, nemo optio accusamus amet? Nemo doloremque veniam dolorem distinctio rem quo
          quaerat hic aperiam dignissimos qui similique ducimus unde eligendi neque voluptatum,
          animi sint corporis quisquam amet necessitatibus. Molestiae sapiente quaerat quisquam nemo
          tenetur enim corporis illum alias nostrum adipisci error, in eligendi pariatur fugit
          voluptatibus porro. Cupiditate officiis eum neque, debitis mollitia dicta facere,
          quibusdam quam necessitatibus non doloremque accusantium molestias, vero modi.
        </p>
      </div>

      <Intro onStartAnimateFinish={() => setIsIntroTextFinished(true)} />
    </div>
  )
}

export default App
