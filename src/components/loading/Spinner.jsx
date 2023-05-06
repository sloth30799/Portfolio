import HashLoader from "react-spinners/HashLoader"

export const Spinner = (props) => {
  return (
    <HashLoader {...props} aria-label="Loading Spinner" data-testid="loader" />
  )
}
