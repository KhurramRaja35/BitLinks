import React from 'react'
import Image from 'next/image'
import BlurText from "@/ReactBits/BlurText/BlurText";
import FadeContent from "@/fade/FadeContent/FadeContent";

const Contact = () => {
    return (
        <main className='bg-purple-200 '>
             <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <section className='md:h-[calc(100vh-8rem)] grid grid-cols-1 grid-rows-2 place-content-center  md:grid-cols-2 md:grid-rows-1' >

            <div className='flex justify-center items-center bg-purple-200'>

                <Image className='mix-blend-darken  flex justify-center items-center' src={"/vector2.jpg"} alt='contact us' width={400} height={400} />
            </div>
            

                <form className='flex flex-col gap-4 justify-center px-6 md:px-0 mb-6 md:mb-0 md:pr-6' action="https://api.web3forms.com/submit" method="POST">

                    <h2 className='font-bold text-2xl text-center text-purple-700'><BlurText
                        text="Let's Talk With Us!"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-3xl font-bold text-center flex justify-center "
                    // className="text-2xl mb-8"
                    /></h2>

                    {/* <!-- Replace with your Access Key --> */}
                    <input type="hidden" name="access_key" value="087b3918-aaba-4a8f-be44-2c73af4825f3" />

                    {/* <!-- Form Inputs. Each input must have a name="" attribute --> */}

                    <label className='flex flex-col'>
                        <span className='text-lg font-bold mb-1'>Name:</span>
                        <input className='bg-white px-4 py-2 rounded-lg outline-purple-700' type="text" name="name" placeholder='Enter Your Name' required />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-lg font-bold mb-1'>Email:</span>
                        <input className='bg-white px-4 py-2 rounded-lg outline-purple-700' type="email" name="email" placeholder='Enter Your Email' required />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-lg font-bold mb-1'>Message:</span>
                        <textarea className='bg-white px-4 py-2 rounded-lg outline-purple-700' name="message" placeholder='Enter Your Message ' required></textarea>
                    </label>

                    {/* <!-- Honeypot Spam Protection --> */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    {/* <!-- Custom Confirmation / Success Page --> */}
                    {/* <!-- <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> --> */}

                    <button className='bg-purple-400 shadow-lg p-3 font-bold text-white cursor-pointer rounded-lg w-full' type="submit">Submit Form</button>

                </form>



            </section>
</FadeContent>

        </main>
    )
}

export default Contact
