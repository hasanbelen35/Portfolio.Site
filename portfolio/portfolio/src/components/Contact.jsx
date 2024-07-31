import { useFormik } from "formik";
import '../componentCSS/Contact.css';
import { registerFormScheamas } from "../scheamas/RegisterFormScheamas";
import { motion } from 'framer-motion';

function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: registerFormScheamas,
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

  return (
    <div className="contact-page-div">
      <div className="contact-div">
        <motion.div
          initial={{ opacity: 0, y: "-100vw", rotate: 90, scale: 0.8 }} // Başlangıçta sağda, döndürülmüş ve küçük
          animate={{ opacity: 1, y  : 0, rotate: 0, scale: 1 }} // Ortaya gel, döndür ve normal boyuta getir
          transition={{ duration: 0.8 }} // Animasyon süresi
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label> <br />
            <input
              placeholder="Full Name..."
              id="fullName"
              name="fullName"
              type="text"
              onChange={handleChange}
              value={values.fullName}
            />
            {errors.fullName && touched.fullName && <p className="input-error">{errors.fullName}</p>}
            <br />

            <label htmlFor="email">Email Address</label> <br />
            <input
              placeholder="Email..."
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && <p className="input-error">{errors.email}</p>}
            <br />

            <label htmlFor="message">Your Message</label> <br />
            <textarea
              placeholder="Your Message..."
              id="message"
              name="message"
              onChange={handleChange}
              value={values.message}
            />
            {errors.message && touched.message && <p className="input-error">{errors.message}</p>}
            <br />

            <button id="contact-button" type="submit">Submit</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
