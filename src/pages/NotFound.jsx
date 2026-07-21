import { Link } from "react-router-dom"
import { notFound } from "../data/portfolio"

export default function NotFound() {
  return (
    <article className="page page-not-found">
      <p className="eyebrow">{notFound.eyebrow}</p>
      <p className="not-found-number" aria-hidden="true">404</p>
      <h1>{notFound.heading}</h1>
      <p>{notFound.body}</p>
      <div className="action-row">
        <Link className="action-primary" to={notFound.homeAction.href}>{notFound.homeAction.label}</Link>
        <Link to={notFound.projectsAction.href}>{notFound.projectsAction.label}</Link>
      </div>
    </article>
  )
}
