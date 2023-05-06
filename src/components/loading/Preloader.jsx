import useLoader from "../../hooks/useLoader"
import { Spinner } from "./Spinner"

const Preloader = ({ backgroundColor, children, ...rest }) => {
  const { loader } = useLoader()
  if (!loader) return children
  return (
    <div
      className={`loader ${backgroundColor} fixed top-0 left-0 w-full h-screen flex gap-3 justify-center items-center`}
    >
      <Spinner {...rest} />
    </div>
  )
}

export default Preloader
