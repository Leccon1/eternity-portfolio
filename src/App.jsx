import { useState } from 'react'

import Intro from './components/Intro/Intro'

const App = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false)

  return (
    <>
      {!isIntroFinished && <Intro onFinish={() => setIsIntroFinished(true)} />}

      {isIntroFinished && (
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa assumenda
            saepe vero facilis a eum exercitationem in amet fugit, asperiores eos repellendus
            similique odit esse, quod natus maxime hic!
          </p>
        </div>
      )}
    </>
  )
}

export default App
