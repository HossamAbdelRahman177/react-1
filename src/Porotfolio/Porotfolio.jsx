import img1 from '../Components/Assets/images/poert1.png'
import img2 from '../Components/Assets/images/port2.png'
import img3 from '../Components/Assets/images/port3.png'
export default function Porotfolio() {
    return <>
        <div className="container py-4">
            <div className="title text-center mt-5 py-5">
                <h1 className='fw-bold'>PORTFOLIO COMPONEN</h1>
                <div className="d-flex py-2  w-25 justify-content-around m-auto">
                    <div className="line-start bg-dark">
                    </div>
                    <i className="fa-solid fa-star px-4 text-dark"></i>
                    <div className="line-start bg-dark">
                    </div>

                </div>
            </div>
            <div className="row py-4 g-5">
                <div className="col-md-4">
                    <div className="item-imge position-relative ">
                        <img className='w-100' src={img1} alt=""  />
                        <div className='w-100 main-color-imge h-100 position-absolute top-0 end-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item-imge position-relative ">
                        <img className='w-100' src={img2} alt="" />
                        <div className='w-100 main-color-imge h-100 position-absolute top-0 end-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item-imge position-relative ">
                        <img className='w-100' src={img3} alt=""    />
                        <div className='w-100 main-color-imge h-100 position-absolute top-0 end-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item-imge position-relative ">
                        <img className='w-100' src={img1} alt=""    />
                        <div className='w-100 main-color-imge h-100 position-absolute top-0 end-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item-imge position-relative ">
                        <img className='w-100' src={img2} alt=""    />
                        <div className='w-100 main-color-imge h-100 position-absolute top-0 end-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item-imge position-relative ">
                        <img className='w-100' src={img1} alt=""  />
                        <div className='w-100 main-color-imge h-100 position-absolute top-0 end-0 d-flex justify-content-center align-items-center'>
                            <div>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      
       

    </>
}