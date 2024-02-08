export default function Contact() {
    return <>
        <div className="container py-4">
            <div className="title text-center mt-5 py-5">
                <h1 className='fw-bold'>CONATCT SECTION</h1>
                <div className="d-flex py-2  w-25 justify-content-around m-auto">
                    <div className="line-start bg-dark">
                    </div>
                    <i className="fa-solid fa-star px-4 text-dark"></i>
                    <div className="line-start bg-dark">
                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <form className="w-75  style-input py-5" >
                <input className="form form-control shadow w-75 m-auto mb-5" type="text" placeholder="userName" />
                <input className="form form-control shadow w-75 m-auto mb-5" type="text" placeholder="userAge" />
                <input className="form form-control shadow w-75 m-auto mb-5" type="email" placeholder="userEmail" />
                <input className="form form-control shadow w-75 m-auto mb-5" type="password" placeholder="userPasword" />
                <button type="button" className="btn btn-info d-block  m-auto shadow text-white">send Message </button>
            </form>
            </div>
        </div>






    </>
}