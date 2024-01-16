import { Fragment } from "react"
import down from "../assets/Frame (4).svg";

const FAQ = () => {
    return(
        <Fragment>
            <div className="mx-28 pt-24">
                <h1 className="text-4xl font-bold text-[#1143A7] mb-10">FAQ</h1>
                <div className="flex justify-between border-2 border-blue-500 w-[52rem] py-2.5 px-6 rounded-xl mb-7 font-medium">
                    <p>Can education flashcards be used for all age groups?</p>
                    <img src={down} alt="" />
                </div>
                <div className="flex justify-between border-2 border-blue-500 w-[52rem] py-2.5 px-6 rounded-xl mb-7 font-medium">
                    <p>How do education flashcards work?</p>
                    <img src={down} alt="" />
                </div>
                <div className="flex justify-between border-2 border-blue-500 w-[52rem] py-2.5 px-6 rounded-xl mb-40 font-medium">
                    <p>Can education flashcards be used for test preparation?</p>
                    <img src={down} alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default FAQ;