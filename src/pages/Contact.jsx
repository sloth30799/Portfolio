import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import mailIcon from "../assets/mail-icon.svg"
import phoneIcon from "../assets/phone-icon.svg"

const styles = {
  title: `text-2xl font-title`,
  divider: `w-full h-0 lg:w-0 border-b lg:border-b-0 lg:border-r lg:h-12`,
}

const Contact = () => {
  const form = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
    } catch (error) {
      console.error(error.text)
    }
  }

  return (
    <section className="p-3">
      <div className="container p-3 m-auto my-6 text-black bg-white border-2 border-black border-solid shadow-black">
        <div className="flex flex-col p-3 lg:flex-row lg:justify-between gap-9">
          <h1 className={styles.title}>Contact</h1>
          <div className="flex flex-col gap-6 lg:w-1/2 lg:flex-row">
            <div className="flex items-center justify-center gap-3 pr-3 flex-column lg:border-solid lg:border-black lg:border-r-2">
              <img
                src={phoneIcon}
                alt="phone-icon"
                className="h-[35px] w-[35px]"
              />
              <p className="text-lg font-bold">Tel: +95 9250 4965 73</p>
            </div>
            <div className="flex items-center justify-center gap-3 flex-column ">
              <img
                src={mailIcon}
                alt="phone-icon"
                className="h-[35px] w-[35px]"
              />
              <a
                href="mailto:sloth30799@gmail.com"
                target="_blank"
                className="text-lg font-bold underline"
              >
                sloth30799@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col p-3 lg:flex-row lg:justify-between gap-9">
          <h1 className={styles.title}>Don't be shy! Hit me up!</h1>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="text-lg font-bold">
                Interesting projects? Want to Say Hello?
              </h1>
              <p className="text-sm text-accent">
                Typically reply in 1 or 2 days
              </p>
            </div>
            <div className="w-full max-w-lg py-6 form-control">
              <form ref={form} onSubmit={sendEmail}>
                <label className="p-1 text-sm text-white bg-black rounded-t-lg label-text font-body">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  aria-label=""
                  className="w-full max-w-lg mb-3 input input-bordered input-accent input-sm"
                />
                <label className="p-1 text-sm text-white bg-black rounded-t-lg label-text font-body">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  aria-label=""
                  className="w-full max-w-lg mb-3 input input-bordered input-accent input-sm"
                />
                <label className="p-1 text-sm text-white bg-black rounded-t-lg label-text font-body">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full max-w-lg mb-3 textarea textarea-bordered textarea-accent textarea-sm"
                />
                <input
                  type="submit"
                  value="Send"
                  aria-label="submit"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
