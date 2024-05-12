import { useState } from 'react';
import swal from 'sweetalert';
import emailjs from "emailjs-com";

const Contact_From = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "myemailjs-service-1214as",
        "template_lhbxe8l",
        e.target,
        "WZVDf5Ns83ubY5mrx"
      )
      .then(
        (result) => {
          console.log(result);
          setResultMessage(
            "Thank you for your message! We'll get in touch soon."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const missingFields = [];
    if (input.name === '') {
      missingFields.push('Name');
    }
    if (input.email === '') {
      missingFields.push('Email');
    }
    if (input.phone === '') {
      missingFields.push('Phone number');
    }
    if (input.message === '') {
      missingFields.push('Message');
    }
  
    if (missingFields.length === 1) {
      swal('Oops', `Please fill in the following field: ${missingFields[0]}`, 'error');
    } else if (missingFields.length > 1) {
      const missingFieldsText = missingFields.join(', ');
      swal('Oops', `Please fill in the following fields: ${missingFieldsText}`, 'error');
    }else {
      sendEmail(e);
    }
  };
  

  return (
    <div className='order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2'>
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
        {/* Form Group */}
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-[10px]'>
            <label
              htmlFor='contact-name'
              className='text-lg font-bold leading-[1.6]'
            >
              Enter your name <b className='text-colorOrangyRed'>*</b>
            </label>
            <input
              type='text'
              name='name'
              value={input.name}
              onChange={handleInput}
              id='contact-name'
              placeholder='Adam Smith'
              className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              required=''
            />
          </div>
          {/* Form Single Input */}
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-[10px]'>
            <label
              htmlFor='contact-email'
              className='text-lg font-bold leading-[1.6]'
            >
              Email address <b className='text-colorOrangyRed'>*</b>
            </label>
            <input
              type='email'
              name='email'
              value={input.email}
              onChange={handleInput}
              id='contact-email'
              placeholder='example@gmail.com'
              className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              required=''
            />
          </div>
          {/* Form Single Input */}
        </div>
        {/* Form Group */}
        {/* Form Group */}
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-[10px]'>
            <label
              htmlFor='contact-phone'
              className='text-lg font-bold leading-[1.6]'
            >
              Phone number <b className='text-colorOrangyRed'>*</b>
            </label>
            <input
              type='tel'
              name='phone'
              value={input.phone}
              onChange={handleInput}
              id='contact-phone'
              placeholder='+880-1345-922210'
              className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              required=''
            />
          </div>
          {/* Form Single Input */}
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-[10px]'>
            <label
              htmlFor='contact-company'
              className='text-lg font-bold leading-[1.6]'
            >
              Company
            </label>
            <input
              type='text'
              name='company'
              value={input.company}
              onChange={handleInput}
              id='contact-company'
              placeholder='EX Facebook'
              className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              required=''
            />
          </div>
          {/* Form Single Input */}
        </div>
        {/* Form Group */}
        {/* Form Group */}
        <div className='grid grid-cols-1 gap-6'>
          {/* Form Single Input */}
          <div className='flex flex-col gap-y-[10px]'>
            <label
              htmlFor='contact-message'
              className='text-lg font-bold leading-[1.6]'
            >
              Message <b className='text-colorOrangyRed'>*</b>
            </label>
            <textarea
              name='message'
              value={input.message}
              onChange={handleInput}
              id='contact-message'
              className='min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
              placeholder='Write your message here...'
              required=''
            />
          </div>
          {/* Form Single Input */}
        </div>
        <div>
          <button
            type='submit'
            className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
          >
            Send your message
          </button>
        </div>
        {/* Form Group */}
      </form>
      {/* Contact Form */}
    </div>
  );
};

export default Contact_From;
