import Lottie from "lottie-react"
import Load from "../assets/loading3.json"

const Loading = () => {
  return (
    <div>
      <Lottie
        animationData={Load}
        loop={true}
        autoPlay
        className="absolute top-1/2 left-1/2 h-screen w-3/12 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )

}

export default Loading