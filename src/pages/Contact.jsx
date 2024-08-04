import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="container mx-auto pt-16">
    <div className="lg:flex">
        <div className="xl:w-2/5 lg:w-2/5 bg-[#FFBF1B] py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <h1 className="xl:text-4xl text-3xl pb-4 text-black font-bold">Get in touch</h1>
                <p className="text-xl text-black pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to assist you.</p>
                <div className="flex pb-4 items-center">
                    <div className='text-xl'>
                        <BsWhatsapp/>
                    </div>
                    <a
              href="https://api.whatsapp.com/send/?phone=923189416906&text=Hello%2C+I%27m+interested+to+buy&type=phone_number&app_absent=0"
              target="_blank"
            >
              
                    <p className="pl-4 text-black text-base">03189416906 <span className='pl-8'>(available from 10:00pm – 8:00pm)</span></p>
            </a>

                </div>
                <div className="flex items-center">
                    <div className='text-2xl'>
                        <HiMail/>
                    </div>
                    <a href="mailto:sales@grizzlyfries.com<">
                    <p className="pl-4 text-black text-base">sales@grizzlyfries.com</p>
                    </a>
                </div>
                <div>
                <h1 className='text-xl font-semibold pt-8'>Address:-</h1>
                <p className="text-lg text-black pt-2 tracking-wide">
                Hamdard chowk near Minhaj University Lahore.
                </p>
                </div>
            </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 bg-white h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
            <form id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br">
                <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                    <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                        <div className="flex flex-col">
                            <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                Full Name
                            </label>
                            <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-yellow-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                        </div>
                    </div>
                    <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                Email
                            </label>
                            <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-yellow-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-wrap">
                    <div className="w-2/4 max-w-xs">
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                Phone
                            </label>
                            <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-yellow-400 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea placeholder name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-yellow-400" rows={8} id="message" defaultValue={""} />
                    </div>
                    <button type="submit" className="focus:outline-none text-white bg-[#FFBF1B]  duration-500 border-0 f hover:bg-[#e4a914] ease-in-out rounded px-8 py-3 text-sm leading-6">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact