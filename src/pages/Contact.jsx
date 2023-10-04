

const Contact = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully. We will get back to you soon.") 
        
    }

  return (
   <section className="">
      <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="heading text-center">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text__para">
            Got a technical issue or inquiry? We are here to help. Fill out the form below and we will get back to you as soon as possible.
          </p>
          <form className="space-y-8">
              <div>
                  <label className="form__label">Your Email</label>
                  <input type="email" className="form__input" placeholder="example@gmail.com" />
              </div>
              <div>
                  <label className="form__label">Subject</label>
                  <input type="text" className="form__input mt-1" placeholder="Let us know how we can help you?" />
              </div>

              <div className="sm:col-span-2">
                  <label className="form__label">Your Message</label>
                  <textarea type="text" 
                  rows="6" 
                  className="form__input mt-1" 
                  placeholder="Leave a comment...."></textarea>
              </div>
              <button onClick={submitHandler} type="submit" className="btn rounded sm:w-fit">Submit</button>
          </form>
      </div>
   </section>
  )
}

export default Contact
