import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { BsTelephoneFill } from "react-icons/bs"
import { TbBrandMailgun } from "react-icons/tb"

const styles = {
  title: `text-2xl font-title`,
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
    <div className="p-3">
      <div className="container m-auto shadow-black border-solid border-black border-2 bg-white text-black my-6 p-3">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-9 p-3">
          <h1 className={styles.title}>Contact</h1>
          <div className="flex gap-6 flex-col lg:w-1/2 lg:flex-row">
            <div className="flex gap-3 items-center">
              <BsTelephoneFill size={"3rem"} />
              <h1 className="text-lg font-bold">Tel: +95 9250 4965 73</h1>
            </div>
            <div className="flex gap-3 items-center lg:border-solid lg:border-black lg:border-l-2 lg:pl-3">
              <TbBrandMailgun size={"3rem"} />
              <a
                href="mailto:sloth30799@gmail.com"
                target="_blank"
                className="text-lg underline font-bold"
              >
                sloth30799@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-row lg:justify-between gap-9 p-3">
          <h1 className={styles.title}>Don't be shy! Hit me up!</h1>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="text-xl font-bold">
                Interesting projects? Want to Say Hello?
              </h1>
              <p className="text-ghost">Typically reply in 1 or 2 days</p>
            </div>
            <div className="form-control w-full max-w-lg py-6">
              <form ref={form} onSubmit={sendEmail}>
                <label className="label-text bg-black text-white p-1 rounded-t-lg text-[0.8rem]">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  aria-label=""
                  className="input input-bordered w-full input-accent input-sm max-w-lg mb-3"
                />
                <label className="label-text bg-black text-white p-1 rounded-t-lg text-[0.8rem]">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  aria-label=""
                  className="input input-bordered input-accent input-sm w-full max-w-lg mb-3"
                />
                <label className="label-text bg-black text-white p-1 rounded-t-lg text-[0.8rem]">
                  Message
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered textarea-accent textarea-sm w-full max-w-lg mb-3"
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
    </div>
  )
}

export default Contact
