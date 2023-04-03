import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { BsTelephoneFill } from "react-icons/bs"
import { TbBrandMailgun } from "react-icons/tb"

const styles = {
  container: `flex flex-col lg:flex-row lg:justify-between gap-9 p-3`,
  title: `font-bold text-2xl`,
  divider: `w-full h-0 lg:w-0 border-b lg:border-b-0 lg:border-r lg:h-12`,
}

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log("message sent")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <div className="flex gap-6 flex-col lg:w-1/2 lg:flex-row">
          <div className="flex gap-3 items-center">
            <BsTelephoneFill size={"3rem"} />
            <h1 className="text-lg">Tel: +95 9250 4965 73</h1>
          </div>
          <div className={styles.divider}></div>
          <div className="flex gap-3 items-center">
            <TbBrandMailgun size={"3rem"} />
            <a
              href="mailto:sloth30799@gmail.com"
              target="_blank"
              className="text-lg underline"
            >
              sloth30799@gmail.com
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.container}>
        <h1 className={styles.title}>Don't be shy! Hit me up!</h1>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-3 mb-3">
            <h1 className="text-xl font-bold">
              Interesting projects? Want to Say Hello?
            </h1>
            <p className="text-accent font-bold">
              Typically reply in 1 or 2 days
            </p>
          </div>
          <div className="form-control w-full max-w-lg bg-primary p-3 rounded">
            <form ref={form} onSubmit={sendEmail}>
              <label className="label-text bg-black text-white p-1 rounded">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                aria-label=""
                className="input input-bordered w-full max-w-lg mb-3"
              />
              <label className="label-text bg-black text-white p-1 rounded">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                aria-label=""
                className="input input-bordered w-full max-w-lg mb-3"
              />
              <label className="label-text bg-black text-white p-1 rounded">
                Message
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered textarea-lg w-full max-w-lg mb-3"
              />
              <input
                type="submit"
                value="Send"
                aria-label="submit"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
